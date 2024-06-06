const input=require('prompt-sync')();

let num=parseInt(input("Enter the number:"))
let n1=0,n2=1,nextTerm;
console.log('fibonacci series:')
for( i=1; i<=num; i++){
    console.log(n1)
    nextTerm=n1 +n2
    n1=n2   
    n2=nextTerm
}


