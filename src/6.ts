import Gato from "./6/Gato";
import Perro from "./6/Perro";
import Animal from "./6/Animal";

// 20% si agrega todos los tipos
// 20% si agrega los constructores
// 5% si cambia edadEnMeses a this.edadEnMeses
// 10% si agrega modificadores de acceso
// 10% si marca vidas como opcional
// 20% si mueve cada clase a un archivo
// 15% si marca el tipo de animales como Animal[]

const gato = new Gato('mono', 60);
const perro = new Perro('Prisma', 72, true, true);

const animales: Animal[] = [gato, perro];
