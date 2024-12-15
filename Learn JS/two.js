// if statement :
let age = 19;
if (age == 19){
    console.log("your age is 19");
}
else{
    console,log("your age is not 19");
}

// if (a === 9){
//     ...
// }
// return true or false bec we have 3 =


// Conditional Ternary & Ternary Chains 

let accessAlowed = age > 18 ? true : false;
let Age = 18;
let msg = 
Age < 3  //false
? "Hello, baby!"
: Age < 18 // false
? "Heloo"
: Age < 100 // true -> Greeting!
? "Greeting!" 
: "what an unusual Age!"
let AccessAlowed = age >= 18 ? "Hello" : "You're not allowed";
console.log(AccessAlowed);// Hello

// loops
// while loop
var i = 0;
while(i < 3){
    console.log(i);
    i++;
}
// do while
var a = 5;
do{
    console.log(a)
    a--;
}while(a > 0)

// for loop 
var j;
for(j=0;j<10;j++){
    console.log(j);
}

// Binding
let number = 13; // Define a binding using let keyword , name of the binding(number),"=" assign a value
if(true){
    console.log(number);
    let number = 88;  
}

console.log(number * 3);

// Functions

function prod(n1,n2){

    if(n1 > 0 && n2 > 0){
        let prod = n1 * n2;
    }
    return prod;
}
var result = prod(30,3); 








