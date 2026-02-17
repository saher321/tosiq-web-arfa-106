// index          0       1       2        3
const colors = ["red", "green", "blue", "yellow", "Purple"];
colors.push("Orange")
console.log(colors)


const newColors = colors.slice(0, -1)

// console.log(newColors);

// add or remove element from given array
// 3 value/parameters :: targeted index, (0/1), values
colors.splice(2, 1, "Orange"); 

colors.unshift("Orange")

// console.log(colors);
// console.log(colors.length);
// example = arrays.map( () => {} )
colors.map((color, i) => {
    // console.log(i+1, color);
});

// create an array of 5 users (id, name, email, role(user/admin))

const products = [
    {id: 1, name: "Shoes", category: "Wearing"},
    {id: 2, name: "USB", category: "Electronic"},
    {id: 3, name: "T-shirt", category: "Wearing"},
    {id: 4, name: "LCD", category: "Electronic"},
];

let categoryName = "Electronic";
const filterData = products.filter((product) => {
    return product.category == categoryName
});

// console.log(filterData);