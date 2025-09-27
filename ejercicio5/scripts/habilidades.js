function candidatosCompatibles(oferta, candidatos) {              //
  const Ofertas = oferta.map(s => s.trim().toLowerCase());
  const minimo = Math.floor(Ofertas.length * 0.7);

  const compatibles = [];

  for (const candidato of candidatos) {
    const Habilidades = candidato.skills.map(s => s.trim().toLowerCase());
    let coincidencias = 0;

    for (const skill of Ofertas) {
      if (Habilidades.includes(skill)) {
        coincidencias++;
      }
    }

    if (coincidencias >= minimo) {
      compatibles.push(candidato.id);
    }
  }

  return [...new Set(compatibles)].sort(); // sin duplicados y ordenado
}

// Pedir datos con prompt
let ofertaInput = prompt("Ingrese las habilidades de la oferta separadas por ',' (ej: JavaScript,React,Node,CSS,Git):");
let candidatosInput = prompt(
  "Ingrese candidatos de esta manera: id:skill1;skill2; separados por '/' \nEjemplo:\njuan:JavaScript;React;Node;Git|"
);


let oferta = ofertaInput.split(",").map(s => s.trim());

let candidatos = candidatosInput.split("/").map(item => {
  let [id, skillsStr] = item.split(":");
  let skills = skillsStr ? skillsStr.split(";").map(s => s.trim()) : [];
  return { id: id.trim(), skills };
});

// Ejecutar la función
let resultado = candidatosCompatibles(oferta, candidatos);


if (resultado.length === 0) {
  alert("Ningún candidato cumple el 70% de las habilidades.");     // Mostrar resultados despues de condicionales
} else {
  alert("Candidatos compatibles:\n" + resultado.join("\n"));
}