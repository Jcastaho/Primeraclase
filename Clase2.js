//Trabajo en clase  

//Arreglo
const Usuario = [{name: 'Carlos', ID:11111, edad:40, horaEntrada:8}];
console.log(Usuario)

//Funcion 1
const agregarUsuario = () => Usuario.push({name:'Juan', ID:2222, edad:31, horaEntrada:10})


//Funcion 2
const ModificarHorario = (name, ID) => {
  let nuevaHora=0;
  if(name==='Juan' && ID===2222){
    nuevaHora=9;
  }
  else{
    nuevaHora=8;
  }
  return Usuario.push({name:'Juan', ID:2222, edad:31, horaEntrada:nuevaHora});
}

ModificarHorario('Juan', 2222);
console.log('Se modifica horario de: Juan')
console.log(Usuario[1])

//Funcion SumarEdades
const SumarEdades = (Edad1, Edad2) => Edad1+Edad2

//Funcion MultiplicarEdades
const MultiplicarEdades = (Edad1, Edad2) => Edad1*Edad2

//Funcion 3
const sumaEdades = (Edad1, Edad2, operacion) =>{
  return operacion(Edad1, Edad2);
}
console.log("Suma de edades de los usuarios: " + sumaEdades(Usuario[0].edad, Usuario[1].edad, SumarEdades))
console.log('Multiplicacion de las edades de los usuarios: ' +sumaEdades(Usuario[0].edad, Usuario[1].edad, MultiplicarEdades))

