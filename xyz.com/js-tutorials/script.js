// snake case: customer_details
// camel case: customerDetails
// var, let, const
var a = 34; // number/int
var b = 999999999999999999999; // bigInt
var c = "Tosiq"; // string
var user = { name: "Awais", age: 4, email: "awais@gmail.com"  }; // object
// document.write(JSON.stringify(user)); // obj -> str

console.log(user.email);

//            0          1         2      3    4
var list = ["Item 1", "Item 2", "Item 3", 4, user]; // array
var isActive = true // false; // boolean
console.table(list[4]);

// problem 1: x + xy - z/4
var x = 20;
var y = 10;
var z = 5;
var result = x + x*y - z/4;
console.log(result);

var sub1 = 34;
var sub2 = 76;
var sub3 = 65;
var sub4 = 99;
var sub5 = 73;
var sum  = sub1 + sub2 + sub3 + sub4 + sub5;
var avg = sum/5;

console.log("Average marks is ", avg);

// f to c conversion
var fahrenheit = Number(prompt("Enter temp in F"));
var c = (fahrenheit - 32) * 5/9;
console.log(c.toFixed(4));