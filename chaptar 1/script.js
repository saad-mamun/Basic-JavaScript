const num=100;
var names = "Laili"
let person = "yes, I',m"
// document.getElementById('demo').innerHTML = num + "<br>" + names +"<br>" + person;

const  cars = ["Saab", "bolvo", "BMW","TOYOTA"];
// cars.splice(1,2,"saad","sojib") //multipule value REPLACE er jonno splice

const lovecar = cars.slice(2);//use for multiple value remove 


// document.getElementById("demo").innerHTML = cars +"<br>" + lovecar;
// cars[0]= "voxwagen"  //value input kora.
// console.log(cars);
// console.log(cars[2]);
// console.log(cars.length); //kototi value ache.4
// document.getElementById("demo").innerHTML = cars[2]
// cars.push(" liton")
// cars.unshift("mamun ")
// cars.join("#")

// document.getElementById("demo").innerHTML =Array.isArray(cars);

const bars = ["Email", "input", "Linus"]
// const mycolection = cars.concat(bars)
// mycolection.join(" #")
// document.getElementById("demo").innerHTML = mycolection.join(" #");


// flat array//////////////
const myArray = [[1,2],[3,4],[5,6]];
// const newArray = myArray.flat()
// document.getElementById("demo").innerHTML=newArray


// position finding
// let position=bars.indexOf("input")+1;
// let position = bars.lastIndexOf("Linus");
// document.getElementById("demo").innerHTML = position;



const fruits = ["Banana","Mango", "Litchi", "Apple"]
// fruits.sort() //sortiog array - chrom anujai sajano (A-B-C-X-Y-Z);
//fruits.reverse()
//const sorted = fruits.toSorted()//sortiog array - chrom anujai sajano (A-B-C-X-Y-Z);
//document.getElementById('demo').innerHTML= sorted;



// const points = [10,1,100,25,35,90,5];
// document.getElementById('demo').innerHTML = points;

// function myFunction1(){
//     points.sort();
//     document.getElementById('demo').innerHTML = points;
// }

// function myFunction2() {
//     points.sort(function(a, b){return a - b});
//     document.getElementById("demo").innerHTML = points;
//   }

//document.getElementById('demo').innerHTML=Math.ceil(5.2)
//document.getElementById('demo').innerHTML=Math.round(5.9)
//document.getElementById('demo').innerHTML=Math.floor(5.23)
// document.getElementById('demo').innerHTML=Math.abs(-5.23)
// document.getElementById('demo').innerHTML=Math.pow(8,2)
// document.getElementById('demo').innerHTML=Math.sqrt(64) //root er kaj kore
// document.getElementById('demo').innerHTML = Math.random()