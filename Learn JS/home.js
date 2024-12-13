/*
primitive values 
42 | 3.14 | "holly" | true false | undefined |null
number | string | boolean | undefined | Null
complex Date : Array | object
array : [34,56,66] , zero indexed : [0,1,2]
object : {age : 19} ,{Fname : "youssef"} property key name(age) , value(19) you can also type like this : {"age : 19"}
{
    age : 19,
    firstName : "youssef"
}
// operations
Binary Operation : + - / * % Ex: 3 + 37
string Concatenation :
"youssef" + "hachimi" = youssef hahcimi
*/

// Numbers arithmetic
console.log(15 + 3); // 18
console.log(30 / 3); // 10
console.log(5 * 3); // 15
console.log(30 % 3); // 0
console.log(15 - 4); // 11

// Concatenation 
console.log("youssef" + " hachimi")//youssef hachimi

/*
    Comparison Equality
    45 == 45 // check if the numbers are equal : true
    45 === "45" // cheeck if the numbers and the type is the same : false

*/ 
console.log(40 == 40); // true
// check values

console.log(30 === "30"); // false
// check type of the values and values

console.log(typeof"30") // number
// != | < | > | <= | >=  | == | // 5 > 4
console.log(13 < 34) // true
console.log(13 < 34 || 13 == 13)  // true
console.log(13 <= 34) // true

var number = 89;
number++; //90
number += 3; //93
console.log(number);//93

// Expressions : thing return value
/*
object : {}
Arrys : []
numbers : 34
class : class{}
ternary exprestion : isMember ? "2.00" : "10.00" 
function call : sayHello()
more ...
*/
'${"youssef"}' // = "youssef"
'${"34"}' // = "34"
'${"34 + 6"}' // = "40"
'${ {} }' // = "Object"
'${ [] }' // = "Array"
'${ function say hello(){} }' // = function declaration
'${ class student{} }' // "class student "
'${ SiHello() }' // " Hello"
'${ 1+1 == 2 ? true : false}' // " true"



// Statements : Performs an Action && don't return values
/*
variable declaration
var b = 50 + 7 ;
conditionals if else
for loops
while loop
*/

'${ var b = 50+ 7}' // error
'${ if(true){} else(){} }' // error
