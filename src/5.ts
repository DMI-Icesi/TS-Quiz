import DB from "./DB";

// 1.
// 60% si crea el tipo
// 10% si marca nombre como opcional
// 10% si marca bello como readonly
// 10% si usa el typo Perro como anotacion en mostrarPerro
// 10% si borra la asignacion de "bello" en cambiarPerro.

type Perro = {
    nombre?: string,
    edad: number,
    vacunado: boolean,
    readonly bello: boolean
}

const perro: Perro = {
    nombre: "Prisma",
    edad: 6,
    vacunado: true,
    bello: true
}

const mostrarPerro = (perro: Perro) => {
    if(perro.nombre !== undefined) {
        console.log(perro.nombre)
    } else {
        console.log('perrito necesita hogar');
    }
    console.log(perro.edad);
    console.log(perro.vacunado);
}

const cambiarPerro = (perro: Perro, nuevoNombre: string) => {
    perro.nombre = nuevoNombre;
}

//2. 90% si agrega el tipo diccionario. 10% si lo crea como tipo aparte
type Diccionario = {[index: string] : number};
const persona: Diccionario = DB.obtenerRegistro();
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
