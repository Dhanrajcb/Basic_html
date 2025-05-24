// let fruits=["apple","banana","mango"];
// console.log(fruits);

// Accessing array elements
// let fruits=["apple","banana","manjo"];
// let fruit=fruits[2];
// console.log(fruit);

// changing an array elements

// let fruits=["apple","banana","manjo"];
// fruits[0]="orange";
// console.log(fruits);

// practice example
// products=["leptop","mobile","tablet","watch","camera","headphones"];
// console.log(products);
// products[4]="earphones";
// console.log(products);
// console.log(products[3]);

// looping array elements
// let fruits=["apple","banana","mango"];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// using for-of loop

// let fruits=["apple","banana","mango"];
// for(const fruit of fruits){
//     console.log(fruit);
// }

// using for-in loop

// let fruits=["apple","banana","mango"];
// for(const index in fruits){
//     console.log(fruits[index]);
// }

// let numbers=[10,45,32,22];
// for(const index in numbers){
//     console.log(numbers[index]);
// }

// let fruits=["apple","banana","mango"];
// for(let fruit of fruits){
//     console.log(fruit.toUpperCase());
// }

// let fruits=["APPLE","BANANA","MANGO"];
// for(let fruit of fruits){
//     console.log(fruit.toLowerCase());
// }

// practice example find average marks of the array
// let students=[10,20,30,40,50];
// let sum=0;
// for(let i=0;i<students.length;i++){
//     sum+=students[i];
// }
// let avg=sum/students.length;
// console.log(avg);

// practice example find average marks of the array using for of loop
// let students=[10,20,30,40,50];
// let sum=0;
// for(let val of students){
//     sum+=val;
// }
// let avg=sum/students.length;
// console.log(avg);

// array methods

// array push
// let marks=[10,20,30,40,50];
// marks.push(60);
// console.log(marks);

// unshift adds the element in the 1st position of the array
// let marks=[1,2,3,4,5];
// marks.unshift(9);
// console.log(marks);

// shift removes the first element of the array
// let marks=[1,2,3,4,5];
// marks.shift();
// console.log(marks);

// checks weather the element is present in the array
// let marks=[1,2,3,4,5];
// console.log(marks.includes(7));

// finding the index of the specified element
// let marks=[1,2,3,4,5];
// console.log(marks.indexOf(3));

// pop removes the last element of the array
// let marks=[1,2,3,4,5];
// marks.pop();
// console.log(marks);

// // deleted value
// let marks=[1,2,3,4,5];
// let deletedValue=marks.pop();
// console.log("deleted Value",deletedValue);

// concatination of two arrays
// const roll=[1,2,3,4,5];
// const numbers=[6,7,8,9,10];
// const rollnumbers=roll.concat(numbers);
// console.log("merged array:" ,rollnumbers);

// concatination of multiple arrays
// const arr1=["B","C","A"];
// const arr2=["D","E","F"];
// const arr3=["G","H","I"];
// const names=arr1.concat(arr2,arr3);
// console.log(names);

// using join method it converts the array into string
// const arr1=["B","C","A"];
// const arr2=["D","E","F"];
// const arr3=["G","H","I"];
// const names=arr1.concat(arr2,arr3);
// console.log(names.join(""));

// sorting the array
// const numbers=[3,4,2,6,8,1,5,7];
// console.log(numbers.sort());

// const names=["B","C","A","D","E","F"];
// console.log(names.sort());

// reverse the array
// const numbers=[3,4,2,6,8,1,5,7];
// console.log(numbers.reverse());

// reverse the string
// const names=["B","C","A","D","E","F"];
// console.log(names.reverse());

// practice example
let numbers=[1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
numbers.push(11);
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
number=numbers.pop();
console.log(number);
numbers.shift();
console.log(numbers);
console.log(numbers.indexOf(5));
console.log(numbers.includes(5));