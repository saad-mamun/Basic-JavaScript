function liton(a){
    function mamun(b){
        function saad(c){
            document.getElementById("demo").innerHTML = a+ "<br>" + b + " <br>"+c;
        }
        saad("Sub child of child \n")
    }
    mamun("child of parant \n")
}
liton("This is parant \n")



function sum(a,b){
    return a+b;
}
let total =sum;
function sum2(a,b,fun){
    return fun(a,b) * 5
}
let gross = sum2(20,52,total);
document.getElementById("demo2").innerHTML = gross;

(
    function(){
        console.log("Hey leady this is zxu");
    }
)()


let y = function(a,b){return a+b};
console.log(y(15,30));

function pass(x){
    x = x * x;
    return x
}
let m = 10;
let get =pass(m)
console.log(m);
console.log(get);

let person = {
    names: "Liton al mamun",
    age:20,
}

function IncreaseAge(obj){
    obj.age += 1;
}

IncreaseAge(person)
console.log(person);

function hello(number){
    if(number === 0)
        return;
    console.log(number);
    hello(number -1)
}
hello(10)