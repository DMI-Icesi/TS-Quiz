// 1. Tipos. Nota total: 33% por cada tipo agregado correctamente
const nombre: string = "julián";
const edad: number = 33;
const aburrido: boolean = false;

// 2. Tipos en array: 33% por cada tipo agregado correctamente
const nombres: string[] = ["Bruce", "Selena", "Oswald"];
const edades: number[] = [1, 2, 3, 4, 5, 6];
const cosas: any[] = [true, "hola", 3.24, {edad: 33}, ["zapatos"]]

// 3a. Parametros de funciones.
// 25% si agrega tipo a nombre.
// 25% si agrega void.
// 5% adicional si usa interpolacion de strings
const saludar = (nombre: string): void => {
    console.log(`hola ${nombre}`);
}

// 3b. Parametros de parametros.
// 25% si agrega tipo a parametros.
// 25% si agrega tipo de retorno
const sumar = (a: number, b: number): number => {
    return a + b;
}


// 4. Parametros de objeto y opcionales.
// 50% si agrega ancho y alto.
// 25% si crea un tipo aparte.
// 25% si usa el parametro opcional alto
type Figura = {
    ancho: number,
    alto?: number,
}
const calcularPerimetro = (figura: Figura) => {
    if(figura.alto) {
        return figura.ancho * 2 + figura.alto * 2;
    }
    return figura.ancho * 4;
}

// 5. Tipos de unión y alias de tipo.
// 75% si pone la union de tipo numero y string.
// 25% si lo saca en un tipo aparte
// 5% adicional si usa interpolacion de strings
type Valor = number | string;
const imprimir = (valor: Valor) => {
    if(typeof valor === 'number') {
        console.log(`imprimiendo ${valor * 2}`);
        return;
    }
    console.log(`imprimiendo ${valor.toUpperCase()}`);
}

imprimir('a');
imprimir(3);

