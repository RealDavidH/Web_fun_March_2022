function closeCookie() {
    let main = document.querySelector(".main_cont");
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
function weatherReport() {
    alert("Loading weather report....");
}
let temperatures = [
    document.querySelector(".tempH_today"),
    document.querySelector(".tempC_today"),
    document.querySelector(".tempH_tomorrow"),
    document.querySelector(".tempC_tomorrow"),
    document.querySelector(".tempH_Friday"),
    document.querySelector(".tempC_Friday"),
    document.querySelector(".tempH_Saturday"),
    document.querySelector(".tempC_Saturday"),
];

let isFahren = true;
function isFahrenheit() {
    if (isFahren) {
        tempChange();
        isFahren = false;
    } else {
        tempChange();
        isFahren = true;
    }
}

function tempChange() {
    for (let j = 0; j < temperatures.length; j++) {
        let Letter = "";
        for (let i = 0; i < temperatures[j].innerHTML.length-1; i++) {
            Letter += temperatures[j].innerHTML.charAt(i);
        }
        if (isFahren) {
            temperatures[j].innerHTML = fahrenTOcel(Letter) + "°";
        } else {
            temperatures[j].innerHTML = celTOfahren(Letter) + "°";
        }
    }
}

function fahrenTOcel(temp) {
    temp -= 32;
    temp = Math.round(temp * 5/9) ;
    return temp;
}
function celTOfahren(temp) {
    temp = parseInt(temp);
    temp = Math.round(temp * 9/5);
    temp += 32;
    return temp;
}
