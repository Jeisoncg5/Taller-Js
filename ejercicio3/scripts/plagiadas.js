function detectarPlagio(base, frasesEstudiante) {
  // Función para normalizar frases
  const normalizar = frase =>
    frase
      .toLowerCase(); // convertir a minúsculas

  // Normalizar la base y la guardar en un Set para búsqueda rápida
  const baseNormalizada = new Set(base.map(normalizar));

  // Revisa las frases del estudiante en orden
  return frasesEstudiante.filter(frase =>
    baseNormalizada.has(normalizar(frase))
  );
}
