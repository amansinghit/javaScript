// objec cloning using iterarion
// let src={value1:10,value2:55,value3:66};
// let dest={};
// for(let key in src){

// dest[key]=src[key];
// }
//  for(let key in dest){
//     console.log(key+" "+dest[key]);
 //}
// object cloning using Assign
 //let src={value1:10,value2:55,value3:66};
//let dest=Object.assign({},src);
//let src1={value4:10,value5:55,value6:66};
//let dest2=Object.assign({},src1,src);//two objects copied simultaneously into one
//console.log(dest2);
//O capital of object
// for(let key in dest){
//          console.log(key+" "+dest[key]);
//     }
// src.value1++;
// console.log(src.value1);
// console.log(dest.value1);
//object clone using Spread
//************************** */
//method 3 for cloning
// let src12 ={a:22,b:33};
// let dest3={...src12};
// console.log(dest3);