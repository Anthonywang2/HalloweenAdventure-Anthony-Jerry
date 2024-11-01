// VARIABLES
let Q1;
let Q2;
let Q2A1;
let afterKFCBucket;
let chooseWeapon;
let ramHellcat;
let ramLeftLeg;
let ramRightLeg;
let finisher;

// MAIN
function main() {
    startGame();
    secondChoice();
    bossFightIntro();
    bossFight();
    hellcatRamLocation();
    hellcatSecondRam();
    finishHim();
    bazinga();
}
main();

// STARTING FUNCTION
function startGame() {
    Q1 = prompt("Hello Little Buddy... what is your name...")
    alert(`Welcome ${Q1}, to the Haunted Kentucky Fried Chicken!`)
    alert("Answers are case sensitive and must be all lower case or else game will not function")
    Q2 = prompt("You enter the KFC. You see a light glowing from the kitchen... but the storage door is open. Which one do you pick? Choices are 'kitchen' or 'storage'")
    }

// KITCHEN PATH FUNCTIONS
function secondChoice() {
    if (Q2=="kitchen"){
        alert("You enter the kitchen and find a somewhat fresh bucket of KFC.")
        Q2A1 = prompt("Do you eat this mouthwatering bucket of chicken? Choices are 'yes' or 'no'.")
        if (Q2A1=="yes") {
            alert("You die. Hahahaha evan stewart spiked the chicken with some drugs.")
        }
        if (Q2A1=="no") {
            alert("Good job on not eating it. Evan stewart spiked it with drugs.")
            afterKFCBucket = prompt("Alright, do you investigate the light at the back of the kitchen? Answer 'yes' or 'no'")
        }
    }
}

function bossFightIntro() {
    if (Q2A1 == "no") {
        if (afterKFCBucket == "yes") {
            alert("You enter the kitchen's back end and see Evan Stewart, the rotund, densely-packed, spherical King of KFC himself.")
            chooseWeapon = prompt("To kill such a large beast, you see a russian made nerf gun AK in the left corner of the room, and a pristine Dodge Hellcat in the right of the room. Which one do you take to defeat Evan S? Answers must be 'ak' or 'hellcat'")
            }
        if (afterKFCBucket == "no") {
            alert("You died, because Evan Stewart don't like people who don't see the light.")
            } 
        }
}

function bossFight() {
    if (afterKFCBucket == "yes") {
        if (chooseWeapon == "ak") {
            alert("You pick up the Russian made AK and shoot some shots at the beast. Evan eats the shots because it's a nerf gun. You died.")
        }
        if (chooseWeapon == "hellcat") {
            alert("You enter the Dodge Hellcat, and prepare to ram Evan.")
            ramHellcat = prompt("You're in control of this powerful, pristine Dodge Hellcat. You get three choices to ram him, do you want to ram Evan's 'left leg', 'right leg', or shoot up a ramp and clock him in his 'head'?")
        }
    }
}

function hellcatRamLocation() {
    if (ramHellcat == "head") {
        alert("You thought ramming Evan's head would mean an easy kill. The KFC Beast snatches your little hellcat in midair, and crushes both you and the hellcat.")
    }
    if (ramHellcat == "left leg") {
        alert("Direct hit! You've crippled his left leg. Now, back up and choose another target.")
        ramLeftLeg = prompt("You've backed up once again. Now, where do you target? Choices are 'right leg' and 'body'.")
    }
    if (ramHellcat == "right leg") {
        alert("Good shot. His right leg is now a little injured. Time to back it up and choose another target to strike.")
        ramRightLeg = prompt("Now, time to strike either his left leg, or his body. Choose either 'left leg' or 'body'.")
    }
}

function hellcatSecondRam() {
    if (ramLeftLeg == "right leg") {
        alert("Both legs done. You've crippled the KFC beast evan.")
    }
    if (ramRightLeg == "left leg") {
        alert("Both legs done. You've crippled the KFC beast evan.")
    }
    if (ramRightLeg == "body") {
        alert("Musta forgot that Evan Stewart eats body shots for breakfast. Your hellcat has no effect on him. He stomps you flat.")
    }
    if (ramLeftLeg == "body") {
        alert("Musta forgot that Evan Stewart eats body shots for breakfast. Your hellcat has no effect on him. He stomps you flat.")
    }
}

function finishHim() {
    if (ramLeftLeg == "right leg") {
        alert("Finish him while he's on the ground.")
        finisher = prompt("Time to ram him straight on in the head and get rid of the KFC beast Evan Stewart forever! Do you 1. 'BAZINGA' him, or 2. 'BAZINGA' him?")
    }
    if (ramRightLeg == "left leg") {
        alert("Finish him while he's on the ground.")
        finisher = prompt("Time to ram him straight on in the head and get rid of the KFC beast Evan Stewart forever! Do you 1. 'BAZINGA' him, or 2. 'BAZINGA' him?")
    }
}

function bazinga() {
    if (finisher == "BAZINGA") {
        alert("You've finished off the KFC Man himself. Now all the chicken is yours! Thanks for playing the Halloweeen adventure!")
    }
}

