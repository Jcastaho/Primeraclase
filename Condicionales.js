let Nombre = 'Juan David';
let Apellido = 'Castaño';
const Edad = 23;
let Estatura = 1.75;
let Entrada = true;
//Solo if
if (Entrada){
    console.log("La entrada esta permitida, bienvenido");
}

//if - else normal
if (Edad => 23) {
    console.log(Nombre + ' Tiene mas de: ' + Edad + " Años");
  } else {
    console.log(Nombre + ' Tiene menos de: ' + Edad + " Años");
  }

  //else if
 
  if (Estatura > 1.80) {
    console.log(`${Nombre} ${Apellido} mide mas de 1.80 de estatura`);
  } else if (Estatura = 1.75) {
    console.log(`${Nombre} ${Apellido} mide exactamente 1.75 de estatura`);
  } else  {
    console.log(`${Nombre} ${Apellido} mide menos de 1.75 de estatura`);
  }

// switch
switch (Edad) {
    case 18:
        console.log("Tiene 18 años");
        break;
    case 20:
        console.log("Tiene 20 años");
        break;
    case 23:
        console.log("Tiene 23 años");
        break;
    default:
        console.log("Tu edad no coincide con ninguno de los casos anteriores");
}

//for

for (let Año = 2023; Año < 2028; Año++) {
    console.log("Año actual: " + Año + " Año siguiente:" + (Año+1))
}

//forEach  
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log(numero * 2); 
});

//ternario
let precioFinal = 5000;
let dia = "viernes";

dia === "viernes" ? precioFinal -= 1000 : precioFinal += 1000;

console.log(precioFinal)