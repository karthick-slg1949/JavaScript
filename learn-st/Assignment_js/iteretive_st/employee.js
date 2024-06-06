let employees=[
    {eid:101, ename:'Rahul', esal:45000},
    {eid:102, ename:'karthick', esal:65000},
    {eid:103, ename:'rajesh', esal:76000}
]
// for(employee of employees){
     // console.log(employee.ename)
     //         (or)
 //     console.log(`empolyee names: ${employee.ename}`)
//  }
              //(or)

// for(let i=0; i<=2; i++){
//     console.log(employees[0].ename) 
// }   
            //  (or)

            // let i=0
            // while(i<2){
            //     console.log(employees[i].ename)
            //     i++
            // }
           // (or)

           
           let i=employees.length-1;
           console.log(`Employee Id:${employees[i].eid},Name:${employees[i].ename}`)

        //    Employee Id:103,Name:rajesh