let ataqueJugador;
let ataqueEnemigo;

// Esperar a que el HTML cargue
window.addEventListener("load", iniciarJuego);

function iniciarJuego() {
  // Botón para seleccionar mascota
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  // Botones de ataque
  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);

  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);

  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

// Seleccionar mascota del jugador
function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("Selecciona una mascota");
    return;
  }

  seleccionarMascotaEnemigo();
}

// Seleccionar mascota del enemigo aleatoriamente
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (mascotaAleatoria === 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatoria === 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

// Funciones de ataque del jugador
function ataqueFuego() {
  ataqueJugador = "FUEGO";
  alert()
  ataqueEnemigoAleatorio();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  alert()
  ataqueEnemigoAleatorio();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  
  ataqueEnemigoAleatorio();
}

// Ataque aleatorio del enemigo
function ataqueEnemigoAleatorio() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio === 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio === 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

// Función para determinar el resultado del combate
function combate() {
  let resultado = "";

  if (ataqueJugador === ataqueEnemigo) {
    resultado = "EMPATE 🤝";
  } else if (
    (ataqueJugador === "FUEGO" && ataqueEnemigo === "TIERRA") ||
    (ataqueJugador === "AGUA" && ataqueEnemigo === "FUEGO") ||
    (ataqueJugador === "TIERRA" && ataqueEnemigo === "AGUA")
  ) {
    resultado = "GANASTE 🎉";
  } else {
    resultado = "PERDISTE 😢";
  }

  crearMensaje();
}

// Mostrar mensajes en la pantalla
function crearMensaje() {
  let parrafo = document.createElement("p");
  parrafo.innerHTML = "tu mascota atacó con " + ataqueJugador + " la mascota del enemigo ataco con " + ataqueEnemigo;
  let sectionMensajes = document.getElementById("mensajes");
  sectionMensajes.appendChild(parrafo);
}

// Generador de números aleatorios
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
