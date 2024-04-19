"use strict";
// task 17
//initial list of guests
let guests = ["Ali", "Bilal", "Carry", "Dawood", "Hamza"];
// informing that only two can be invited
//console.log("Due to limited space, only two poeple can be invited for dinner.");
// // Removing guests until only two names remain
//while(guests.length >2 ){
//  const removedGuest =guests.pop();//remove the list guest from the list
//console.log(`sorry, ${removedGuest},you are no longer invited to dinner.`);
//}
// // printing invitations to the remaining two guests
//guests.forEach((guest) => {
//console.log(`Dear ${guest}, you are still invited to dinner.`);
//});
// // Removing the last two names from the list
guests.pop();
guests.pop();
// // printing the final list to confirm it's empty
console.log("final guest list:", guests);
