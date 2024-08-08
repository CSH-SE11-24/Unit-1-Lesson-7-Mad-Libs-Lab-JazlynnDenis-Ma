// Console log a welcome message with instructions to mad libs
console.log("Welcome to Mad Libs! Enter the following information to create your own story.")


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let user = prompt ("enter an adjective")
let user2 = prompt("enter an adjective")
let user3 = prompt("enter a tyoe of bird")
let user4= prompt ("enter a room in a house")
  
// Create an array that stores the values the user entered
let madLib = []
// Push the user inputs to the array
madLib.push(user,user2, user3, user4)

// Console log the story with the array values passed into the blanks
console.log("It was a "+ user+ "cold December day. I woke up to the " + user2 + "smell of" + user3 + "roasting in the " + user4)
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive








