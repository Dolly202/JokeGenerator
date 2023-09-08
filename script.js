// script.js
const jokeContainer = document.getElementById("joke-container");
const jokeText = document.getElementById("joke-text");
const getJokeButton = document.getElementById("get-joke-button");

const apiUrl = "https://v2.jokeapi.dev/joke/Any"; // Change this URL if you're using a different API

async function fetchJoke() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.joke) {
            jokeText.textContent = data.joke;
        } else if (data.setup && data.delivery) {
            jokeText.textContent = `${data.setup} ${data.delivery}`;
        } else {
            jokeText.textContent = "No joke available at the moment.";
        }
    } catch (error) {
        jokeText.textContent = "An error occurred while fetching the joke.";
    }
}

getJokeButton.addEventListener("click", fetchJoke);
