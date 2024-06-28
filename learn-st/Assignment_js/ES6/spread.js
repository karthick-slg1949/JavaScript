//extract array elements & copy into New Array

// let eids=[101,102,103,104,105]
// let new_Eids=[...eids]
//console.log(...eids)

// 1.create new array
//2.Merge array
//3.To extract array elements

// let a=[10,20,30,40]
// let b=[50,60,70,80,90]
// let c=[...a,...b]
// let d=[...a,90,80,79]
//  console.log(d)
// console.log(c)

//1.create new object
//2.merge object
//3.To extensing object properties

// let emp={id:101,ename:"karthi",sal:340000}

// let user={
//     id:101,
//     name:"karthi",
//     email:"leo234@gmail.com"
// }
// let details={
//     email:"leo234@gmail.com",
//     sal:90000
// }
// let user_Details={...user,...details}
// console.log(user_Details);


// let emp={id:101,
//     name:"karthi"
// }
// let new_emp={...emp,sal:56000,loc:"svg"}
// console.log(new_emp);

function add(a,...b){
    console.log(a,b);
}
add(10,20)
add(10,20,30)
add(10,20,30,40)
add(10,20,30,40,50)
add(10,20,30,40,50,60)