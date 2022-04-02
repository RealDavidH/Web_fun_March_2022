let username = "";
let card = document.querySelector(".card");

function userNameGet(element) {
    username = element.value;
    console.log(username);
}

function makeDexCard(data) {
    let res = `<div class="card_contents">
        <img src="${data.avatar_url}" alt="${data.name}">
        <p class="mt-5">Name: ${data.name}</p>
        <p class="mt-5">Login: ${data.login}</p>
        <p class="mt-5">Location: ${data.location}</p>
                </div>`;
    card.innerHTML = res + card.innerHTML;
}

async function fetchUserData() {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let coderdata = await response.json();
    if (coderdata.message == "Not Found") {
        return alert("Enter a valid username!");
    } else {
        makeDexCard(coderdata);
        console.log(coderdata);
    }
}
