export default class Animal {
    protected nombre: string;
    protected edadEnMeses: number;

    constructor(nombre: string, edadEnMeses: number) {
        this.nombre = nombre;
        this.edadEnMeses = edadEnMeses;
    }

    cambioNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

    cambioEdad(nuevaEdad: number): void {
        this.edadEnMeses = nuevaEdad;
    }
}
