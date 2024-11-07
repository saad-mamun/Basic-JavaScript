// "use strict"
// let x;
// x = "Hello usa";
// console.log(x);

const info=["liton","mamun","sohag","sojeeb","Nadir","bbk"];
info.forEach(CompanyInfo);

function CompanyInfo(value, index, itSelf){
    // console.log(value + " " + index);
    // console.log(index);
    console.log(itSelf);
}

/// array map

const number = [2,3,4,5,4,10,12] //original

let number2 = number.map(function(value){
    return value * 3;
})
console.log(number2);
console.log(number);

/// flatmap

const myArr = [1,2,3,4,5,6,7];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);

/// filter method

let Myfilter = [1,2,3,4,5,6,7,8,9,10];
const Fresh = Myfilter.filter(filterFun);
function filterFun(value){
    return value > 5; // 5 er theke boro gulo dekhabe
}
console.log(Fresh);

/// regular expression



let text = "hi this is liton al mamun also saad mamun"
// let result = text.search(/mamun/i);  ///search index number
// let result = text.match(/mamun/ig)  ///sobgulo mamun findout kore..
// let result = text.match(/mamun/i)   ///total input
// console.log(result);

// let changed = text.replace("mamun","sojeeb") // 1st replace poriborton;
let changed = text.replace(/mamun/ig, "Sojeeb") //Multiple replace;
console.log(changed);




/// scope

let say = "hi"; //global scope;
console.log(say);

function sayhi(){
    let sayhi = "message"; //function scope // block scope 
    console.log(sayhi);
}
sayhi()

{
    let sayhello = "message sent" //block scope
    console.log(sayhello);
}
sayhello()




