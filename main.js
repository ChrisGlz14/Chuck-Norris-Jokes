// Recupero el botón de la broma 
const jokeButton = document.querySelector(".button-joke");

//Recupero el contenedor de la broma
const jokeCard = document.querySelector(".container-jokes");



// Función asincrónica para obtener una nueva broma
async function newJoke() {
    
    // URL de la API para obtener una broma aleatoria
    const API = "https://api.chucknorris.io/jokes/random"
    
    
    try {
    // Realizo una solicitud a la API utilizando fetch 
    const res = await fetch(API);
    
    // Convierto la respuesta de la solicitud en formato JSON
    const data = await res.json();
    
    // Accede a la propiedad 'value' en los datos obtenidos, que contiene la broma
    const joke = data.value;
    
    //Previamente pruebo que funcione con un console.log(joke)
    
    // Mostrar la broma llamando a la función showJoke
    showJoke(joke);

    } catch (error) {
        // Manejar cualquier error que pueda ocurrir durante la solicitud
    console.error("Error al obtener la broma:", error); 
    }
}


// Agrego un evento de clic al botón para llamar a la función newJoke
jokeButton.addEventListener("click", newJoke);

// Función para mostrar la broma en el contenedor
function showJoke(joke) {

    // Crear el contenido HTML con la broma
    let content = `
    <section class="container-jokes">
        <p class="joke">${joke}</p>
    </section>
    `

    // Establezco el contenido HTML en el contenedor de la broma
    jokeCard.innerHTML = content;
}

//Se llama a la función newJoke al cargar la página para mostrar una broma inicial
newJoke();
