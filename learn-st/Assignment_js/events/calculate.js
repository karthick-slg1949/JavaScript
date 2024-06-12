let display=document.getElementById('display')
let currentNumber=''
let previousNumber=''
let operation=null

function appendNumber(number){
    currentNumber+=number
    updateDisplay()
}
function setoperation(op){
    if(currentNumber==='')
        return
    if(previousNumber!==''){
        calculate()
    }
    operation=op
    previousNumber=currentNumber
    currentNumber=''
}
function calculate(){
    let result
    const prev=parseFloat(previousNumber)
    const current=parseFloat(currentNumber)
    if(isNaN(prev)||isNaN(current))return
    switch(operation){
        case 'add':
            result=prev+current
            break
            case 'subtract':
                result=prev-current
                break
                case 'multiply':
                    result=prev*current
                    break
                    case 'divide':
                    result=prev/current
                    break
                    default:
                         return
    }
    currentNumber=result
    operation=undefined
    previousNumber=''
    updateDisplay()
}
function clearDisplay(){
    currentNumber=''
    previousNumber=''
    operation=null
    updateDisplay()
}
function updateDisplay(){
    display.value=currentNumber
}
