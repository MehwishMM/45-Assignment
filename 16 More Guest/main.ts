// task 16
//More Guests: You just found a bigger dinner table, so now more space is available.
 //Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guestArr : string[] = ["Mehwish","Waniya","Kainat","Maryam"];

let canNotAttend :string ="Mehwish"

let newGuest : string = "Hadiya"

guestArr[guestArr.indexOf(canNotAttend)]= newGuest;
//console.log(guestArr)

//guestArr.map((items) =>
//console.log(`Dear ${items},I found a bigger dinner table so I am invited more poeples. `)
//);

//Part 2 
let guestBeg :string ="Aisha"
guestArr.unshift(guestBeg);
//console.log(guestArr)

//part 3
let middleGuest :string ="Fatima"
let middleIndex =guestArr.length/3
guestArr.splice(middleIndex,3,middleGuest)
//console.log(guestArr)


//part 4 
//guestArr.push("Zeeshan")
//console.log(guestArr)

//part 5
guestArr.map((items) =>
console.log(` Dear ${items}, you are invited in the more poeple list on dinner`));