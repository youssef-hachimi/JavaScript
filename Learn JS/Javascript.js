
alert(Hello);

var num1 = 8;
var num2 = 3;

var sum  = num1 + num2;
alert(sum);

var min  = num1 - num2;
var div  = num1 / num2;
var rest  = num1 % num2;
var prod  = num1 * num2;

console.log(min);
console.log(div);
console.log(rest);
console.log(prod);

// concatenation

var country ="morocco";
var city ="rabat";
var place = country + " " + city;

console.log(place);

var note = prompt("inter your exam note : ");

if(note < 6){
    console.log("NV");
}
else if (note >= 6 && note < 12){
    console.log("RAT");   
}
else if (note >= 12 && note <= 20){
        console.log("V");
}
else if(note > 20){
    console.log("invalid note !");
}

// Arrays
var fruits = ["apple","kiwi","orange","banana"];

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// arrays methods :

console.log(fruits.length);// 4
console.log(fruits.push("ananas")); // add ananas to fruits
console.log(fruits.pop()); // remove the last item from fruits
console.log(fruits.indexOf("orange")); // 2
console.log(fruits.shift()); // remove the first item form fruits
console.log(fruits.unshift("mango"));
console.log(fruits.sort()); //Sorts the array
console.log(fruits.split()); 
console.log(fruits.join());  //all array elements into a string.


// strings

var school ="estbm";

console.log(school.length); // 5
console.log(school.toUpperCase()); // ESTBM
console.log(school.toLowerCase()); // estbm
console.log(school.charAt(3));// b
console.log(school.indexOf("m")); // 4
console.log(school.replace("e","f")); // fstbm  EST => FST
console.log(school);


// math 

 var number = 8;

 console.log(Math.pow(number,2)); // 64
 console.log(Math.sqrt(100)); // 10
 console.log(Math.abs(-89)); // 89
 console.log(Math.floor(7.8)); // 7
 console.log(Math.ceil(35.3)); // 35
 console.log(Math.PI);
 console.log(Math.min(34,50)); // 34
 console.log(Math.max(34,50)); // 50
 console.log(Math.random()); //  0 /1
 console.log(Math.sin(number));
 console.log(Math.cos(number));
