"use strict";
// task 18
// store the locations in an array
let placesToVisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
// print  the array in its original order 
console.log("Oringinal order :", placesToVisit);
//print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order :", [...placesToVisit].sort());
//show that the array still in its original order
console.log("Original order after sorting:", placesToVisit);
//print the array reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order :", [...placesToVisit].sort().reverse());
//show that the array is still on the original order
console.log("Original order after reverse sorting:", placesToVisit);
//reverse the order list 
placesToVisit.reverse();
console.log("Reversed order :", placesToVisit);
// //sort the array in reverse alphabetical order 
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
