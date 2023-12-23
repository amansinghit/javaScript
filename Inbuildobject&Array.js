// let lastName="Aman";// type string
// let firstName=new String("Aman");// type object
// let message="This is my class";
// let word=message.split(' ');
// console.log(word);
//////////////////////////////////////////////////use of back tics `` called template Literal
// console.log(`Aman
//             Singh`);//print as it i
//   console.log(`this is ${message}`);
/*****/// ////////////////////////////////////////// date&time
// let date=new Date();
// console.log(date);
//******************* */
//////////////////////////////////////////////////////Arrays
//craetion
// let numbers=[1,12,2,2,333,3,3];
// console.log(numbers.indexOf(12));
// console.log(numbers.includes(12));
// console.log(numbers.includes(2,12));//search 12 from index 2
///special arrayof objects
//let courses=[{no:1,naam:'Aman'},{no:11,naam:"chomu"}];
//console.log(courses.includes({no:1,naam:'Aman'}));//false
//incluse is not working in case of array of objects find kaam krega yha
// let course=courses.find(function(course){
//     return course.naam=='Aman';
// });
//find function is dependenet on course then course is callBack function- or 
//predicate function->arrayName.find(callBack function{})
// console.log(course);
////////////////////////////////////////////////////////////////////////
//dusra tarika using arrow function
// let course1=courses.find(course1 =>course1.naam==="chomu");
// console.log(course1);///searched object is printed

/*******////////////////////////////////////////Removing element from array
// let numbers=[1,12,2,2,333,3,3];
// numbers.pop();//end
// console.log(numbers);
// numbers.shift();//beggining
// console.log(numbers);//remove from begginging
// let numbers2=[1,12,2,2,333,3,3];
// numbers2.splice(1,7);//1 is starting index and 7 is howmany
// console.log(numbers2);//1
///////////////////////////////////////////////////////////////////
// let numbers3=[1,12,2,2,333,3,3];
// numbers4=numbers3;
// numbers3.length=0;///array ko khali krne ka tarika
// console.log(numbers4);//empty
// console.log(numbers3);//empty
// numbers3.splice(0,numbers3.length);//array ko khali krne ka nya tarika
//////////////////////////////////////////////////////////////////
//Combining and slicing of Array
// let array=[1,2,3,4];
// let arrray2=[5,6,7,8,9];
// let combined=array.concat(arrray2);
// console.log(combined);
// let uu=combined.slice(2,6);//index 2 se 5 tk return kr do
// console.log(combined);
// console.log(uu);
/////////////////spread operator
// let first=[1,2,3,4,5,6];
// let second=[7,8,9,10];
// let combined2=[...first,...second];
// console.log(combined2);
///////////////////////////////////////////////iterating an array
 //let arr=[5,5,6,77,5555];
// for(let x of  arr){
// console.log(x);
// }
// arr.forEach( function(number)
// {console.log(number)}  );
//number is callback function
//nya tarreka
//arr.forEach(number=>console.log(number));
////////////////////////////////////////////////////joing Arrays
// let arr=[10,20,30,40,50,60];
// const joined=arr.join(' ,');
// console.log(joined);
/////////////////////////////////////spilit array&join
// let mess='This is ashu bhai';
// let spilited=mess.split( '  ');//creates a arrays
// console.log(spilited);
// console.log(spilited);
// let joined=spilited.join('-');
// console.log(joined);
/////////////////////////////////////////////////
//sort primitives Arrays
// let arr=[3,2,5,6,8,1,0];
// arr.sort();
// console.log(arr);
// arr.reverse();
// console.log(arr);
//////////////////////////////////////sort array of objects(Not done)
// let arr=[{age:22,naam:"Aman"},{age:11,naam:"sman"}
// ,{age:25,naam:"nman"}];
// var arrnew=[];
// arr.sort(function(mySort){
    
// for(let val in  Object.keys[arr]){
//  arrnew.push(arr[val]);
// }
// arrnew.sort();

// });
// console.log(arrnew);
///////////////////////////////////Filtering
//let arr=[-1,-2,-77,-5,1,3,55,32,11];
// let filtered=arr.filter(function(value){
//        return value>=0;
// });
// console.log(filtered);//only -ve are filtered
//Tarika 2
// let filter2=arr.filter(value=> value>=0);
// console.log(filter2);
/////////////////////////////////Mapping Of Array
//  let arr=[7,8,9,10];
//  console.log(arr);
//  let items=arr.map(function(value){
//     return 'student_No'+" "+value;
//  });
//Arrow wala tarika
// let items=arr.map(value=> 'student_No'+" "+value);
//  console.log(items);
 /////////////////////////////////Mapping with objects
// let numbers=[-1,-2,1,2,3,4];
// console.log(numbers);
// let items=numbers.map(function(num){
// return {value:num};
// });
// let items=numbers.map(num=> {value:num});
// console.log(items);
//chaining map+filter
// let items1=numbers.filter(value=> value>=0).map(num=> {value:num});
// console.log(items1);

