// var rectangle={length:1,draw:function(){

//      console.log("Hello mi function hu");
// } };
//anonymous method callable without object also Add()
// function Add(){

//     console.log("Added successfully");
// }
//Add();  
//********************************* */
//object cration using factory method
//  function createFactory(length,breath){
//     var rectangle={length:length,breath:breath,draw:function(breath,length){
          //rectangle is object
//             console.log("Hello mi function hu"+""+(breath+length));
//         } };
// return rectangle;
//  }
//  let rectangleobj1=createFactory(20,30);//return object
 //*********************************************** */
// object creation using constructor draw is cons name
// function draw(len,bre){//draw is constructor name
//     this.length=len;//const is also a function
//     this.breath=bre;
//     this.finalDesign=function(){
//     console.log("Drawing done");
// }
// }
// let recobj1=new draw(20,30);//draw is const and also aobject
// //this is how constructor method object is created
// //bcg in javascript method is also a object
// let draw=new Function('len','bre',`this.length=len;
// this.breath=bre;
// this.finalDesign=function(){
// console.log("Drawing done");` );
// //use backtic `` symbol
//**************pass by value */
//  function inc(x){
// x++;
// }
// let b=20;
// {
// inc(b);//copy of b is passed
// }
// console.log(b);//20
// //**************pass by ref */
// function inc(x){
//     x.a++;
//     }
// let obj={a:10};
// inc(obj);
// console.log(obj.a);//11
//*****print key and value pair */
//for-In-loop
//  let obj={height:10,width:30};

// for(let val in obj){
// console.log(val,obj[val]);//height 10
                          //width 30
//}
//*********for-of-loop */

// let obj={height:10,width:30};
// if('height' in obj){
// console.log('present');
// }
// else{
//     console.log('absent');
//}
// for(let val of obj){//object.js:65 Uncaught TypeError: obj is not iterable
// console.log(val,obj[val]);
// }
// let rectangle={length:22,breath:33};//keys OR entries  
// for(let key of Object.keys[rectangle])
// {
// console.log(key);
// }
  