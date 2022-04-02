let jokeDiv = document.querySelector(".joke_container");
let firstDiv = document.querySelector(".container");
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
        'X-RapidAPI-Key': '9ee8e61b49msh8421405bf627120p1adea9jsn6788a28ace8f'
    }
};


async function getJoke(){
    fetch('https://dad-jokes.p.rapidapi.com/random/joke/png', options)
        .then(response => response.json())
        .then(response => loadJoke(response))
        .catch(err => console.error(err));
        
}

function loadJoke(data){
    console.log(data.body.setup)
    firstDiv.classList.add("hidden")
    jokeDiv.classList.remove("hidden")
    jokeDiv.classList.add("flex")
    jokeDiv.innerHTML = `<div class="joke_contents txt-20">
    <p>${data.body.setup}</p>
    <p class="mt-10">${data.body.punchline}</p>
    </div>`
}