let palabra1 = prompt("Escriba la palabra 1: ")
let palabra2 = prompt("Escriba la palabra 2: ")

function anagramas(palabra1,palabra2){
    let pala1 = (`${palabra1}`).toLowerCase;
    let pala2 = (`${palabra2}`).toLowerCase;
    if(pala1.length !== pala2.length) return false;
   // return pala1.split(").sort().join(") === pala2.split(").sort().join(");
}
console.log(anagramas(palabra1,palabra2))