class Account{
    acc_id=101
    acc_Name="Karthick"
    open_Account(){
        console.log("Account opened successfully!")
    }
}

let a1=new Account();
console.log(a1)
console.log(a1.acc_id)
console.log(a1.acc_Name)
a1.open_Account()