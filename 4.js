const ejecutarFuncion = (funcion) => {
    const valor = funcion(2, 4);
}

let imprimirSuma = (a, b) => {
    return "el valor de la suma es: " + (a+b);
};

ejecutarFuncion(imprimirSuma)

//2.
const cambiarNombre = (nombre, nuevoNombre) => {
    if(typeof nuevoNombre !== "undefined") {
        nombre = nuevoNombre;
    }

    nombre = 'pepito perez';

    return nombre;
}

