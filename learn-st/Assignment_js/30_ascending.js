//30. Write a program to print the given 3 numbers in ascending orders?

const input=require('prompt-sync')();

let num1=parseInt(input("Enter the First number:"))
let num2=parseInt(input("Enter the Second number:"))
let num3=parseInt(input("Enter the Thisd number:"))

if(num1<=num2 && num1<=num3){
    if(num2<=num3){
    console.log(num1,num2,num3);
    }
else{
    console.log(num1,num3,num2);
}
}
else if(num2<=num1 && num2<=num3){
    if(num1<=num3){
        console.log(num2,num1,num3)
    }
    else{
        console.log(num2,num3,num1)
    }
}
else{
    if(num1<=num2){
        console.log(num3,num1,num2)
    }
    else{
        console.log(num3,num2,num1)
    }
}


