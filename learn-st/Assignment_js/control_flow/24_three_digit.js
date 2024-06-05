//24.write a program to check if a number is three digit  or not ?

const input=require('prompt-sync')();
let number=parseInt(input("Enter the number:"))
if(number>=100 && number<999){
    console.log(number+"is three digit number")
}
else if(number<100 && number>=10){
    console.log(number+"is two digit number")
}
else if(number<10 && number>=1){
    console.log(number+"is one digit number")
}
else if (number>=999 && number<9999){
    console.log(number+"is four digit number")
}
else{
    console.log(number+"is not a three digit number")
}