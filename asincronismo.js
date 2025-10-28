/*fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
*/



  // ✅ Función básica para obtener personajes de Rick and Morty
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

// Función para enviar peticiones HTTP genéricas
async function sendHTTPRequest(method, url, data) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData;
}

// Función para obtener y mostrar los posts
async function fetchPosts() {
  try {
    const responseData = await sendHTTPRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(responseData);

    // Limpia la lista antes de volver a renderizar
    listElement.innerHTML = "";

    for (const post of responseData) {
      const postContainer = document.createElement("article");
      postContainer.id = post.id;
      postContainer.classList.add("post-item");

      // Mostrar el ID del post
      const idElement = document.createElement("span");
      idElement.textContent = `ID: ${post.id}`;
      idElement.classList.add("post-id");

      const title = document.createElement("h2");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      const button = document.createElement("button");
      button.textContent = "DELETE Content";

      // Agregar elementos al contenedor
      postContainer.append(idElement, title, body, button);
      listElement.append(postContainer);
    }
  } catch (error) {
    console.error("Error al obtener los posts:", error);
  }
}

// Función para crear un nuevo post
async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  try {
    const createdPost = await sendHTTPRequest(
      "POST",
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    console.log("Post creado:", createdPost);
  } catch (error) {
    console.error("Error al crear el post:", error);
  }
}

// Evento para crear post
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.currentTarget.querySelector("#title").value;
  const content = event.currentTarget.querySelector("#content").value;

  createPost(title, content);
});

// Evento para obtener posts
fetchButton.addEventListener("click", fetchPosts);

// Evento para detectar clic en botón DELETE
postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("article").id;
    console.log("ID del post seleccionado:", postId);
    sendHTTPRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
  event.target.closest("article").remove();
   
});
