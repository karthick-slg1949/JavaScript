// 62. Write a program to check if a given number is an Armstrong number or not

const input=require('prompt-sync')();

let num=parseInt(input("Enter the number:"))
let originalNum=num;
let sum=0;
let digit;
while(originalNum>0){
    digit=originalNum%10;
    sum+=digit**3;
    originalNum=Math.floor(originalNum/10);
}
    if(sum===num){
    console.log(num+"Is armstrong number")
    }

else{
    console.log(num+"Is not a armstrong number")
}

// const prompt = require('prompt-sync')();

// let num = parseInt(prompt("Enter the number: "));
// let originalNum = num;
// let sum = 0;
// let digit;

// while (originalNum > 0) {
//     digit = originalNum % 10;
//     sum += digit ** 3; // Using exponentiation operator to calculate the cube of the digit
//     originalNum = Math.floor(originalNum / 10);
// }

// if (sum === num) {
//     console.log(num + " is an Armstrong number.");
// } else {
//     console.log(num + " is not an Armstrong number.");
// }
