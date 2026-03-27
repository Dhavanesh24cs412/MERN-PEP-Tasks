/*
//EVENSUM
var i = 0;
var sum = 0;
while (i <= 10) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}
console.log(sum);


//Array operations
var arr = [1, 2, 3, 4, 5];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

const nums = [0,10,20,30,40,50];
console.log(nums.filter(num => num > 20));//Used to filter the array based on a condition
nums.forEach(num => console.log(num));//Used to iterate over the array
const doubled = nums.map((num) => {return num*2;}); //Used to perform an operation over the array
console.log(doubled);



//Two sum
var target = 5;
var arr = [1, 2, 3, 4, 5];
var found = false;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            console.log(arr[i], arr[j]);
            found = true;
            break;
        }
    }
}
if (!found) {
    console.log("No pair found");
}


///Let and Var based questions:

console.log(a);
var a = 10;
console.log(a);



console.log(b);
let b = 10;
console.log(b);



if (true) {
  var x = 5;
}
console.log(x);



//Loop with var and Loop with let (Important!!):
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000);
}



//Shadowing:
let m = 100;

{
  let m = 200;
  console.log(m);
}

console.log(m);



////MAth Object methods
console.log(Math.floor(5/2));
console.log(Math.ceil(5/2));
console.log(Math.round(5/2));
console.log(Math.trunc(2.7854));
console.log(Math.pow(2,5));
console.log(Math.sqrt(16));
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));
console.log(Math.abs(-7));
console.log(Math.floor(Math.random() * 10));      
console.log(Math.random()*100);

//String methods:
var str = "Hello World";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);
console.log(str.charAt(0));
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));
console.log(str.slice(0, 5));
console.log(str.slice(-5));
console.log(str.replace("World", "Universe"));
console.log(str.split(" "));



//Using typeof :
var a = 10;
var b = "Hello";
var c = true;
var arr = ['Hello', 'World'];
var x;
var y=null;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof arr);
console.log(typeof x);  
console.log(typeof y);


/////Objects in Javascript:
 const movie ={
    name: "Spiderman",
    duration: "1:30 mins",
    actors: ['Andrew Garfield', 'Emma stone'],
    rating: 9.4
 };
 console.log(movie.name);
 movie["genre"] = "Comics/Adventure";
 //console.log(movie);
 movie.genre = "Superhero";
console.log(movie);



////Arrays in Javascript:
var arr=['Lemon', 'Apple', 'Orange', 'Banana']
arr.pop();
//arr.push(1); //JS can store multiple datatypes in a same array
console.log(arr.slice(0,2));
console.log(arr.reverse());
console.log(arr.length);
console.log(arr.includes('Lemon'));

const result = arr.map(item => item + " Fruit");
console.log(result);
const indexed = arr.map((item, index) => index + ": " + item);
console.log(indexed);
var numArray=[1,2,3,4];
var found = numArray.find(n => n ==1 );
console.log(found); 

var filtered = numArray.filter(n => n > 2);
console.log(filtered);
///////////////////////////

////Javascript falsy values: false, 0, "", null, undefined, NaN. 


/////Regular Expression in Javascript:

const nameRegex = /[A-Za-z]/;  /// the symbol '^' inside the '[]' means by negation that says that the input string should not contain the mentioned.
const strictNameRegex = /^[A-Za-z]/
/// The negation '^' symbol outside the '[]' means there must not exists empty space before.  
console.log(nameRegex.test('Dhavanesh')); //output: true
console.log(strictNameRegex.test('Dhavanesh'));//output:false

const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;  
console.log(emailRegex.test("dhavanesh@gmail.com")); //output: true "The test function evaluates and returns true when the given string matches the regular expression else returns false,"

const phoneNumRegex = /[0-9]/;
console.log(phoneNumRegex.test(35710)); 


///////Classes in Javascript
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
const train1 = new Train('blue', true);
train1.lightsStatus();
console.log(train1);



//Closures in Javascript :
//Closures in javascript is a property where the inner function remembers the variables from its outer function in heap memory.
function outer() {
    let count = 0; // variable in outer scope

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer(); // outer() returns inner()
counter(); // 1
counter(); // 2
counter(); // 3

////Closures using Factory functions
//Used to bundle multiple functions as like as classes 
const outer = function(){
    let counter=0;
    return {
        incrementOne: function(){
            counter+=1;
        },
        decrementOne: function(){
            counter-=1;
        },
        displayCounter: function(){
            console.log(counter);
        }
    };
}
const outerObj = outer();
outerObj.incrementOne();
outerObj.incrementOne();
outerObj.decrementOne();
outerObj.displayCounter();

///Default Parameters in Javascript functions:
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet();          // Hello, Guest!
greet("Dhavanesh"); // Hello, Dhavanesh!


////Template Literals:
console.log(`
${"Hello"}
        ${"Dhavanesh"}   
                    ${"from CSE"}
    `);


///Array of functions in Javascript:
function greet() {
  console.log("Hello!");
}

function farewell() {
  console.log("Goodbye!");
}

function surprise() {
  console.log("Surprise!");
}
const actions = [greet, farewell, surprise];
actions[0](); 
actions[1](); 
actions[2]();


//Spread Operator in javascript:
const arr1 = [10, 20];
const arr2 = [30, 40];
console.log([...arr1, ...arr2]);

const user = { name: "Dhavanesh", age: 25 };
const extra = { role: "developer" };
const newUser = { ...user, ...extra };
console.log(newUser); //Output:  { name: "Dhavanesh", age: 25, role: "developer" }

function sum(a, b, c) {
  return a + b + c;
}
const values = [5, 10, 15];
console.log(sum(...values)); // Output: 30  "Spread each element in the array as arguments to the function"

*/

//Rest operator in JS:
//It is used for destructuring
const [first, second, ...rest] = [100, 200, 300, 400, 500];
console.log(first);  // 100
console.log(second); // 200
console.log(rest);   // [300, 400, 500]

const user = { name: "Dhavanesh", age: 25, role: "developer", country: "India" };
const { name, ...details } = user;
console.log(name);    // Dhavanesh
console.log(details); // { age: 25, role: "developer", country: "India" }