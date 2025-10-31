let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

// Esperar a que el HTML cargue
window.addEventListener("load", iniciarJuego);

function iniciarJuego() {
  // Botón para seleccionar mascota
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  // Desactivar botones de ataque al inicio
  document.getElementById("boton-fuego").disabled = true;
  document.getElementById("boton-agua").disabled = true;
  document.getElementById("boton-tierra").disabled = true;

  // ✅ Mostrar y habilitar el botón de reinicio desde el inicio
  let botonReiniciar = document.getElementById("boton-reiniciar");
  botonReiniciar.style.display = "block";
  botonReiniciar.disabled = false;
  botonReiniciar.addEventListener("click", reiniciarJuego);

  // Mostrar vidas iniciales
  actualizarVidas();
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
    alert("⚠️ Debes seleccionar una mascota antes de continuar");
    return;
  }

  // 🔒 Desactivar selección de mascotas
  inputHipodoge.disabled = true;
  inputCapipepo.disabled = true;
  inputRatigueya.disabled = true;
  document.getElementById("boton-mascota").disabled = true;

  // Activar botones de ataque
  document.getElementById("boton-fuego").disabled = false;
  document.getElementById("boton-agua").disabled = false;
  document.getElementById("boton-tierra").disabled = false;

  // Asignar funciones a los ataques
  document.getElementById("boton-fuego").addEventListener("click", ataqueFuego);
  document.getElementById("boton-agua").addEventListener("click", ataqueAgua);
  document.getElementById("boton-tierra").addEventListener("click", ataqueTierra);

  // Seleccionar enemigo aleatoriamente
  seleccionarMascotaEnemigo();
}

// Seleccionar mascota enemiga aleatoria
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

// Funciones de ataque
function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueEnemigoAleatorio();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
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

// Función principal del combate
function combate() {
  let resultado = "";

  if (ataqueJugador === ataqueEnemigo) {
    resultado = "🤝 Empate en esta ronda";
  } else if (
    (ataqueJugador === "FUEGO" && ataqueEnemigo === "TIERRA") ||
    (ataqueJugador === "AGUA" && ataqueEnemigo === "FUEGO") ||
    (ataqueJugador === "TIERRA" && ataqueEnemigo === "AGUA")
  ) {
    resultado = "🏆 ¡Felicitaciones, ganaste la ronda!";
    vidasEnemigo--;
  } else {
    resultado = "💀 Lo siento, perdiste la ronda...";
    vidasJugador--;
  }

  actualizarVidas();
  crearMensaje(resultado);
  revisarVidas();
}

// Actualizar vidas en pantalla
function actualizarVidas() {
  document.getElementById("id-mascota-jugador").innerHTML = "Vidas: " + vidasJugador;
  document.getElementById("id-mascota-enemigo").innerHTML = "Vidas: " + vidasEnemigo;
}

// Mostrar mensajes de la ronda
function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu mascota atacó con " +
    ataqueJugador +
    " — La del enemigo atacó con " +
    ataqueEnemigo +
    "<br><strong>" +
    resultado +
    "</strong>";
  sectionMensajes.appendChild(parrafo);
}

// Revisar si alguien perdió todas las vidas
function revisarVidas() {
  if (vidasEnemigo === 0) {
    crearMensajeFinal("🎉 ¡Felicitaciones, ganaste el combate completo! 🎉");
    alert("🏆 ¡Ganaste el combate completo! 🏆");
  } else if (vidasJugador === 0) {
    crearMensajeFinal("💀 Has perdido el combate completo... 😢");
    alert("💀 Has perdido el combate completo... 😢");
  }
}

// Mostrar mensaje final y desactivar botones
function crearMensajeFinal(mensajeFinal) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = "<strong>" + mensajeFinal + "</strong>";
  sectionMensajes.appendChild(parrafo);

  // Desactivar ataques
  document.getElementById("boton-fuego").disabled = true;
  document.getElementById("boton-agua").disabled = true;
  document.getElementById("boton-tierra").disabled = true;
}

// ✅ Reiniciar juego (se puede usar en cualquier momento)
function reiniciarJuego() {
  location.reload();
}

// Número aleatorio
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
