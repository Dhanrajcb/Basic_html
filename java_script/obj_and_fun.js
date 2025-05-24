// date object
// const date = new Date();
// console.log(date); 

// const date = new Date("2022-03-25");
// console.log(date); 

// date year,monthh
// const date = new Date(2018,11,24,10,33,30,0);
// console.log(date);

// math object
// const num = Math.PI;
// console.log(num); 

// math methods
// const num = Math.round(4.6);
// console.log(num);
// const num1 = Math.ceil(4.2);
// console.log(num1);
// const num2 = Math.floor(4.9);
// console.log(num2);
// const num3=Math.trunc(3.12);
// console.log(num3);

// math random
// const num = Math.random();
// console.log(num);

// boolean function
// const num=Boolean(10>11);
// console.log(num); 
// const num1=Boolean(10<11);
// console.log(num1);

// Functions
// function course(){
//     console.log("JavaScript");
//     console.log("HTML");
//     console.log("CSS");
//     console.log("React");
//     console.log("Node");
// }
// course();

// function with parameters and arguments
// function myFunction(a,b){
//     return a*b;
// }
// const result=myFunction(10,20);
// console.log(result);

// function addition(a,b){
//     console.log(a+b);
// }
// addition(10,20);

// function default parameters
// function myFunction(a,b=20){
//     return a+b;
// }
// console.log(myFunction(10));

// function rest parameters
// function myFunction(...args){
//     return args;
// }
// console.log(myFunction(10,20,30,40));

// function calculateCartPrice(val1,val2,...num){
//     return calculateCartPrice;
// }
// console.log(calculateCartPrice(10,20,30,40,50));

// functions using objects
// const myArray=[1,2,3,4,5];
// function myFunction(myArray){
//     return myArray[3];
// }
// console.log(myFunction(myArray));

// practice example return the vowels 
// function countVowels(str){
//     let count=0;
//     const vowels="aeiouAEIOU";
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }
// let result=countVowels("Hello World");
// console.log("number of vowels:",result);

// basic calculator using function
// function add(num1,num2){
//     return num1+num2;
// }
// function sub(num1,num2){
//     return num1-num2;
// }
// function mul(num1,num2){
//     return num1*num2;
// }
// function div(num1,num2){
//     if(num2==0){
//         return "cannot divide by zero"
//     }
//     return num1/num2;
// }
// console.log(add(10,20));
// console.log(sub(10,20));
// console.log(mul(10,20));
// console.log(div(10,0));


// practice example login form

// function validateInput(username, password) {  
//     return username !== "" && password !== "";
    
// }
// function checkCredentials(username, password) { 
//     // Dummy check: In a real app, you'd compare with a database 
//     return username === "admin" && password === "1234";
    
// }
// function login(username, password) {
//     if (validateInput(username, password)) {  
//         if (checkCredentials(username, password)) {      
//             console.log("Login successful!");    
            
//         } else 
//         {      console.log("Invalid credentials.");    
            
//         }  
        
//     } 
//     else {   
//         console.log("Username or password cannot be empty."); 
        
//     }
    
// }
// login("admin","1234");



// Shopping Cart Array
// let cart = [];

// // Function to add a product to the cart
// function addToCart(product) {
//   cart.push(product);
//   console.log(`${product.name} added to cart.`);
// }

// // Function to calculate subtotal of items in the cart
// function calculateSubtotal(cart) {
//   let total = 0;
//   for (let item of cart) {
//     total += item.price;
//   }
//   return total;
// }

// // Function to apply discount
// function applyDiscount(total, discountPercent) {
//   return total - (total * discountPercent / 100);
// }

// // Function to display the final bill
// function displayBill(cart) {
//   let subtotal = calculateSubtotal(cart);
//   let finalTotal = applyDiscount(subtotal, 10); // 10% discount
//   console.log("🛒 Items in Cart:");
//   for (let item of cart) {
//     console.log(`- ${item.name}: ₹${item.price}`);
//   }
//   console.log(`💰 Total after 10% discount: ₹${finalTotal}`);
// }

// // Adding products
// addToCart({ name: "Shoes", price: 2000 });
// addToCart({ name: "T-shirt", price: 500 });

// // Display final bill
// displayBill(cart);

// local variables
// function myFunction() {
//     let a=4;
//     return a*a;
// }
// console.log(myFunction());

// global variables
// let a=4;
// function myFunction() {
//     return a*a;
// }
// console.log(myFunction());

// callback function
// function myDisplayer(message) {
//     console.log(message);
// }
// function myFirst(){
//     myDisplayer("Hello");
// }
// myFirst();

// parctice example
function myDisplayer(message) {
    console.log(message);
}
function myFirst() {
    myDisplayer("Hello");   
}
function mySecond() {
    myDisplayer("Goodbye");
}
myFirst();
mySecond();