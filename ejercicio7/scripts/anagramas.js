let Palabra1 = prompt("Escriba la palabra 1: ")
let Palabra2 = prompt("Escriba la palabra 2: ")

function anagramas(Palabra1,Palabra2){
    let pala1 = (`${Palabra1}`).toLowerCase;
    let pala2 = (`${Palabra2}`).toLowerCase;
    if(pala1.length !== pala2.length) return false;
   // return pala1.split(").sort().join(") === pala2.split(").sort().join(");
}
console.log(anagramas(Palabra1,Palabra2))