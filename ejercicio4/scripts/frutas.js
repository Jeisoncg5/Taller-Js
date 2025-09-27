function frutaEmpacadaCorrectamente(entrada, salida) {
  const GrupodeFrutas = [];
  let j = 0;                                                   // índice para salida

  for (const fruta of entrada) {
    GrupodeFrutas.push(fruta);
    while (GrupodeFrutas.length && GrupodeFrutas[GrupodeFrutas.length - 1] === salida[j]) {
      GrupodeFrutas.pop();
      j++;
    }
  }
  return j === salida.length;
}
let entradaInput = prompt("Ingrese las frutas que entran separadas por ',' (ej: manzana,banana,kiwi):"); // Pedimos al usuario las frutas de entrada y salida
let salidaInput  = prompt("Ingrese las frutas que salen separadas por ',' (ej: kiwi,banana,manzana):");


let entrada = entradaInput.split(",").map(f => f.trim());        // Convertir las strings en arrays
let salida  = salidaInput.split(",").map(f => f.trim());


let esCorrecto = frutaEmpacadaCorrectamente(entrada, salida);  // verificación


if (esCorrecto) {
  alert("La secuencia de salida es valida .");                    //Resultados despues de condiciiones
} else {
  alert("La secuencia de salida no es posible con una pila.");
}