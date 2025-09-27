const base = [
  "El conocimiento es poder.",
  "Aprender nunca es una pérdida de tiempo!",
  "Programar es divertido",
];

let frasesInput = prompt(" Escribe frases: ");   //Input de la frase

let frasesEstudiante = frasesInput.split(";");                   //la frase la convierte a array

function normalizar(frase) {
  return frase
    .trim()                     // quitar espacios extra
    .replace(/[.!?]+$/, "")     // quitar signos finales
    .toLowerCase();             // todo en minúsculas
}

function detectarPlagio(base, frasesEstudiante) {                //funcion para detectar el plagio
  const baseNormalizada = new Set(base.map(normalizar));
  return frasesEstudiante.filter(frase => baseNormalizada.has(normalizar(frase))
  );
}

let resultado = detectarPlagio(base, frasesEstudiante);


if (resultado.length === 0) {
  alert("No hay frases plagiadas.");                            //Alerts de los resultados
} else {
  alert("Frases plagiadas:\n" + resultado.join("\n"));
}