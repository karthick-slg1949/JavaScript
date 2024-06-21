class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;
    min_Bal=500;
    constructor(id,name,amount){
        this.acc_Name=name
        this.acc_Id=id
        this.acc_Bal=amount
    }
    open_Account(){
        console.log("Account opened Successfully!")
    }
    deposi_Amount(amount){
        this.acc_Bal=this.acc_Bal=amount
    }
    withdrawl_Amount(amount){
        this.acc_Bal=this.acc_Bal-amount
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal
    }
}

let a1=new Account(101,"rahul",4000)
let a2=new Account(102,"karthi",9000)
console.log(a1)
console.log(a2)
a1.deposi_Amount(8000)
a1.deposi_Amount(40)

console.log(a1)
a1.withdrawl_Amount(2000)
a1.withdrawl_Amount(40)
console.log(a1)
console.log("**********")

console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
