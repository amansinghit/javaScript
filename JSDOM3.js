 //EventLoop (important) 
//Adding 100 paragraph
// const t1=performance.now();
// for(let i=1; i<=100;i++){
// let newEle=document.createElement('p');
// newEle.textContent='This is para'+i;
// document.body.appendChild(newEle);//in each iterration we are addingin body
// }
// const t2=performance.now();
// console.log('Performance time is '+(t2-t1));
//  //optimising 
//  const t3=performance.now();
//  let newdiv=document.createElement('div');
//  for(let i=1; i<=100;i++){
//     let newEle=document.createElement('p');
//     newEle.textContent='This is para'+i;
//     newdiv.appendChild(newEle);
//     } 
//      document.body.appendChild(newdiv);//100 reflow 100 repaint
//      const t4=performance.now();
   
//      console.log('Performance time is '+(t4-t3));
//      ////////////Most optimized 
//      let fragment= document.createDocumentFragment();
//      for(let i=1; i<=100;i++){
//         let newEle=document.createElement('p');
//         newEle.textContent='This is para'+i;
//         fragment.appendChild(newEle);
//         } 
//          document.body.appendChild(fragment);//1 reflow 1 repaint
////////////////////////->->->->->->->->->->->
         //JavaScript code is run top to bottom nature means synchronous execution 
         //Asynchronous Code(EvenListerner) 
//          function addPara(){
//             let para=document.createElement('p');
//             para.textContent='Kya Hal chal hi';
//             document.body.appendChild(para);
//          }
//          function addPara2(){
//             let para=document.createElement('p');
//             para.textContent='Kya Hal chal hi';
//             document.body.appendChild(para);
//          }
// addPara();
// addPara2();   
///////->->->->->->->->->->->->->->->->->->->
//Assychronous code(HandOvered to browser)like eventListerner
///EventLoop concept is  applied here 
// setTimeout(function(){
// console.log('HEllo Boy')
// },4000);//function is wait for 4000ms to run
//////////////->->->->->->->->->->->->
// function sync(){
// console.log('first');
// }
// sync();
// console.log('Second');
///////////////////////////Event loop concept is applied here
// setTimeout(function sync(){
//     console.log('third');
//      },4000);
//      function sync(){
//      console.log('first');
//          }
//     sync();
//     console.log('second');//o/p is first,second,third
////////////////////->->->->->->->->
//promises Important
//promise takes the responsibility to run the Asynchronous code
//return promise is resolved or rejected
// let mreapromise=new Promise(function(resolve,rejected){
//      setTimeout(function(){
//     console.log('I am inside the promise');
//     },4000);
//     ///resolve(1998);
//     rejected(new error("Tmse n ho payega"));
//     } );
// mreapromise.then((value) => {console.log(value);});
// mreapromise.catch((error)=>{console.log(error);});
// console.log('Pehla');
//after 4000msc function is came into queue and waiting for empty call stack
//after stack empty it will came into callstack and excution start
//o/p
// pehla
// I am inside the promise
////////////->->->->->->->->->->->->
//->->->->->->->multiple promises running simultaneously called promise chaining
// let vadaNo1=new Promise(function(){
//     setTimeout(()=>{console.log('set timeout Started');},4000);

// }); 
// let output=vadaNo1.then(()=>{let vada2=new Promise(function(resolve,rejected){
//     setTimeout(()=>{console.log('set2  timeout Started');},4000);
//     resolve("vada2 resolved");
// })
// return vada2;
// });
// output.then(value=>console.log(value));
///////////////////Async-await
//async function returns promise
// async function xyx(){
// return "Siddhesh";
// }
async function utility(){
let maharastraMausam=new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve("Maharastra me bhut garmi hi");
    },3000)
});
let hydrabadKAMAuam=new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve("hydreabad me bhut thandhi hi");
    },3000)
});
//TO stop promises running simultanously we use await
//
let DM= await maharastraMausam;
let HM= await hydrabadKAMAuam;
return [DM,HM];
}
utility();
/////////////Fetch API
