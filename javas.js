//let detail=[{a:22,naam:"Mohit"},{a:22,naam:"Aman"}];
// Add();
// function Add(  ){
// console.log("Adding");
// }
//Add();we can call below as well as above the definition
/////////////////////////////////////////////////
/////////////////// function Assignment
// Add();//Wrong shows eRROR
// let stand=function Add(  ){
// console.log("Adding");
// }
// stand();//Right Always call below the definition
//////////////////Anonymous funnction Assignment
// let stand=function(){
//     console.log("Adding");
// }
// stand(); 
// function sum(x,y,z){
//     console.log(arguments);//
//      return x+y+z;
    //  let value=0;
    //  for(let val of arguments){
    //       value=value + val;
    //  }
    //  return value;
//}
//console.log(sum(4,5,6));//15
//console.log(sum(1,2,3,4,5,6));(Wrong O/p)
//console.log(sum(1));//NaN (Wrong O/p)
//->->->Rest operator(a is 1 rest all goes to args )
    // function sum(a,...args){
    //    console.log(args);//print Array[2,3,4,5,6]
    // }
    // sum(1,2,3,4,5,6)
//->->->->->->->->->->Default parameter
// function CI(p,r=100,y=10){

// return p*r*y/100;
// }
//console.log(CI(1000));//10000
//console.log(CI(1000,200));//20000
//console.log(CI(1000,200,20));40000
//->->->->->->->->->->->->->->->->IMP
let person=[{fname:"pawalkar",lname:"Mohit"}];
function fullName(){
   return `${person.fname} ${person.lname}`; 
}
console.log(fullName());