
// function pizzaOven(crust, sauce, cheese, toppings){
//     let pizza = [];
//     pizza.crust = crust;
//     pizza.sauce = sauce;
//     pizza.cheese = cheese;
//     pizza.toppings = toppings;
// return pizza;
// }
// let order = pizzaOven("deep dish", "traditional", ["mozzarella"] , ["pepperoni", "sausage"]);
// let order2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// let order3 = pizzaOven("bread;")
// let order4 = pizzaOven("cheese", "cheese", ["cheese", "cheese"], ["cheese", "cheese", "more cheese"]);
// console.log('order 1', order,'order 2', order2,  'order 3', order3,  'order 4', order4 );

function randomPizza() {
    let pizza = [];
    pizza.crust = randomCrust();
    pizza.sauce = randomSauce();
    pizza.cheese = randomCheese();
    pizza.toppings = randomToppings();
    return pizza;
}

function randomCrust() {
    let temp = Math.floor(Math.random() * 4) + 1;
    if (temp === 1) {
        temp = "Deep-dish";
        return temp;
    } else if (temp === 2) {
        temp = "Stuffed";
        return temp;
    } else if (temp === 3) {
        temp = "Pan";
        return temp;
    } else if (temp === 4) {
        temp = "Regular";
        return temp;
    }
}

function randomSauce() {
    let temp = Math.floor(Math.random() * 4) + 1;
    if (temp === 1) {
        temp = "Traditional";
        return temp;
    } else if (temp === 2) {
        temp = "Cheese";
        return temp;
    } else if (temp === 3) {
        temp = "Pesto";
        return temp;
    } else if (temp === 4) {
        temp = "Garlic Ranch Sauce";
        return temp;
    }
}

function randomCheese() {
    let temp = Math.floor(Math.random() * 4) + 1;
    if (temp === 1) {
        temp = "Gouda";
        return temp;
    } else if (temp === 2) {
        temp = "Chedder";
        return temp;
    } else if (temp === 3) {
        temp = "American Cheese";
        return temp;
    } else if (temp === 4) {
        temp = "Pecorino Romano";
        return temp;
    }
}

function randomToppings() {
    let toppings = [];
    for (let i = 0; i < 3; i++) {
        let temp = Math.floor(Math.random() * 4) + 1;
        if (temp === 1) {
            toppings.push("Pepperoni");
        } else if (temp === 2) {
            toppings.push("Mushroom");
        } else if (temp === 3) {
            toppings.push("Extra cheese");
        } else if (temp === 4) {
            toppings.push("Sausage");
        }
    }
return toppings;
}

console.log(randomPizza());