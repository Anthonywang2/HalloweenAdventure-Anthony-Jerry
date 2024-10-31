// VARIABLES
let Q1
let Q2
let kitchenChoice
// MAIN
function main() {
    startGame();
    secondChoice();
    kitchenEat();
}
main();

// FUNCTIONS
function startGame() {
    Q1 = prompt("Hello Little Buddy... what is your name...")
    alert(`Welcome ${Q1}, to the Haunted Kentucky Fried Chicken!`)
    alert("Answers are case sensitive and must be all lower case or else game will not function")
    Q2 = prompt("You enter the KFC. You see a light glowing from the kitchen... but the storage door is open. Which one do you pick? Choices are 'kitchen' or 'storage'")
    }

function secondChoice() {
    if (Q2=="kitchen"){
        alert("You enter the kitchen and find a somewhat fresh bucket of KFC.")
        let kitchenChoice = prompt("Do you eat the chicken? Answers are: 'yes' or 'no'")
    } else {
        alert("You enter the storage room and")
    }
}

function kitchenEat() {
    if (kitchenChoice==="yes"){
        alert("This chicken was spiked by Evan Stewart who slapped some good stuff in it. You die, little fool. (Reload the page to restart)")
    } else {
        alert("Good job for not eating the chicken.")
    }
}