// console.log("Liotn's programmers");

// let result = liton(20,30); //error
// console.log(result);

// console.log("You can show me");  //


/// error solved


// try{
//     console.log("Liotn's programmers");

// }catch{
//     let result = liton(20,30);
// console.log(result);
// }finally{
//     console.log("You can show me"); 
// }






/* <input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>

<p id="p01"></p> */  //HTML A LIKHTE HOBE


function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try { 
      if(x.trim() == "")  throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10)   throw "is too high";
      if(x < 5)  throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
    finally {
      document.getElementById("demo").value = "";
    }
  }

import {obj} from "./module.js"
console.log(obj.prof);