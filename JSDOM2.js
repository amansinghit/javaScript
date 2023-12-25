// let links=document.querySelectorAll('a');
// let secondlink=links[1];
// secondlink.addEventListener('click', function(event){event.preventDefault();
// console.log('Mja Ayya na Beta');});
/////////////////////////////////////////////
// let ele=document.createElement('div');
// for(let a=0 ; a<99 ; a++){
// let p_ele=document.createElement('p');
// p_ele.textContent="Added By Aman Ha Ha Ha"+a;
// p_ele.addEventListener('click',function(event){console.log('i have clicked');});
// ele.appendChild(p_ele);
// }
// document.body.appendChild(ele);
///////////optimised code avoid tooo many events
// let ele=document.createElement('div');

// function parastatus(event){
//     console.log('i have clicked ');
// }
//insted of adding listener in each para let me add in optimised code in whole div bcg p is inside div 
//or we can say p is child of div  
// for(let a=0 ; a<99 ; a++){
// let p_ele=document.createElement('p');
// p_ele.textContent="Added By Aman Ha Ha Ha"+a;
// p_ele.addEventListener('click',parastatus);
// ele.appendChild(p_ele);
// }
// document.body.appendChild(ele);
///////////////////////////////////////////////////////////////////
// let ele=document.createElement('div');
// function parastatus(event){
//     console.log('i have clicked '+event.target.textContent);//on applying event listener on div we have lossed the the 
//     //the individuality of para thats why we use event.target.textcontent// 
// }
// ele.addEventListener('click',parastatus);//addlistener into div
// for(let a=0 ; a<99 ; a++){
//     let p_ele=document.createElement('p');
//     p_ele.textContent="Added By Aman Ha Ha Ha"+a;
//     ele.appendChild(p_ele);
//     }
//     document.body.appendChild(ele);
/////////////////////////////////////////
// let val=document.querySelectorAll('span');
// function kamkro(event){
// console.log('span pe click kiya'+event.target.textContent);
// }
// for(let i=0;i<=2;i++){
// let valx=val[i];
// if(event.target.nodeName==='SPAN'){
//     valx.addEventListener('click',kamkro);
// } 

// }
//////////////////////////////////////////////
   