let btn_Yellow = document.querySelector(".btn_Yellow");
let btn_Normal = document.querySelector(".btn")
let btn_definition = document.querySelector(".btn_green")

function addEvent() {
    btn_Yellow.addEventListener("click", changeLike());
}

let like = 0;
function changeLike() {
    alert("You have liked this definition!");
    like++;
    btn_Yellow.value = "likes: " + like;
}

let btn_Yellow2 = document.querySelector(".btn_Yellow2");
function addEvent2() {
    btn_Yellow2.addEventListener("click", changeLike2());
}

let like2 = 0;
function changeLike2() {
    like2++;
    alert("You have liked this definition!");
    btn_Yellow2.value = "likes: " + like2;
}

function login(){
    if (btn_Normal.value == 'Login'){
        btn_Normal.value = 'Log out'
    }
    else
    btn_Normal.value = 'Login'
}

function definition(){
    btn_definition.style.display = "none";
}
