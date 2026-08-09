import React, { useCallback, useEffect, useState } from "react";
import "./Agenda.css";

const SOURCE_URL = "https://pelisjuanita.com/tv/api-agenda.php";
const AGENDA_URL = `https://app-tizen.psy-electronics.com/?url=${encodeURIComponent(SOURCE_URL)}`;
const EVENT_TTL = 2.5 * 60 * 60 * 1000;
const PRIORITY_TEAMS = ["argentina", "boca", "inter miami", "inter de miami", "river", "aston villa", "inter de milan", "inter milan"];
const EXCLUDED_COUNTRIES = ["costa rica", "colombia", "peru", "chile", "bolivia", "ecuador", "canada"];
const CATEGORY_LOGOS = [
  { terms: ["tenis", "tennis"], url: "https://img.futbollibrehd.com.pe/uploads/Tenis_a5d5fcd1d1_594ebf0186.png" },
  { terms: ["boxeo", "boxing"], url: "https://img.futbollibrehd.com.pe/uploads/boxeo_2024_b15889ae93_ae58e10dcb.png" },
  { terms: ["argentina"], url: "https://img.futbollibrehd.com.pe/uploads/argentina_2bd748026e_628913fc18.png" },
  { terms: ["brasil"], url: "https://img.futbollibrehd.com.pe/uploads/brasil_25a533e5f7_a1a1ef7a7c.png" },
 { terms: ["mexico"], url: "https://img.futbollibrehd.com.pe/uploads/bandera_fbc29cb609_69a4b8272a.png" },
  { terms: ["leagues cup", "league cup"], url: "https://img.futbollibrehd.com.pe/uploads/leagues_cup_f7b23c5e8d_a6922075d9.png" },
];
const ARGENTINA_TIME = new Intl.DateTimeFormat("es-AR", {
  timeZone: "America/Argentina/Buenos_Aires",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});
const ARGENTINA_DATE = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "America/Argentina/Buenos_Aires",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const normalizeText = (value) =>
  String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const normalizeAgenda = (payload) => {
  if (!Array.isArray(payload?.data)) return [];

  return payload.data
    .map(({ id, attributes = {} }) => {
      const description = String(attributes.diary_description || "Partido").replace(/\s*\n\s*/g, " ").trim();
      const separator = description.indexOf(":");
      const competition = separator >= 0 ? description.slice(0, separator).trim() : "";
      const title = separator >= 0 ? description.slice(separator + 1).trim() : description;
      const country = attributes.country?.data?.attributes?.name || "";
      const status = String(attributes.promiedos_status || "").trim();
      const priority = PRIORITY_TEAMS.some((team) => normalizeText(description).includes(team));
      const live = Boolean(status) && !/^(final|prog\.?|no encontrado)$/i.test(status);
      const sourceDate = new Date(`${attributes.date_diary}T${attributes.diary_hour}-05:00`);
      const startsAt = sourceDate.getTime();
      const logoSearch = normalizeText(`${competition} ${country} ${description}`);
      const logo = CATEGORY_LOGOS.find(({ terms }) => terms.some((term) => logoSearch.includes(term)))?.url || "";

      const channels = (attributes.embeds?.data || [])
        .filter((embed) => embed.attributes?.embed_iframe)
        .map((embed) => ({
          id: embed.id,
          name: embed.attributes?.embed_name || "Ver canal",
          url: new URL(embed.attributes.embed_iframe, "https://pelisjuanita.com").href,
        }));

      return {
        id,
        title,
        category: competition || country,
        country,
        date: Number.isFinite(startsAt) ? ARGENTINA_DATE.format(sourceDate) : "",
        time: Number.isFinite(startsAt) ? ARGENTINA_TIME.format(sourceDate) : "",
        startsAt,
        homeScore: attributes.goles_local,
        awayScore: attributes.goles_visitante,
        status,
        channels,
        priority,
        live,
        logo,
        excludedCountry: EXCLUDED_COUNTRIES.includes(normalizeText(country)),
      };
    })
    .filter((event) => Number.isFinite(event.startsAt))
    .filter((event) => event.live || event.startsAt >= Date.now() - EVENT_TTL)
    .filter((event) => !event.excludedCountry || event.priority)
    .sort(
      (a, b) =>
        Number(b.priority) - Number(a.priority) ||
        Number(b.live) - Number(a.live) ||
        a.startsAt - b.startsAt
    );
};

function Agenda() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAgenda = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(AGENDA_URL, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const result = normalizeAgenda(await response.json());
      setEvents(result);
    } catch (loadError) {
      console.error("No se pudo cargar la agenda:", loadError);
      setError("No se pudo cargar la programación.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAgenda();
  }, [loadAgenda]);

  return (
    <section className="agenda" aria-labelledby="agenda-title">
      <div className="agenda-header">
        <h2 id="agenda-title">Agenda deportiva</h2>
        <button type="button" onClick={loadAgenda} disabled={loading}>Actualizar</button>
      </div>

      {loading && <p className="agenda-status">Cargando partidos…</p>}
      {!loading && error && <p className="agenda-status agenda-error">{error}</p>}
      {!loading && !error && events.length === 0 && <p className="agenda-status">No hay partidos programados.</p>}

      <div className="agenda-list">
        {events.map((event) => (
          <article className={`agenda-event${event.priority ? " agenda-priority" : ""}`} key={event.id}>
            <div className="agenda-ball" aria-hidden="true">
              {event.logo ? <img src={event.logo} alt="" /> : "⚽"}
            </div>
            <div className="agenda-info">
              {(event.category || event.date) && (
                <span className="agenda-meta">{[event.category, event.date].filter(Boolean).join(" · ")}</span>
              )}
              <strong>{event.title}</strong>
              {event.country && event.country !== event.category && <span>{event.country}</span>}
              <div className="agenda-channels">
                {event.channels.map((channel) => (
                  <a href={channel.url} target="_blank" rel="noopener noreferrer" key={channel.id}>
                    {channel.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="agenda-live">
              {event.time && <time>{event.time}</time>}
              {event.status && <span>{event.status}</span>}
              {(event.homeScore !== "-" || event.awayScore !== "-") && (
                <strong>{event.homeScore} - {event.awayScore}</strong>
              )}
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}

export default Agenda;
