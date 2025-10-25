/*fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
*/



  // ✅ Función básica para obtener personajes de Rick and Morty
async function fetchData() { 
  try {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    console.log("Personajes:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

// ✅ Varias URLs a consultar
const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];

// ✅ Ciclo para hacer varios fetch de forma secuencial
async function fetchNewData() {
  try {
    for (let url of urls) {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Datos desde:", url, data);
    }
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

fetchNewData();

// ✅ CORRECCIÓN: faltaba una sola “f” (estaba “ffunction”)
function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: data ? JSON.stringify(data) : undefined, // solo enviar body si hay data
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

// ✅ Ejemplo de uso con JSONPlaceholder
async function fetchPosts() {  // también corregido el nombre (antes “fecthPosts”)
  try {
    const responseData = await sendHTTPRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("Posts:", responseData);
  } catch (error) {
    console.error("Error al obtener posts:", error);
  }
}

fetchPosts();
