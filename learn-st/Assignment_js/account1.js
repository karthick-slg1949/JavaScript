class Account{
    min_Bal=500;
    open_Account(){
        console.log("Account opend successfully")
    }
    deposit_Amount(){
        console.log("Amount Deposited")
    }
    withdrawl_Amount(){
        console.log("Insufficient Balance")
    }
    get_St(){
        console.log("Pay 50 Rs")
    }
    get_Balance(){
        console.log("Server Busy")
    }
    close_Account(){
        console.log("Negetive Bal-deposite More!")
    }
}

let a1=new Account();
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl_Amount()
a1.get_St()
a1.get_Balance()
a1.close_Account()
console.log(a1)