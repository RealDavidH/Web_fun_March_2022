//Reversing an array

let arr = ["a", "b", "c", "d", "e"];
let j = arr.length - 1;
console.log(arr, "OG Array");

function reversingArr() {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    return arr;
}
console.log(reversingArr());

//dice roller

function d6() {
    var roll = Math.floor(Math.random() * 6) + 1;

    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

//Consult the oracle

function consult() {
    let lifesAnswers = [
        "It is certain.", //1
        "It is decidedly so.", //2
        "Without a doubt.", //3
        "Yes – definitely.", //4
        "You may rely on it.", //5
        "As I see it, yes.", //6
        "Most likely.", //7
        "Outlook good.", //8
        "Yes.", //9
        "Signs point to yes.", //10
        "Reply hazy, try again.", //11
        "Ask again later.", //12
        "Better not tell you now.", //13
        "Cannot predict now.", //14
        "Concentrate and ask again.", //15
        "Don't count on it.", //16
        "My reply is no.", //17
        "My sources say no.", //18
        "Outlook not so good.", //19
        "Very doubtful.", //20
    ];
    return lifesAnswers[Math.floor(Math.random() * lifesAnswers.length-1) + 1]
}
console.log(consult());

//W2D2

//console.log the pokémon objects whose id is evenly divisible by 3
//console.log the pokémon objects that have more than one type
//console.log the names of the pokémon whose only type is "poison"
//console.log the first type of all the pokémon whose second type is "flying"
//Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
let reverse = [];
let pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

function pokemon_Algo(){
for(let i = 0; i < pokemon.length; i++){
    // if(pokemon[i].id % 3 === 0){
    //     console.log(pokemon[i].name, "is a pokemon an id divisible by 3")
    // }
    // if(pokemon[i].types.length > 1){
    //     console.log(pokemon[i].name, "is a pokemon with two types")
    // }
    if(pokemon[i].types == "poison"){
        reversingName(i);
    }
    // if(pokemon[i].types[1] == "flying"){
    //     console.log(pokemon[i].name, "secondary type of flying")
    // }
}
}
pokemon_Algo()

function reversingName(i) {
    let Letter = ""
        for(let j = pokemon[i].name.length; j >= 0;  j--){
        Letter += pokemon[i].name.charAt(j)
        }
        reverse.push(Letter);
        console.log(pokemon[i].name, "is a poison type pokemon")
}
console.log(reverse)