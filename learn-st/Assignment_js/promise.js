//promise is a inbuilt function
let Employees=[
    {"id":1,"name":"Arleyne","salary":"$6.41"},
    {"id":2,"name":"Florri","salary":"$2.95"},
    {"id":3,"name":"Gerry","salary":"$6.37"},
    {"id":4,"name":"Sidney","salary":"$6.71"},
    {"id":5,"name":"Auberon","salary":"$9.09"},
    {"id":6,"name":"Lexis","salary":"$2.26"},
    {"id":7,"name":"Gary","salary":"$0.10"}    
    ]


let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let flag=true;
            flag ? resolve("Data Inserted"):reject("Failed")
            Employees.push(emp)            
        }, 3000);
    })
}

let displayData=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of Employees){
            rows=rows+`<tr>
                        <td>${emp.id}</td> 
                        <td>${emp.name}</td> 
                        <td>${emp.salary}</td> 
                       </tr>`
        }
        document.getElementById('slg').innerHTML=rows
    },2000)
}

createEmployee({"id":1,"name":"Arleyne","salary":"$6.41"})
.then((msg)=>{
    console.log(msg),displayData()
})
.catch((err)=>{
    console.log(err)
})


// let employees=[{id:101,name:"Rahul",sal:46000},
//     {id:102,name:"Sonia",sal:54000},
// ]
// let createEmployee = (emp)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let flag = true;
//             flag?resolve("Data Inserted"):reject("Failed")
//             employees.push(emp)
//         },4000)
//     })
// }

// let displayData=()=>{
//     setTimeout(()=>{
//         let rows=""
//         for(emp of employees){
//             rows=rows+`<tr>
//                         <td>${emp.id}</td> 
//                         <td>${emp.name}</td> 
//                         <td>${emp.sal}</td> 
//                        </tr>`
//         }
//         document.getElementById('slg').innerHTML=rows
//     },2000)
// }

// createEmployee({id:103,name:"Priyanka",sal:65000})
// .then((msg)=>{
//     console.log(msg)
//     displayData()
// })
// .catch((err)=>{
//     console.log(err)
// })