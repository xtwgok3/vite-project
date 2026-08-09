import React, { useCallback, useEffect, useState } from "react";
import "./Agenda.css";

const AGENDA_URL = "https://pelisjuanita.com/tv/api-agenda.php";

const normalizeAgenda = (payload) => {
  if (!Array.isArray(payload?.data)) return [];

  return payload.data
    .map(({ id, attributes = {} }) => {
      const description = String(attributes.diary_description || "Partido").replace(/\s*\n\s*/g, " ").trim();
      const separator = description.indexOf(":");
      const competition = separator >= 0 ? description.slice(0, separator).trim() : "";
      const title = separator >= 0 ? description.slice(separator + 1).trim() : description;
      const country = attributes.country?.data?.attributes?.name || "";

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
        date: attributes.date_diary || "",
        time: String(attributes.diary_hour || "").slice(0, 5),
        homeScore: attributes.goles_local,
        awayScore: attributes.goles_visitante,
        status: attributes.promiedos_status || "",
        channels,
      };
    })
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
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
          <article className="agenda-event" key={event.id}>
            <div className="agenda-ball" aria-hidden="true">⚽</div>
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
