// clase 3
//--------------------

/**
forEach - sirve como un for pero mas simplificado.

const numeros = [1, 5, 10, 30,50];
let Replica = 0;

numeros.forEach((item) => {
  Replica+=item
    //Replica.push(item);    
});

console.log(Replica);
 */

 /**
Multiplica x2 cada valor

const numeros = [1, 5, 10, 30,50];
let Replica = 0;
const doble = numeros.map((valor) =>valor*2);

console.log(doble);
  */
const Estudiantes = [
  {nombre: 'Pedro', apellido: 'Perez'},
  {nombre: 'carlos', apellido: 'carmona'},
  {nombre: 'pedros', apellido: 'alvarez'}
 ];

 const nombreCompleto = Estudiantes.map((Students) => {
  return `${Students.nombre} ${Students.apellido}`;
});


console.log(nombreCompleto);

/**
 * Filter
 */
const numeros = [1, 5, 10, 30,50];

const numerosFiltrados = numeros.filter((Numero) => Numero<30);

console.log(numerosFiltrados);

const nuevoNombre = Estudiantes.filter((nombres) => nombres.apellido==='alvarez');
console.log(nuevoNombre);

const Frutas = ['Banano', 'Papaya', 'Mango', 'Fresa'];
const cumple = Frutas.every((word) => word.length >4)

console.log(cumple);

const objetoFruta = [
  {nombre: 'Banano', buena:true},
  {nombre: 'Papaya', buena:false},
  {nombre: 'mango', buena:true},
  {nombre: 'Fresa', buena:true}
];
const cumplir = objetoFruta.every((word) => word.buena);
console.log(cumplir);

/**
 * objeto
 */
const auto = {
  color: 'azul',
  cantidadpuertas:'5',
  year:1982,
  Marca:'Mazda',
  revisiones:{
        fechaingreso:'10-enero-2023',
       revision: 'Motor revisado'
  },
  Tieneseguro:true,
  registradoTransito:true
};

let autos = [];
autos.push(autos);

console.log(auto);

/**
 * Construir un array con minimo 2 objetos
 * cada objeto debe tener adentro otro objeto
 * van a usar minimo 3 metodos de arreglos sobre el array
 * forEach - map - filter - every
 */

 const Celulares = [
   {nombre: 'Motorola', 
   precio:500000, 
   inventario:'30', 
   tienda:'Exito', 
   especificaciones:{
     procesador:'Heliog97',
     bateria:'5000mA'
    }
   },
   {nombre: 'Samsung', 
   precio:900000, 
   inventario:'14', 
   tienda:'Exito', 
   especificaciones:{
     procesador:'SnapDragon',
     bateria:'4600mA'
    }}
 ];
