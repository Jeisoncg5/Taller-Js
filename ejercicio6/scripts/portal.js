function portalFueraDeFase(codigos) {
  const conteo = {};
  for (let c of codigos) {             //Contar cuantas veces aoarece el portal
    conteo[c] = (conteo[c] || 0) + 1;
  }
  for (let i = 0; i < codigos.length; i++) {
    if (conteo[codigos[i]] === 1) {               // buscar ekl primer portal
      return i;
    }
  }
  return -1; // todos se repiten
}
let entrada = prompt("Ingrese los códigos de portales (ej: quasar, xyxyxy, aabbccddeeffg):");   //Pedir datos con prompt 
let resultado = portalFueraDeFase(entrada);

if (resultado === -1) {
  alert("Todos los portales están en fase.");
} else {                                                                    // Resultasdos
  alert("El primer portal está en el índice: " + resultado);
}