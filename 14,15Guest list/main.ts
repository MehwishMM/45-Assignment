//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 //Make a list that includes at least three people you’d like to invite to dinner.
  //Then use your list to print a message to each person, inviting them to dinner.

//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//task 14

//let guestArr : string [] = ["Mehwish","Waniya","Kainat"];

//guestArr.map((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));

//task 15
let guestArr : string [] = ["Mehwish","Waniya","Kainat"]
let canNotAttend : string = "Mehwish"
console.log(canNotAttend + " " + "can not attend the dinner")

let newGuest : string ="Hadiya"
guestArr [guestArr .indexOf(canNotAttend)] =newGuest;

console.log(guestArr)

guestArr.map((items) =>
console.log(`Dear ${items},you are invited to the dinner.`))
