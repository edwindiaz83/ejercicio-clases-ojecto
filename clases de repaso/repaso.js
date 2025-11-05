let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

window.addEventListener('load', iniciarJuego);

function iniciarJuego() {
	let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
	seccionSeleccionarAtaque.style.display = 'none';

	let seccionReiniciar = document.getElementById('reiniciar');
	seccionReiniciar.style.display = 'none';

	let botonMascotaJugador = document.getElementById('boton-mascota');
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

	document.getElementById('boton-fuego').addEventListener('click', ataqueFuego);
	document.getElementById('boton-agua').addEventListener('click', ataqueAgua);
	document.getElementById('boton-tierra').addEventListener('click', ataqueTierra);

	document.getElementById('boton-reiniciar').addEventListener('click', reiniciarJuego);
}

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
		alert("Selecciona una mascota antes de continuar");
		return;
	}

	document.getElementById('seleccionar-mascota').style.display = 'none';
	document.getElementById('seleccionar-ataque').style.display = 'block';

	seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
	let ataqueAleatorio = aleatorio(1, 3);
	let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

	if (ataqueAleatorio == 1) {
		spanMascotaEnemigo.innerHTML = 'Hipodoge';
	} else if (ataqueAleatorio == 2) {
		spanMascotaEnemigo.innerHTML = 'Capipepo';
	} else {
		spanMascotaEnemigo.innerHTML = 'Ratigueya';
	}
}

function ataqueFuego() {
	ataqueJugador = 'FUEGO';
	ataqueAleatorioEnemigo();
}

function ataqueAgua() {
	ataqueJugador = 'AGUA';
	ataqueAleatorioEnemigo();
}

function ataqueTierra() {
	ataqueJugador = 'TIERRA';
	ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
	let ataqueAleatorio = aleatorio(1, 3);

	if (ataqueAleatorio == 1) {
		ataqueEnemigo = 'FUEGO';
	} else if (ataqueAleatorio == 2) {
		ataqueEnemigo = 'AGUA';
	} else {
		ataqueEnemigo = 'TIERRA';
	}

	combate();
}

function combate() {
	const vidasJugadorSpan = document.getElementById('vidas-jugador');
	const vidasEnemigoSpan = document.getElementById('vidas-enemigo');
	let resultado = "";

	if (ataqueJugador == ataqueEnemigo) {
		resultado = "EMPATE";
	} else if (
		(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') ||
		(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') ||
		(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')
	) {
		resultado = "GANASTE";
		vidasEnemigo--;
	} else {
		resultado = "PERDISTE";
		vidasJugador--;
	}

	vidasJugadorSpan.innerHTML = vidasJugador;
	vidasEnemigoSpan.innerHTML = vidasEnemigo;
	crearMensaje(resultado);

	if (vidasEnemigo == 0) {
		mensajeFinal("🎉 ¡FELICIDADES! Ganaste todas las batallas 🎉");
	}
	if (vidasJugador == 0) {
		mensajeFinal("😢 Lo siento... perdiste todas las batallas 😢");
	}
}

function crearMensaje(resultado) {
	let sectionMensajes = document.getElementById('mensajes');
	let parrafo = document.createElement('p');
	parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}, el enemigo con ${ataqueEnemigo} — <strong>${resultado}</strong>`;
	sectionMensajes.appendChild(parrafo);
}

function mensajeFinal(texto) {
	let sectionMensajes = document.getElementById('mensajes');
	let parrafo = document.createElement('p');
	parrafo.innerHTML = texto;
	sectionMensajes.appendChild(parrafo);

	document.getElementById('boton-fuego').disabled = true;
	document.getElementById('boton-agua').disabled = true;
	document.getElementById('boton-tierra').disabled = true;

	document.getElementById('reiniciar').style.display = 'block';
}

function reiniciarJuego() {
	location.reload();
}

function aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
  