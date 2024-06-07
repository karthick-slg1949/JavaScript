function cal_Inderest(principal,rate,no_of_months){
    let total_Amount=principal+principal/100*rate*no_of_months;
    return total_Amount
}
let amount=cal_Inderest(100000,2,4)
console.log(amount)