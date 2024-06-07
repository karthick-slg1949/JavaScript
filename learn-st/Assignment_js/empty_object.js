// How to verify given object is empty or not?

let a={"id":101,"name":"rahul","sal":45000};
let b={};

if(Object.keys(a).length===0){
    console.log("Not Empty")
}
else {
    console.log("Empty")
}
if(Object.keys(b.length===0)){
    console.log("Not empty")
}
else{
    console.log("Emopty")
}