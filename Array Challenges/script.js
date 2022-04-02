// 1 Always Hungry

function alwaysHungry(arr) {
    let hungry = true;
    let output = ""
    // go through the arrays using a for loop
    for (var i = 0; i < arr.length; i++) {
        // every element that is food, change to yummy
        if (arr[i] === "food") {
            output += 'Yummy'
            hungry = false
        }
    }
    if(!hungry){
        return output+' ';
    }else {
        return 'I am hungry'
    }
}

console.log(alwaysHungry([3.14, "food", "pie", true, "food"]));
// this should be console log yummy, yummy

console.log(alwaysHungry([4, 1, 5, 7, 2]));
// this should console log im hungry

//2 High Pass Filter
//Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 5){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//3 Better than average
//Given an array of numbers return a count of how many of the numbers are larger than the average.
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    sum = sum/arr.length;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > sum)
        count++;
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//4 Array Reverse
//Write a function that will reverse the values an array and return them.
function reverse(arr) {
    let j = arr.length-1
    for(let i = 0; i < arr.length/2; i++){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//5. Fibonacci Array
//Fibonacci numbers have been studied for years and appear often in nature. 
//Write a function that will return an array of Fibonacci numbers up to a given length n. 
//Fibonacci numbers are calculated by adding the last two values in the sequence together. 
//So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(let i = 1; i < n-1; i++){
        fibArr[i+1] = fibArr[i] + fibArr[i-1]
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
