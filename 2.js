const nombre = "julián";
const edad = 33;
const aburrido = false;

const nombres = ["Bruce", "Selena", "Oswald"];
const edades  = [1, 2, 3, 4, 5, 6];
const cosas = [true, "hola", 3.24, {edad: 33}, ["zapatos"]]

const saludar = (nombre) => {
    console.log('hola ' + nombre);
}

const sumar = (a, b) => {
    return a + b;
}

const calcularPerimetro = (figura) => {
    if(figura.alto) {
        return figura.ancho * 2 + figura.alto * 2;
    }
    return figura.ancho * 4;
}

const imprimir = (valor) => {
    if(typeof valor === 'number') {
        console.log('imprimiendo ' + valor * 2);
        return;
    }
    console.log('imprimiendo ' + valor.toUpperCase());
}

imprimir('a');
imprimir(3);

