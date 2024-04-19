"use strict";
//task 14
//let guestArr : string [] = ["Mehwish","Waniya","Kainat"];
//guestArr.map((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));
//task 15
let guestArr = ["Mehwish", "Waniya", "Kainat"];
let canNotAttend = "Mehwish";
//console.log(canNotAttend + " " + "can not attend the dinner")
let newGuest = "Hadiya";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
guestArr.map((items) => console.log(`Dear ${items},you are invited to the dinner.`));
