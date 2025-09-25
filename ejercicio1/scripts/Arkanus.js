
let pedirSimbolo = prompt("Simbolos Arcanos: "); //Input de los simbolos

function Conversion(pedirSimbolo){               //Funcion para la conversion (pedirSimbolo = simbolos del input)
    const simbolos = {                 //constante de a que equivalen los simbolos
        "☽" : 1,
        "☾" : 5,
        "♁" : 10,
        "⚕" : 50,
        "⚡" : 100
    };
let valorTotal = 0;                    //valor en donde se va a almacenar la suma o resta de los simbolos cuando se cambien a numeros

for(i=0;i<pedirSimbolo.length;i++){           //ciclo for para que mire los simbolos e intercambie a numeros
    let izquierda= simbolos[pedirSimbolo[i]];
    let derecha= simbolos[pedirSimbolo[i+1]];
    if(derecha && izquierda < derecha){       //Si el numero es menor a izquierda se restan
        valorTotal -= izquierda;}
    else{valorTotal += izquierda}             //Lo contrario del if, si el numero es mayor a izquieda se suman
}
    return valorTotal;
};
alert(Conversion(pedirSimbolo))          //alerta donde esta el numero sumado y final