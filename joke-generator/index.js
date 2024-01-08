//**config.js file **/
// const config = {
//     apiKey : "your api key"
// }

// export default config;


import config from './config.js';
const  btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const jokeUrl = 'https://api.api-ninjas.com/v1/jokes?limit=1';

const options = {
    method : "GET",
    headers: { 'X-Api-Key': config.apiKey},
    contentType: "application/json",
}

async function getJoke () {
    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(jokeUrl, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me an another joke."

        jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "An error happened, Unable to find joke. Please try again later.";
        btnEl.innerText = "Tell me a joke."
    }
}

btnEl.addEventListener("click", getJoke);