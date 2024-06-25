 let prices=[99,198,298,398]
// let new_price=[]
// for (let i=0; i<=price.length-1; i++){
//     console.log(price[i]+1)
//     new_price.push(price[i]+1)

// }
// let new_price=[]
// for(price of prices){
//     new_price.push(price+1)
// }
let new_price=[]
let new_prices=prices.map((prices)=>{
    return prices+1
})
console.log(new_price)
console.log(new_prices)