import Animal from "./Animal";

export default class Perro extends Animal {
    protected vacunado: boolean;
    protected readonly bello: boolean; //Esta propiedad no se puede modificar!

    constructor(
        nombre: string = 'firulais',
        edadEnMeses: number,
        vacunado: boolean,
        bello: boolean
    ) {
        super(nombre, edadEnMeses);
        this.vacunado = vacunado;
        this.bello = bello;
    }

    public vacunar(): void{
        this.vacunado = true;
    }
}
