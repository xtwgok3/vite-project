const vehicles = [
  {
    name: "Dragon-Ball-Super",
    description: "Dragon Ball Super",
    image:
    "https://e7.pngegg.com/pngimages/852/157/png-clipart-goku-super-dragon-ball-z-dragon-ball-collectible-card-game-majin-buu-trunks-goku-text-logo-thumbnail.png",
    VideoFrame: "https://www.telelatinohd.com/dragon-ball-super-24-horas-en-vivo.html",
  },
  {
    name: "DIGIMON",
    description: "HBO",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHbAgkPFYluaKB1F05vCCWiczwrKvtSss5Bq59U2Gm3arASoak",
    VideoFrame: "https://www.telegratishd.com/digimon-24-horas-en-vivo.html",
  },
  {
    name: "HBO-2",
    description: "HBO-2",
    image:
      "https://i.ibb.co/Swt9FDB/HBO-2.jpg",
    VideoFrame: "https://scabrillos.github.io/tc/fl3.html?get=LmN2YXR0di5jb20uYXIvbGl2ZS9jNmVkcy9IQk9fMi9TQV9MaXZlX2Rhc2hfZW5jL0hCT18yLm1wZA==&key=YzkwY2M1N2FkMmM0MzZlNWE3N2RiMmY4ZDlkYjJkODU=&key2=MDRmNmM3Mzk4NGJkY2ZmZDAxMzA1MDYwODQ5NzkzNWQ=",
  },
  {
    name: "HBO-PLUS",
    description: "HBO PLUS",
    image:
      "https://i.ibb.co/jwh41qp/hboplus.png",
    VideoFrame: "https://scabrillos.github.io/tc/fl.html?get=LmN2YXR0di5jb20uYXIvbGl2ZS9jNmVkcy9IQk9fUGx1cy9TQV9MaXZlX2Rhc2hfZW5jL0hCT19QbHVzLm1wZA==&key=ZjBlN2Y3ZDQ1ODk5MGVkZmFiN2I5OGI0MTI1NjQ2MTU=&key2=NzkyMDU3NTRiN2Y4NGE2MjY2MWMyZGJlOWRlNWRkNWQ=",
  },
  {
    name: "TNT-HD",
    description: "TNT-HD",
    image:
      "https://i.ibb.co/pX4fMwK/TNT.webp",
    VideoFrame: "https://scabrillos.github.io/tc/fl5.html?get=LmN2YXR0di5jb20uYXIvbGl2ZS9jM2Vkcy9UTlRfSERfQXJnL1NBX0xpdmVfZGFzaF9lbmMvVE5UX0hEX0FyZy5tcGQ=&key=ZmFhZDE3MjJhNTc1ZjRkOWVjN2I3NzRkYjYzYzg3OWM=&key2=Y2YwMTg0ODMwMzQ0YmEzNmFkMmZmZWY5ZGQyZGQ5ZDA=",
  },
  {
    name: "FX-HD",
    description: "FX-HD",
    image:
      "https://i.imgur.com/FXl2WuB.png",
    VideoFrame: "https://scabrillos.github.io/tc/fl5.html?get=LmN2YXR0di5jb20uYXIvbGl2ZS9jM2Vkcy9GWEhEL1NBX0xpdmVfZGFzaF9lbmMvRlhIRC5tcGQ=&key=OWFiOWM0MmM3MTNlMGZiNTUxN2RjNzdjYzE5ZDY3NTU=&key2=ZDhjMjcxYjgyMzg3ZTYwOWI2YzE5ZTVlNzkyNDBhZmY=",
  },
  {
    name: "UNIVERSAL",
    description: "UNIVERSAL",
    image:
      "https://i.imgur.com/Kf4n52t.png",
    VideoFrame: "https://scabrillos.github.io/tc/fl5.html?get=LmN2YXR0di5jb20uYXIvbGl2ZS9jNmVkcy9TdHVkaW9fVW5pdmVyc2FsL1NBX0xpdmVfZGFzaF9lbmMvU3R1ZGlvX1VuaXZlcnNhbC5tcGQ=&key=ZDliNTQxZTNjZDA2NGQ1Njk4NDNkYTQyNzg4ZDQyNjM=&key2=YmJhNWQyNmFkNTA1MWZiM2YyY2Y3ZTNkZDhhNGE3ZDg=",
  },
  {
    name: "Star-Channel",
    description: "Star Channel",
    image: "https://i.imgur.com/NYYkMbT.png",
    VideoFrame: "https://scabrillos.github.io/tc/fl.html?get=LmN2YXR0di5jb20uYXIvbGl2ZS9jM2Vkcy9GT1hIRC9TQV9MaXZlX2Rhc2hfZW5jXzJBL0ZPWEhELm1wZA==&key=ODAyM2U4NWVmOWQxNzU2MWVlMWI0MjQxNzliMWIxNWU=&key2=NDc3YWQxODlmMWZjZDJiYWVjMDI2MDY4MTA3Zjg2MmY=",
  },
  {
    name: "Warner-Bros",
    description: "Warner Bros",
    image: "https://i.imgur.com/K1AFnWQ.png",
    VideoFrame: "https://scabrillos.github.io/tc/fl.html?get=LmN2YXR0di5jb20uYXIvbGl2ZS9jN2Vkcy9XYXJuZXJIRC9TQV9MaXZlX2Rhc2hfZW5jXzJBL1dhcm5lckhELm1wZA==&key=MDY5YmQzZjBiNmMyNzk0NjdlMDg1NDlmMTdiZjViZDA=&key2=NWFmYTdlMzY5YTZkZTEwOTM4MThhODVhZjkxMmE3NzU=",
  },
  {
    name: "History",
    description: "History",
    image:
      "https://i.imgur.com/hL2YrRx.png",
    VideoFrame: "https://scabrillos.github.io/tc/fl.html?get=LmN2YXR0di5jb20uYXIvbGl2ZS9jN2Vkcy9IaXN0b3J5SEQvU0FfTGl2ZV9kYXNoX2VuY18yQS9IaXN0b3J5SEQubXBk&key=ZTgyMzE4ZTUxOGJhNzBjZWEzZDdiMzdiZWY5OWU2OTI=&key2=YTA1ZmNiNjM0YzA3MWE1MTRlMzAzOWUxYzI3NGI0ZGI=",
  },
  {
    name: "Magic-Kids",
    description: "Magic-Kids",
    image:
      "https://magickids.site/img/magickidslogo.png",
    VideoFrame: "https://embed.smashystream.com/playere.php?imdb=tt10366206",
  },
  {
    name: "Samurai-Jack",
    description: "Samurai-Jack",
    image:
      "https://raw.githubusercontent.com/xtwgok3/vite-project/main/src/data/samurai.png",
    VideoFrame: "https://cabrillos.github.io/mi-pagina/d4.html?id=3",
  },
  {
    name: "Primal",
    description: "Primal",
    image:
      "https://raw.githubusercontent.com/xtwgok3/vite-project/main/src/data/primal.png",
    VideoFrame: "https://cabrillos.github.io/mi-pagina/d4.html?id=4",
  },
  {
    name: "MLS",
    description: "MLS",
    image:
      "https://cdn.freebiesupply.com/images/large/2x/mls-logo-black-and-white.png",
    VideoFrame: "https://la12hd.com/vivo/canal.php?stream=disney5",
  },
  {
    name: "MLS2",
    description: "MLs2",
    image:
      "https://cdn.freebiesupply.com/images/large/2x/mls-logo-black-and-white.png",
    VideoFrame: "https://librefutbol.su/eventos/?r=aHR0cHM6Ly9lbnZpdm8xLmNvbS9jYW5hbC5waHA/c3RyZWFtPWRpc25leTE=",
  },
  {
    name: "MLS3",
    description: "MLs3",
    image:
      "https://cdn.freebiesupply.com/images/large/2x/mls-logo-black-and-white.png",
    VideoFrame: "https://la12hd.com/vivo/canal.php?stream=mls1es",
  },
  {
    name: "Anime-Xtrema",
    description: "Anime-Xtrema",
    image:
      "https://i.imgur.com/yor5owS.png",
    VideoFrame: "https://ww1.cuevana3.ch/episodio/scorpion-1x22",
  },
  {
    name: "DRAGON-BALL-S",
    description: "DRAGON-BALL-BALL-S",
    image:
      "https://www.cablevisionhd.com/imge/dragonballsuper.png",
    VideoFrame: "https://embed.sdfgnksbounce.com/embed2/dragonballsuper.html",
  },
  {
    name: "THUNDERBOTS",
    description: "THUNDERBOLTS",
    image:
      "",
    VideoFrame: "https://swiftplayers.com/e/6m37yni8emri",
  },
  {
    name: "DSports",
    description: "DSports",
    image:
      "",
    //VideoFrame: "https://stream196tp.com/global1.php?stream=dsports",
    VideoFrame: "https://tiogol.com/vivo/canal.php?stream=dsports",
  },
  {
    name: "DSports 2",
    description: "DSports 2",
    image:
      "",
    //VideoFrame: "https://stream196tp.com/global1.php?stream=dsports2",
    VideoFrame: "https://tiogol.com/vivo/canal.php?stream=dsports2",
  },
  {
    name: "DSports plus",
    description: "DSports plus",
    image:
      "",
    //VideoFrame: "https://stream196tp.com/global1.php?stream=dsportsplus",
    VideoFrame: "https://tiogol.com/vivo/canal.php?stream=dsportsplus",
  },
  {
    name: "TUDN",
    description: "TUDN",
    image:
      "",
    //VideoFrame: "https://stream196tp.com/global1.php?stream=tudn_usa",
    VideoFrame: "https://tiogol.com/vivo/canal.php?stream=tudn_usa",
  },
  {
    name: "DAZN TV",
    description: "DAZN TV",
    image:
      "",
    //VideoFrame: "https://stream196tp.com/global1.php?stream=dazntv1",
    VideoFrame: "https://tiogol.com/vivo/canal.php?stream=dazntv1",
  },
  {
    name: "CHILEVISION",
    description: "CHILEVISION",
    image:
      "",
    //VideoFrame: "https://stream196tp.com/global1.php?stream=dazntv1",
    VideoFrame: "https://cl-a9-p-e-pt11.cdn.mdstrm.com/live-stream-gdai/linear/hls/pa/event/V1j9hgJXRtKjBeFfx3xzFQ/stream/4487a9d4-cb6a-4bba-a1be-93a15621185f:DLS/master.m3u8",
  },
];

export default vehicles;
