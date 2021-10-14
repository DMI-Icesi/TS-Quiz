const convertirAMayusculas = (valor?: string) => {
    return valor.toUpperCase();
}

const imprimirEdad = (edad: number|string) => {
    return edad.toUpperCase();
}

abstract class Vehiculo {

}

class Carro extends Vehiculo {
    caminar() {
        console.log('yo camino');
    }
}

class Avion extends Vehiculo {
    volar() {
        console.log('yo vuelo');
    }
}

const mover = (vehiculo: Vehiculo) => {
    vehiculo.caminar();
}


