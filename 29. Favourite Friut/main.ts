//Task you really like bananas
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
//if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
 //If the fruit is in your array, the if block should print a statement, such as You really like bananas!

  let favourite_friuts :string [] = ["kivi","orange","apples","berry","peach"]

  if (favourite_friuts.includes("kivi")) {
  console.log("kivi")

 }
  if (favourite_friuts.includes("apples")){
  console.log("apple")    
 }

if(favourite_friuts.includes("orange")){
 console.log("orange")   
}
if(favourite_friuts.includes("berry")){
    console.log("you really like bananas")   
   }
   if(favourite_friuts.includes("peach")){
    console.log("you really like banana")   
   }
   
  