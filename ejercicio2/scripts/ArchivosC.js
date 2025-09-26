function getCompromisedFiles(ultimaDescarga, droneLogs) {
  const compr = new Set();

  for (const [fileId, timesTamp] of droneLogs) {
    if (timesTamp > ultimaDescarga) {
      compr.add(fileId);
    }
  }

  return Array.from(compr).sort((a, b) => a - b);
}

// Datos del ejemplo
const ultimaDescarga = 1670000000;
const droneLogs = [
  [42, 1670000500],
  [13, 1670000000],
  [8, 1670000700],
  [8, 1670000001],
  [99, 1669999999],
];

const compr = getCompromisedFiles(ultimaDescarga, droneLogs);

alert("Archivos comprometidos:\n" + compr.join(", "));
