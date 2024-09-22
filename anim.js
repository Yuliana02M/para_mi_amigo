// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tal vez no hablamos como antes", time: 2 },
  { text: "ni estamos tan unidos...", time: 5 },
  { text: "No soy la mejor amistad que tienes,", time: 9 },
  { text: "ni la unica;", time: 11 },
  { text: "pero si la que te va escuchar siempre :)", time: 17 },
  { text: "Sabes que?????", time: 20 },
  { text: "en cualquier cosa aquí estoy.", time: 22 },
  { text: "ಥ⁠‿⁠ಥ (⁠ ⁠◜⁠‿⁠◝⁠ ⁠)⁠♡", time: 30 },
  { text: "Estoy  muy orgulla de tí,", time: 37 },
  { text: "eres un buen chico,", time: 40 },
  { text: "muy trabajador", time: 42 },
  { text: "y te mereces todo lo bonito de la vida.", time: 49 },
  { text: "Gracias ser la única persona que", time: 55 },
  { text: "realmente se ha tomado el tiempo", time: 58 },
  { text: "de escucharme y consolarme,", time: 62 },
  { text: "y eso siempre te lo voy a agradecer.", time: 65 },
  { text: "Espero nunca te vayas de mi lado, ", time: 70 },
  { text: "porque a tu lado me siento segura, ", time: 74 },
  { text: "no siento miedo", time: 77 },
  { text: "y lo más bonito", time: 79 },
  { text: "es que puedo ser YO", time: 81 },
  { text: "Hoy me siento con un nudo en la garganta  ", time: 88 },
  { text: "y con el corazon lleno de recuerdos", time: 90 },
  { text: "Aun que no quiera decirlo,", time: 95 },
  { text: "sé que vamos por distintos caminos...", time: 98 },
  { text: "Aun que dejamer decirte que ", time: 120 },
  { text: "TE EXTAÑO", time: 128 },
  { text: "GRACIAS POR ESA BONITA AMISTAD", time: 130 },
  { text: "DENNIS ROMERO HUAMANTICA", time: 132 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);