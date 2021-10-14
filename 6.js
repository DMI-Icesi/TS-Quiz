let edadEnMeses;

class Animal {
    nombre;
    edadEnMeses;

    cambioNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    cambioEdad(nuevaEdad) {
        edadEnMeses = nuevaEdad;
    }
}

class Perro extends Animal {
    vacunado;
    bello; //Esta propiedad no se puede modificar!

    vacunar() {
        this.vacunado = true;
    }
}

class Gato extends Animal {
    vidas;

    constructor(vidas) {
        super();
        if(typeof vidas !== "undefined") {
            this.vidas = 7;
        }
        this.vidas = vidas;
    }
}

const gato = new Gato('mono', 60);
const perro = new Perro('Prisma', 72, true, true);

const animales = [gato, perro];
