// function add(liton, mamun){
//     return liton, mamun
// }
// let saad = add("Myself ", "Liton al mamun")
// console.log(saad);

// function litonFun(a,b,c){
//     console.log(a,b,c);
// }
// litonFun("liton","programmer")



//Hoisting function

mamunFun("milon","Shohidul");
function mamunFun(p1,p2){
    console.log(p1,p2);
}


// /Returning a value


// function add(liton, mamun){
//     return liton + mamun
// }
// let saad = add("Myself ", "Liton al mamun")
// console.log(saad);



///FIRST CLASS CITIZEN

// function get(a,b){
//     return a + b;
// }
// let sum = get;
// console.log(sum(20,60))

//OR

// console.log(get(50,10));
// console.log(get(50,110));

//NESTED FUNCTION


// function liton(a){
//     function mamun(b){
//         function saad(c){
//             console.log(a,b,c);
//         }
//         saad("sub child function \n"); //line by line dekher jonno \n use korte hoy
//     }
//     mamun("child function \n");
// }
// liton(" parent function \n")



/// FUNCTION AS A PARAMITER

// function sum(a,b){
//     return a + b;
// }
// let total = sum;

// function count(a,b, fun){
//     return fun(a,b) * 5
// }

// let result = count(2,3, total)
// console.log(result);


//anonymus funcion

// (
//     function(){
//         console.log("anonymus funcion");
//     }
// )()

// // 
// let  y =function(a,b){return a + b}
// console.log(y(10,50));
// console.log(y(30,90));
// console.log(y(10,5));



///PASS BY VALUE

function spuare(x){
    x = x * x;
    return x;
}
let m = 10;
let get = spuare(m) 
console.log(get);
console.log(m);
    

// pass by value of referance values

let person = {
    name:"Liton",
    age: 20,
}
function IncreaseAge(obj){
    obj.age += 1;
}

IncreaseAge(person);///IncrAge and clg lagbei
console.log(person);

///Recursive function

function Hello(number){
    if(number === 0) 
        return;
    console.log(number);
    Hello(number - 1)
}
Hello(10)

// Default paramiter

function liton(a="saad"){
    console.log(a);
}
liton("saadmamun")