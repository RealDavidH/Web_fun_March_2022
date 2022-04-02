let bodyDiv = document.querySelector("body");
let gameOverAudio = new Audio("assets/gameover.mp3");
let clickSound = new Audio("assets/clicksound.mp3");
clickSound.volume = 0.3;
gameOverAudio.volume = 0.5;
var theMap = [
    //  j1 j2 j3 j4 j5 j6 j7 j8 j9 j10
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //i 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //i 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //i 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //i 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //i 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //i 5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //i 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //i 7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //i 8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]; //i 9

var dojoDiv = document.querySelector("#the-dojo");
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 9);
    console.log;
    theMap[Math.floor(Math.random() * 9)].fill(1, randomNum, randomNum + 1);
}

// Creates the rows of buttons for this game
function render(theMap) {
    var result = "";
    for (var i = 0; i < theMap.length; i++) {
        for (var j = 0; j < theMap[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}

console.log(theMap);
// var theMap = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0], //i 0       og dojo
//                 [3, 1, 0, 7, 0, 0, 6, 0, 8, 8], //i 1
//                 [5, 0, 7, 0, 3, 6, 6, 6, 0, 0], //i 2
//                 [2, 3, 0, 9, 0, 0, 6, 0, 8, 0], //i 3
//                 [6, 0, 3, 3, 0, 2, 0, 3, 0, 4], //i 4
//                 [0, 0, 3, 3, 0, 0, 2, 2, 3, 0], //i 5
//                 [0, 0, 0, 0, 5, 0, 1, 2, 0, 6], //i 6
//                 [2, 2, 2, 2, 0, 7, 1, 1, 1, 0], //i 7
//                 [5, 2, 0, 2, 0, 0, 0, 1, 1, 2], //i 8
//                 [9, 2, 2, 2, 0, 7, 0, 1, 1, 1]]; //i 9

// Creates the rows of buttons for this game

// TODO - Make this function tell us how many ninjas are hiding
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theMap.
function reloadGame() {
    location.reload();
}

function gameover() {
    gameOverAudio.play();
    bodyDiv.innerHTML = `<div class="gameover">
                        <p class="txt-40">GAME OVER!</p>
                        <button type="button" onclick="location.reload()">Reset</button>
                        </div>`;
    bodyDiv.classList.add("middle", "background_red");
}

function wait(){

}

function clickedButton(){
  clickSound.play();
  setTimeout(wait(), 500);
}

function howMany(i, j, element) {
    clickedButton()
    
    /*
      [a,b,c]
      [d,e,f]
      [g,h,k]

      [(i-1,j-1), (i-1, j), (i-1, j+1)]
      [(1,j-1),   (i, j),     (i, j+1)]
      [(i+1,j-1), (i+1, j+1), (i+1, j+1)]

  */
    let clicked = theMap[i][j];
    let subArr = [
        { r: i - 1, c: j - 1 },
        { r: i - 1, c: j },
        { r: i - 1, c: j + 1 },
        { r: i, c: j - 1 },
        { r: i, c: j + 1 },
        { r: i + 1, c: j - 1 },
        { r: i + 1, c: j },
        { r: i + 1, c: j + 1 },
    ];

    let newTot = 0;
    for (let x = 0; x < subArr.length; x++) {
        if (clicked === 1) {
            console.log(clicked, "clicked", "GAME OVER");
            gameover();
        }
        if (
            subArr[x]["r"] < 0 ||
            subArr[x]["c"] < 0 ||
            subArr[x]["r"] > 9 ||
            subArr[x]["c"] > 9
        ) {
            //console.log("invalid -->", subArr[x]);
        } else {
            //console.log("Valid --> ", subArr[x]);
            newTot += theMap[subArr[x]["r"]][subArr[x]["c"]];
        }
    }
    element.innerHTML = newTot;
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theMap with at most 1 on each spot
// 3. if you click on a ninja you must restart the game
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theMap);
// adds the rows of buttons into <div id="the-dojo"></div>
dojoDiv.innerHTML = render(theMap);
