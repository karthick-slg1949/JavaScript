const quoteApiUrl="https:api.quote.io/random?Length=80&maxLength=100";
const quotesection=document.getElementById("quote");
const userInput=document.getElementById("quote-input");
let quote="";
let time=60;
let timer="";
let Mistake=0;

const renderNewQuote=async()=>{
    const response=await fetch(quoteApiUrl);
    let data=await response.json();
    quote=data.content;
    let arr=quote.split("").map(value =>{
        return "<span class='quote-chars'>"+value+"</span>";
    });
    quotesection.innerHTML+=arr.join("");
}
userInput.addEventListener("input",()=>{
    let quotechars=document.querySelectorAll(".quote-chars");
    quotechars=Array.from(quotechars);
    let userInputchars=userInput.value.split("");
    quotechars.forEach((char,index)=>{
        if(char.innerHTML==userInputchars[index]){
            char.classList.add("success");
        }else if(userInputchars[index]){
            char.classList.remove("fail");
        }else{
            if(!char.classList.container("fail")){
                Mistake+=1;
                char.classList.add("fail");
            }
            document.getElementById("Mistake").innerHTML=Mistake;
        }
        let check=quotechars.every((element)=>{
            return element.classList.contains("success");
        });
        if(checks){
            displayResult();
        }
    });
});
function updateTimer(){
    if(time==0){
        displayResult();
    }else{
        document.getElementById("timer").innerText=--time+"s";
    }
}
const timeResult=()=>{
    time=0;
    timer=setInterval(updateTimer,1000);
}
const displayResult=()=>{
    document.querySelector(".result").computedStyleMap.display="block";
    clearInterval(timer);
    document.getElementById("stop-test").style.display="none";

    userInput.disabled=true;
    let timeTaken=1;
    if(time !=0){
        timeTaken=(60- time)/100;
    }
    document.getElementById("wpm").innerText=(userInput.value.length/5/timeTaken).toFixed(2)+"wpm";
    
    document.getElementById("Accuracy").innerHTML=Math.round(userInput.value.length-Mistake)/userInput.value.length*100+"%";

}
const StartTest=()=>{
    Mistake=0;
    timer="";
    userInput.disabled=false;
    timeReduse();
    document.getElementById("start-test").style.display="none";
    document.getElementById("stop-test").style.display="block";
}

window.onload=()=>{
    userInput.value="";
    document.getElementById("start-test").style.display="block";
    document.getElementById("stop-test").style.display="none";
    userInput.disabled=true;
    renderNewQuote();
}