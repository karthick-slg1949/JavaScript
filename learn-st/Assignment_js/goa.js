let GoToGoa=(success,failure)=>{
    let bank_Bal=50000
    if(bank_Bal>10000){
        success("Go & Enjoy")
    }
    else{
        failure("Go To Prostack Acadamy & Practice Asynchronous")
    }
}
GoToGoa((msg)=>{console.log(msg);},(err)=>{console.log(err);})