// Narrowing con undefined. 80% si agrega el typeof. 10% si agrega el tipo de retorno. 10% si retorna algun string al final
const convertirAMayusculas = (valor?: string): string => {
    if (typeof valor === 'string') {
        return valor.toUpperCase();
    }
    return '';
}

// Narrowing con dos tipos 80% si agrega el typeof. 10% si agrega el tipo de retorno. 10% si retorna el numero al final
type TipoEdad = number | string;
const imprimirEdad = (edad: TipoEdad): TipoEdad => {
    if (typeof edad === 'string') {
        return edad.toUpperCase();
    }
    return edad;
}

// 80% si utiliza operador instanceof para verificar si puede caminar. 20% si agrega el de volar
abstract class Vehiculo {}

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
    if (vehiculo instanceof Carro) {
        vehiculo.caminar();
    } else if(vehiculo instanceof Avion) {
        vehiculo.volar();
    }
}
