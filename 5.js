import DB from "./DB";

const perro = {
    nombre: "Prisma",
    edad: 6,
    vacunado: true,
    bello: true //La propiedad bello es inmutable
}

const mostrarPerro = (perro) => {
    if(typeof perro.nombre !== "undefined") {
        console.log(perro.nombre)
    } else {
        console.log('perrito necesita hogar');
    }
    console.log(perro.edad);
    console.log(perro.vacunado);
}

const cambiarPerro = (perro, nuevoNombre) => {
    perro.nombre = nuevoNombre;
    perro.bello = false;
}

const persona = DB.obtenerRegistro();
/* obtenerRegistro() retorna un objeto que no sabemos que propiedades tiene, pero sabemos que sus llaves son string y
 sus valores son numeros. Ejemplo:

    Registro 1:
    {
      "cantidadDePerros": 3,
      "cantidadDeCasas": 2,
    }

    Registro 2:
    {
      "cantidadDeCarros": 4
      "cantidadDeComputadores": 2
    }

    Registro 3: {
      "edad": 33
    }

*/























