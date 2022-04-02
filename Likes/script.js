//!!!!!!COOKIE POP UP FUNCTION!!!!!!
//New popup code

function closeCookie() {
    let main = document.querySelector("#main");
    let checkbox = document.querySelector("#cookie_check_Box");
    let alert2 = document.querySelector("#hidden_alert");
    if (checkbox.checked == true) {
        document.getElementById("cookie-popup").style.display = "none";
        main.classList.remove("blur");
    } else {
        // alert("YOU MUST AGREE TO GIVE US YOUR SOUL!")
        alert2.style.display = "block";
    }
}

// When the user clicks on div, open the popup
// older code
// function open() {
//   document.getElementById("myForm").style.display = "block";
// }
// function close() {
//   document.getElementById("myForm").style.display = "none";
// }
//      If you want a text to display when you check the check mark. 
//     function checkBox() {
//         let checkBox = document.getElementById("cookie_check_Box");
//         let text = document.getElementById("text");
//         if (checkBox.checked == true) {
//             text.style.display = "block";
//         } else {
//             text.style.display = "none";
//         }
//     }
//!!!!!!COOKIE POP UP FUNCTION!!!!!!

//!!!!!! Button even lister, that when you click on button the number of likes goes up by 1.!!!!!!!!!!!!!!!!
let btn_Yellow = document.querySelector(".btn_Yellow");
function addEvent() {
    btn_Yellow.addEventListener("click", changeLike());
}

let like = 0;
function changeLike() {
    like++; // makes the buttons number value go up by one, every time this function is run
    // alert("You have liked this!"); //Alerts user that the have clicked the like button
    btn_Yellow.value = "likes: " + like;
}

let btn_Yellow2 = document.querySelector(".btn_Yellow2");
function addEvent2(){
    btn_Yellow2.addEventListener("click", changeLike2());
}

let like2 = 0;
    function changeLike2(){
        like2++;
            btn_Yellow2.value = "likes: "+like2;
}

let btn_Yellow3 = document.querySelector(".btn_Yellow3");
function addEvent3(){
    btn_Yellow3.addEventListener("click", changeLike3());
}

let like3 = 0;
    function changeLike3(){
        like3++;
            btn_Yellow3.value = "likes: "+like3;
}

//Dark mode button
//!!!REQUIRES BOOTSTRAP ICONS TO FUNCTION!!! 
let container = document.querySelector(".container")
let body = document.querySelector("body");
let moon = document.querySelector(".btn_moon");
let notDark = false; //keeps track of if night mode is on or not

function dark(){
    if (notDark){
        //Changes container and body to include class night.
        container.classList.add("night"); //doesn't work on container because it has a background color already
        body.classList.add("night");
        //removing the first moon icon
        moon.classList.remove("bi");
        moon.classList.remove("bi-moon");
        //adding a white background and adding new moon icon 
        moon.classList.add("white")
        moon.classList.add("bi-moon-fill");
        moon.classList.add("bi");
        notDark = false;

    } else{
        //removes class night from container and body.
        container.classList.remove("night"); //doesn't work on container because it has a background color already
        body.classList.remove("night");
        moon.classList.remove("bi");
        //removing second moon icon and removing class white to make it a black icon
        moon.classList.remove("bi-moon-fill");
        moon.classList.remove("white")
        //adding OG Icon back
        moon.classList.add("bi-moon");
        moon.classList.add("bi");
        notDark = true;
    }
} 

