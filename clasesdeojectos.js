/**
 * 1. Definición de la Clase 'Coche'
 * Una clase es una plantilla para crear objetos.
 */
/*class Coche {
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
/*const miCoche = new Coche('Toyota', 'Corolla', 2023);

// Crear otro objeto llamado 'cocheDeportivo'
const cocheDeportivo = new Coche('Ferrari', 'F8 Tributo', 2024);

// -----------------------------------------------------------------------

/**
 * 3. Utilización de los Objetos
 */

/*console.log("--- Información de Objetos Creados ---");

// Acceder a una propiedad (atributo)
console.log(`Marca de mi coche: ${miCoche.marca}`); // Salida: Marca de mi coche: Toyota
console.log(`Modelo deportivo: ${cocheDeportivo.modelo}`); // Salida: Modelo deportivo: F8 Tributo

// Llamar a los métodos
console.log(miCoche.obtenerDescripcion()); // Salida: Este es un Toyota Corolla del año 2023.

miCoche.encender(); // Salida: ¡El Toyota Corolla está encendido!
console.log(`Estado de encendido (miCoche): ${miCoche.encendido}`); // Salida: Estado de encendido (miCoche): true

console.log("--------------------------------------");*/

/*class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido() {
    console.log("El animal emite un sonido");
  }
}

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }
  emitirSonido() {
    console.log("El perro ladra");
  }
  correr() {
    console.log(`${this.nombre} corre alegremente`);
  }
}

const perro1 = new Perro("Bobby", "Perro", "Pug");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

perro1.nuevoMetodo = function () {
  console.log("Este es un metodo");
};

Perro.prototype.segundoMetodo = function () {
  console.log("Es otro nuevo metodo");
};

Animal.prototype.tercerMetodo = function () {
  }

  class Persona {
    // Definición de propiedades al construir la instancia
    constructor(nombre, edad) { 
      this.nombre = nombre;
      this.edad = edad;
    }

    // Método de la clase (función o comportamiento)
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }

}

// Creación de una nueva instancia de la clase Persona
const persona1 = new Persona("Alice", 25);

// --- Ejecución del Proceso ---

console.log("--- Propiedades del Objeto ---");
console.log(persona1); // Output: Persona { nombre: 'Alice', edad: 25 }

console.log("\n--- Ejecución del Método ---");
persona1.saludar(); // Output: Hola, mi nombre es Alice y tengo 25 años.


/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

**/

/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.
*/

// --- Base de Datos ---
const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encanta Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "mariana", // Corregido: Usar minúsculas para coincidir con el login
    timeline: "A mí me gusta más el café que el té",
  },
  {
    username: "andres", // Corregido: Usar minúsculas para coincidir con el login
    timeline: "Yo hoy no quiero trabajar",
  },
];

// --- Entrada de Usuario ---

// Se corrigen los caracteres especiales en los prompts
const username = prompt("¿Cuál es tu usuario?");
const password = prompt("¿Cuál es tu contraseña?");

// --- Lógica de Validación ---

/**
 * Busca un usuario en la base de datos por nombre y contraseña.
 * @param {string} username - Nombre de usuario ingresado.
 * @param {string} password - Contraseña ingresada.
 * @returns {object|null} El objeto de usuario si existe, o null si no existe.
 */
function validarUsuario(username, password) {
    // Usamos .find() para simplificar y retornar el objeto completo si coincide.
    // Esto es más limpio y eficiente que usar un bucle for + return true.
    const user = usersDatabase.find(
        user => user.username === username && user.password === password
    );
    return user || null;
}

/**
 * Busca el timeline específico de un usuario.
 * @param {string} username - Nombre de usuario.
 * @returns {object|null} El objeto del timeline del usuario, o null si no se encuentra.
 */
function buscarTimeline(username) {
    // Usamos .find() para obtener el timeline del usuario específico.
    return usersTimeline.find(
        timelineEntry => timelineEntry.username.toLowerCase() === username.toLowerCase()
    );
}

// --- Algoritmo Principal de Inicio de Sesión ---

function signIn(username, password) {
    const usuarioAutenticado = validarUsuario(username, password);
    
    if (usuarioAutenticado) {
        // Requerimiento 3: Mostrar mensaje de bienvenida y el timeline del usuario.
        alert(`¡Bienvenido a tu cuenta ${username}!`);
        
        const timelineUsuario = buscarTimeline(username);
        
        if (timelineUsuario) {
            console.log("--- TU TIMELINE ---");
            console.log(`Usuario: ${timelineUsuario.username}`);
            console.log(`Post: ${timelineUsuario.timeline}`);
            console.log("-------------------");
        } else {
            console.log("¡Bienvenido! Aún no tienes publicaciones en el timeline.");
        }
        
    } else {
        // Requerimiento 4: Mostrar mensaje de error.
        alert("❌ ¡Ups! Usuario o contraseña incorrectos.");
        // No se muestra ningún timeline.
    }
}

// --- Ejecución del Proceso ---
signIn(username, password);