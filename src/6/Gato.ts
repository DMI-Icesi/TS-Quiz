import Animal from "./Animal";

export default class Gato extends Animal{
    protected vidas: number;

    constructor(
        nombre: string = 'michi',
        edadEnMeses: number,
        vidas?: number,
    ) {
        super(nombre, edadEnMeses);
        if(typeof vidas === 'undefined') {
            this.vidas = 7;
        } else {
            this.vidas = vidas;
        }
    }
}
