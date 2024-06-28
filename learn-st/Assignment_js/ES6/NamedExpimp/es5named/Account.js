// class Account{
//     acc_Name;
//     acc_Email;
//     acc_Address;
//     constructor(name,email,addr){
//         this.acc_Name=name
//         this.acc_Email=email
//         this.acc_Address=addr
//     }
// }

// export default Account


//ES5

//parrent
class Account {
    acc_Name;
    acc_Email;
    acc_addr;
    constructor(name,email,addr){
        this.acc_Name=name
        this.acc_Email=email
        this.acc_addr=addr
    }

}

module.exports=Account    //ES5

