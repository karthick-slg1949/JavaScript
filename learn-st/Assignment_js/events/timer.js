//get the timer element
let timerElement=document.getElementsByTagName('p')[0]
//set initial time to 30 seconds
let timeLeft=30

//function to update the timer every second
let timerInterval=setInterval(() => {
    timerElement.textContent=timeLeft
    //decress the time left
    timeLeft--
    //check if time is up
    if(timeLeft<0){
        //stop the timer
        clearInterval(timerInterval)
        //optionally perform any actionwhen the timer reaches zero
        timerElement.textContent="timesup!"
    }
},500);
setInterval(()=>{document.getElementsByTagName('p')[1].innerHTML=new Date().toLocaleTimeString()},1000)
