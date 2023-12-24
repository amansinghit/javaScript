// function sum(num,value, ...args){//first two val for num and val rst all for args
//    console.log(args); 
// }
// console.log(sum(2,3,4,4,5,6,7,8));
 ///////////////->>default parameter(//you have to make sure start from right side)
// function CI(p,r=10,y=2){
    
//     return(p*r*y)/100;
// }
// console.log(CI(1000));//200
// console.log(CI(1000,30));//600
// console.log(CI(1000,30,3));//900
//->>>>>>>->>>>>>>->>>>>Getter And Setter
// let Person={fName:"Aman",lName:"Singh"};
// function fullNAme(){
// return `${Person.fName}  ${Person.lName}`;
// }
// console.log(fullNAme());
//_>>>>->>>>>>>>Actual getter and setter
// let Person={fName:"Aman",lName:"Singh",
// get fullName(){
//     return ` ${Person.fName} ${Person.lName}`;
// },
// set fullName(value){
// let parts=value.split(' ');//split function breaks string into parts an dreturn an array
// this.fName=parts[0];
// this.lName=parts[1];
// }};
// //->>>>---->>>>->>>>>Error Handling
// try{
//     //console.log(Person.fullName);//getter called
//     Person.fullName="Anupal Umale";//setter called
//     console.log(Person.fullName);
// }catch(e)
// {
// alert("you have sent a number");
// }
  //--->>>>>>>>>>>>>Scope
// for(var i=0;i<=33;i++){

// }
// console.log(i);//34
//->>>>>>>>>>>>>>>>>>>>>>>
// for(let  i=0;i<=33;i++){

// }
// console.log(i);//error
//->>>>>>>>>>>>>>>>>>>>>>>
// if(true){/var scope is though out the function
// var a=6;
// }
// console.log(a);//6
//->>>>>>>>>>>>>>
// function  a(){//const scope till the block only
// const ab=5;
// console.log(ab);//5
// }
// const ab=6;
// function  b(){
//     const ab=7;
//     console.log(ab);//6
// }
// a();//5
// b();//7
//->>>>>>>>>>>Reducing an array
let arr=[3,4,5,2,5,7];
let sum =0;
for(let val of arr){
sum+=val;
}
console.log(sum);
//Dusra tarika
let  Sum=arr.reduce((accumulatr,currentvalue)=>accumulatr+currentvalue,0);//accumulatrlike (Sum)&currentvalue is like val  is callback function
console.log(Sum); 
