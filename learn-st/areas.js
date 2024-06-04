 const input = require('prompt-sync')();
const baseValue=parseInt(input('Enter the base of a triangle: '));
 const heightvalue=parseInt(input('Enter the height of a triangle: '));
 
 // calculate the area
 const areaValue = (baseValue * heightvalue) / 2;
 
 console.log(
   `The area of the triangle is ${areaValue}`
 );
