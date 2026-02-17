const colors = ["red", "green", "blue", "yellow"];
// console.log(colors.length);
// array.map( () => {} )
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

console.log(filterData);