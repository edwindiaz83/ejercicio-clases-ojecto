/**
 * 1. Definición de la Clase 'Coche'
 * Una clase es una plantilla para crear objetos.
 */
class Coche {
    // El 'constructor' se ejecuta al crear una nueva instancia (un nuevo objeto).
    constructor(marca, modelo, año) {
        // 'this' se refiere a la instancia actual del objeto.
        this.marca = marca; // Propiedad o atributo
        this.modelo = modelo; // Propiedad o atributo
        this.año = año; // Propiedad o atributo
        this.encendido = false;
    }

    // Método (función asociada al objeto) para encender el coche.
    encender() {
        this.encendido = true;
        console.log(`¡El ${this.marca} ${this.modelo} está encendido!`);
    }

    // Método para obtener la descripción del coche.
    obtenerDescripcion() {
        return `Este es un ${this.marca} ${this.modelo} del año ${this.año}.`;
    }
}

// -----------------------------------------------------------------------

/**
 * 2. Creación e Interacción con Objetos
 * Se crean instancias de la clase 'Coche'.
 */

// Crear un nuevo objeto (instancia) llamado 'miCoche'
const miCoche = new Coche('Toyota', 'Corolla', 2023);

// Crear otro objeto llamado 'cocheDeportivo'
const cocheDeportivo = new Coche('Ferrari', 'F8 Tributo', 2024);

// -----------------------------------------------------------------------

/**
 * 3. Utilización de los Objetos
 */

console.log("--- Información de Objetos Creados ---");

// Acceder a una propiedad (atributo)
console.log(`Marca de mi coche: ${miCoche.marca}`); // Salida: Marca de mi coche: Toyota
console.log(`Modelo deportivo: ${cocheDeportivo.modelo}`); // Salida: Modelo deportivo: F8 Tributo

// Llamar a los métodos
console.log(miCoche.obtenerDescripcion()); // Salida: Este es un Toyota Corolla del año 2023.

miCoche.encender(); // Salida: ¡El Toyota Corolla está encendido!
console.log(`Estado de encendido (miCoche): ${miCoche.encendido}`); // Salida: Estado de encendido (miCoche): true

console.log("--------------------------------------");