//Trabajo de clase:

//Clase padre
class Escuela {
    constructor(info){
        this.nombre = info.nombre;
        this.direccion = info.direccion;
        this.telefono = info.telefono;
        this.estudiantes = [];
        this.cursos = [];
    }

    inscribirEstudiante() {
        console.log("Los estudiantes de la escuela son: " + this.estudiantes);
    }

    Cursos() {
        console.log("Los cursos de la escuela son: " + this.cursos);
    }  
    datosEscuela(){
        console.log("La escuela tiene como rector a: " + informacion.detalles.director + ", y fue fundada en el año de: " + informacion.detalles.añoFundacion);
    }
}

//creo el objeto
const informacion = {
    nombre: "Colegio Nuestra Señora de Lourdes",
    direccion: "cr48 48 48",
    telefono: 125215521,
    detalles: {
        director: "Juan Pérez",
        añoFundacion: 1950
    }
}


const colegioLourdes = new Escuela(informacion);
colegioLourdes.estudiantes.push("Estudiante1", "Estudiante2", "Estudiante3");
colegioLourdes.cursos.push("Curso1","Curso2");

colegioLourdes.inscribirEstudiante();
colegioLourdes.Cursos();
colegioLourdes.datosEscuela();



//otra clase que hereda
class Profesor extends Escuela {
    constructor(objeto) {
        super(objeto); 
        this.nombres = objeto.nombres;
        this.edad = objeto.edad;
        this.departamento = objeto.departamento;
        this.materia = objeto.materia;
    }

    asignarDepartamento() {
        console.log("La profesora: " + this.nombres + " dará clases en el departamento de: " + this.departamento);
    }

    asignarMateria(){
        console.log("La profesora: " + this.nombres + " dará la materia de: " + this.materia + 
        ", ya que la especialidad de la profesora es: " + objeto.datosAdicionales.especialidad + ", y cuenta con: " + objeto.datosAdicionales.experiencia);
    }

}

const objeto = {
    nombres: "Maria",
    edad: 48,
    departamento: "Antioquia",
    materia: "Español",
    datosAdicionales: {
        especialidad: "Literatura",
        experiencia: "20 años de enseñanza",
    }
}

const profesor1 = new Profesor(objeto);


profesor1.asignarDepartamento();
profesor1.asignarMateria();







/*
****************** NOTAS DE CLASE  *********************************
// clase padre
class Animal{
    constructor(especie, color, sonido, habitat){
        this.especie = especie;
        this.color=color;
        this.sonido=sonido;
        this.habitat=habitat;
    }

    Moverse(tipoMovimiento){
        console.log(`El movimiento es:  ${tipoMovimiento} `);        
    }

    determinarEspecie(){
        return this.especie;

    }

    sonidoCaracteristico(){
        console.log(this.sonido);
        return this.sonido;
    }

    dondeVive(){
        return this.habitat;
    }

}


class Perro extends Animal{

    constructor(raza, color, sonido){
        super(raza, color, sonido, 'Casa');//inicializa el constructor padre
    }


    
    ladrar() {
        console.log(this.sonido)
        return this.sonido;               
    }

    sentarse(){
        console.log('Me he sentado');
    }

}

const Labrador = new Perro('Labrador', 'Cafe', 'Woof');
Labrador.sentarse();
console.log(Labrador.ladrar());

Labrador.sonidoCaracteristico();



class Musica {
    constructor(info){
        this.fechaLanzamiento = info.fechaLanzamiento;
        this.artista = info.artista;
        this.genero = info.genero;
        this.titulo = info.titulo;

    }
    reproducir(){
        console.log(`se esta reproduciendo ${this.titulo} del artista ${this,this.artista}`);
    }

    pausar(){
        return console.log(`se ha pausado la cancion ${this.titulo} del artista ${this.artista}`);
    }


}

//creo el objeto
const informacion = {
    fechaLanzamiento: 1998,
    artista: "Freddy Mercury",
    genero: "Rock",
    titulo: "Rapsody"
}
const Rock = new Musica(informacion);

Rock.reproducir();
Rock.pausar();

const Pop = new Musica({
    fechaLanzamiento: 1989,
    artista: "Madonna",
    genero: "Pop",
    titulo: "Like a virgin"
})

Pop.reproducir();





*/











  


