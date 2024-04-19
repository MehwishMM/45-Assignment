"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${numbers}st`); //1st
    }
    else if (number === 2) {
        console.log(`${numbers}nd`); //  2nd
    }
    else if (number === 3) {
        console.log(`${numbers}rd`); //3rd
    }
    else {
        console.log(`${number}th`); // 4th,5th,6th,7th,8th.9th
    }
}
