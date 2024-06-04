const input=require('prompt-sync')();
let num=parseInt(input("Enter the number:"))
if(num%2==0){
    console.log("even")
}
else{
    console.log("odd")
}