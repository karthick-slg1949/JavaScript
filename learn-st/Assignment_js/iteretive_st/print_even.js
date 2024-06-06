// 60. Write a program to read 5 numbers and print only the even numbers

const prompt = require('prompt-sync')();

console.log("Enter 5 numbers:");

let count = 0;
while (count < 5) {
    let num = parseInt(prompt(`Enter number ${count + 1}: `));
    if (num % 2 === 0) {
        console.log(num + " is even.");
    }
    count++;
}
