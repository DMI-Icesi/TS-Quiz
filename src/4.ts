// 1. Parametros, y uso de void. 60% si agrego el tipo de la funcion.
// 20% si creo un tipo.
// 10% si lo uso en ambos lados
// 10% si ejecutarFuncion tiene tipo de retorno void
// 5% adicional si usa interpolacion de strings
type dosEnterosAString = (a: number, b: number) => string

const ejecutarFuncion = (funcion: dosEnterosAString): void => {
    const valor: string = funcion(2, 4);
}

let imprimirSuma: dosEnterosAString = (a, b): string => {
    return `el valor de la suma es: ${(a + b)}`;
};

ejecutarFuncion(imprimirSuma)

//2. 90% si marca nuevoNombre como parametro opcional nuevoNombre?
// 10% si agrega el else
const cambiarNombre = (nombre: string, nuevoNombre?: string): string => {
    if(nuevoNombre !== undefined) {
        nombre = nuevoNombre;
    } else {
        nombre = 'pepito perez';
    }

    return nombre;
}

