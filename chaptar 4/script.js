// let age = 15;
//15 er soman ba boro
// if(age >= 15){
//     document.getElementById("demo").innerHTML ='Well come to liton program'
// }

//15 er theke boro//
// if(age > 15){
//     document.getElementById("demo").innerHTML = "Well come to liton programming"
// }

//15 er theke choto hote hobe
// if (age<15){
//     document.getElementById('demo').innerHTML = "well come to liton programmer"
// }

//15 er somman ba choto hote hobe
// if(age <= 15){
//     document.getElementById('demo').innerHTML = "will come to my display"
// }



// NESTED STATEMANT START (important)

// let age = 15;
// let country = "Bangladesh";

// if(country == "Bangladesh"){
//     if(age >= 16){
//         console.log("you are selected for driving Licence");
//     }

// }
/// OR 
// if(country =="Bangladesh" && aga >= 16){
//    console.log("you can drive");
// }


// NESTED END


// IF ELSE

// if(age > 16){
//     console.log("you can drive");
// }else{
//     console.log("you can not drive");
// }
///OR
// if(country == "Bangladesh" && age>= 16){
//     console.log("you can drive"); //true
// }else{
//     console.log("you can not drive"); //false
// }


// IF ELSE IF (else if - bar bar use kora jai)

// let a = 20;
// let b = 30;
// let c = "Liton's programmer"

// if(a > b){
//     console.log("a is greater the b");
// }else if(b > a){
//     console.log("b is greater the a");
// }else{
//     console.log("similar number");
// }


// TERNARI OPARETOR
// let age = 20;
// let message = age >= 18 ? "you can drive" :"you can't drive";
// console.log(message);

//multiple condition in ternary oparetor

// let speed = 80 ;
// let message = speed >= 120 ? "Speed is too fast" : speed >= 80 ? "you can drive" : "slowly drive";
// console.log(message);





// SWITCH 

let day = 6;
let dayName;
switch(day){
    case 1:
        dayName = "saturday";
        break
    case 2:
        dayName= "sunday";
        break
    case 3:
        dayName = "monday";
        break
    case 4:
        dayName = "Tuesday"
        break
    case 5:
        dayName = "Wednesday"
        break
    case 6:
        dayName = "Thursday";
        break
    case 7:
        dayName = "Friday"
        break
    default:
    dayName ="invalid day name"
}
console.log(dayName);