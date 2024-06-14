// function myfunction(){
//     console.log("i love web dev");
//     console.log("i love you <3");
// }

// myfunction();
// function sum(a,b){
//     s = a+b;
//     return s;
// }

// let val = sum(1,5);
// console.log(val);
 
    //arrow functions..moder Js function ,,
// const arrowsum = (a,b) => {
//     console.log(a+b);
// }

// const arrowmul = (a,b)=>{
//     console.log(a*b);
// }

// const printhello =() => console.log("hello");


// function countvowels(str){
//     let count=0;
//     for(const char of str){
//         if(char === "a" || char ==="e" || char==="i" || char==="o" || char==="u"){
//             count++;
//         }

//     }
//     console.log(count);
// }


// let arr = [1,2,3,4,5];

// arr.forEach ((val) => {
//     console.log(val);
// })

// let arr = ["pune" , "delhi", "mumbai" , "patna"];

// arr.forEach ((val) => {
//     console.log(val.toUpperCase());
// })

// let arr = ["pune" , "delhi", "mumbai" , "patna"];

// arr.forEach ((val , idx , arr) => {
//     console.log(val.toUpperCase() , idx , arr);
// })


// let nums = [67,89,2];

// let newarr = nums.map((val) => {
//     return val*val;
// })

// console.log(newarr);

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let evenarr = arr.filter((val) => {
//     return val%2 === 0;
// })
// console.log(evenarr);


// let arr =[5,6,7,101,10,6];

// const output = arr.reduce((prev,curr) => {
//     return prev>curr ? prev : curr ;
// })
// console.log(output);

// let arr =[5,6,7,101,10,6];

// let output = arr.reduce((prev,curr) => {
//     return prev + curr ;   //giving sum of the given array
// })
// console.log(output);


// let n = prompt("enter the number n : ");
// let arr = [];
// for(let i=1 ; i<=n ; i++){
//     arr[i-1]= i;
// }
// console.log(arr);

                       //  DOM (document object method)  //

// alert("hello!");

// console.log(window);

// console.dir(document);
// console.dir(document.body);
// console.log(document.body);


// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading);

 //creating a toggle button for dark and light mode


let btn = document.querySelector("#btn");
let currmode = "light";
let body = document.querySelector("body");
btn.addEventListener("click" , () => {
    if(currmode== "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
})