const listElement = document.querySelector(".posts");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

// ✅ Función genérica para peticiones HTTP
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

  return await response.json();
}

// ✅ Obtener y mostrar posts
async function fetchPosts() {
  try {
    const responseData = await sendHTTPRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(responseData);

    // Limpia la lista antes de mostrar
    listElement.innerHTML = "";

    for (const post of responseData) {
      const postContainer = document.createElement("article");
      postContainer.id = post.id;
      postContainer.classList.add("post-item");

      const idElement = document.createElement("span");
      idElement.textContent = `ID: ${post.id}`;
      idElement.classList.add("post-id");

      const title = document.createElement("h2");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      const button = document.createElement("button");
      button.textContent = "🗑️ Eliminar";

      // Añadir elementos al contenedor del post
      postContainer.append(idElement, title, body, button);
      listElement.append(postContainer);
    }
  } catch (error) {
    console.error("Error al obtener los posts:", error);
  }
}

// ✅ Crear un nuevo post
async function createPost(title, content) {
  const post = {
    title: title,
    body: content,
    userId: Math.floor(Math.random() * 1000),
  };

  try {
    const createdPost = await sendHTTPRequest(
      "POST",
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    console.log("✅ Post creado:", createdPost);
    alert("Post creado exitosamente 🎉");
  } catch (error) {
    console.error("Error al crear el post:", error);
  }
}

// ✅ Evento: Crear post al enviar formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.currentTarget.querySelector("#title").value.trim();
  const content = event.currentTarget.querySelector("#content").value.trim();

  if (title && content) {
    createPost(title, content);
    form.reset();
  } else {
    alert("Por favor completa todos los campos");
  }
});

// ✅ Evento: Obtener posts al hacer clic
fetchButton.addEventListener("click", fetchPosts);

// ✅ Evento: Eliminar un post
postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postElement = event.target.closest("article");
    const postId = postElement.id;

    if (confirm(`¿Deseas eliminar el post con ID ${postId}?`)) {
      sendHTTPRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(() => {
          console.log(`🗑️ Post ${postId} eliminado`);
          postElement.remove();
        })
        .catch((error) => console.error("Error al eliminar el post:", error));
    }
  }
});
