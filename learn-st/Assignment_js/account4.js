class Account{
    acc_Bal=0;
    min_Bal=500;
    deposite_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
}

let a1=new Account();
a1.deposite_Amount(5000);
a1.deposite_Amount(15)
console.log(a1)

let a2=new Account();
a2.deposite_Amount(15000);
a2.deposite_Amount(50)
console.log(a2)