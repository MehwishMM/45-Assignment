"use strict";
// task 16
let guestArr = ["Mehwish", "Waniya", "Kainat", "Maryam"];
let canNotAttend = "Mehwish";
let newGuest = "Hadiya";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
//guestArr.map((items) =>
//console.log(`Dear ${items},I found a bigger dinner table so I am invited more poeples. `)
//);
//Part 2 
let guestBeg = "Aisha";
guestArr.unshift(guestBeg);
//console.log(guestArr)
//part 3
let middleGuest = "Fatima";
let middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 3, middleGuest);
//console.log(guestArr)
//part 4 
//guestArr.push("Zeeshan")
//console.log(guestArr)
//part 5
guestArr.map((items) => console.log(` Dear ${items}, you are invited in the more poeple list on dinner`));
