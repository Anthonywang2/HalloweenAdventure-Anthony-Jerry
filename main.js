// VARIABLES
let Q1
let Q2
let Q2A1

// MAIN
function main() {
    startGame();
    secondChoice();
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
        Q2A1 = prompt("Do you eat this mouthwatering bucket of chicken? Choices are 'yes' or 'no'.")
        if (Q2A1=="yes") {
            alert("You die. Hahahaha evan stewart spiked the chicken with some drugs.")
        }
        if (Q2A1=="no") {
            alert("Good job on not eating it. Evan stewart spiked it with drugs.")
        }
    }
}