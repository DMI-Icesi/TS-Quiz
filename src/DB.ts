// IGNORAR ARCHIVO
export default class DB {
    static propiedades = ["edad", "cantidadDePerros", "cantidadDeCarros", "cantidadDeCasas", "cantidadDeOjos"];
    static obtenerRegistro() {
        return Object.fromEntries(this.subset().map((key) => {
            return [key, Math.random() * 10];
        }))
    }

    static subset() {
        const array = this.propiedades;
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array.slice(0, 2);
    }

}
