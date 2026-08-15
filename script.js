/* =================================
   PINK PETALS
   Paper Lantern Studios
================================= */

let affection = 0;
let current = 0;
let typing = false;
let typingTimer;


/* =================================
   STORY
================================= */

const story = [

    {
        name: "Narrator",

        text:
        "A warm spring breeze drifts through the academy gates.",

        choices: [

            {
                text: "Enter the school",
                affection: 0,
                next: 1
            }

        ]
    },


    {
        name: "Narrator",

        text:
        "Someone suddenly bumps into you and drops their books everywhere.",

        choices: [

            {
                text: "Help pick them up",
                affection: 5,
                next: 2
            },

            {
                text: "Apologize",
                affection: 2,
                next: 3
            }

        ]
    },


    {
        name: "Aster",

        text:
        "T-thank you... I thought I was going to be late.",

        choices: [

            {
                text: "You're welcome.",
                affection: 3,
                next: 4
            },

            {
                text: "Are you okay?",
                affection: 5,
                next: 4
            }

        ]
    },


    {
        name: "Aster",

        text:
        "Oh! It's okay! I probably should've been watching where I was going.",

        choices: [

            {
                text: "Don't worry about it.",
                affection: 3,
                next: 4
            }

        ]
    },


    {
        name: "Aster",

        text:
        "I'm Aster, by the way. It's nice to meet you.",

        choices: [

            {
                text: "Nice to meet you too.",
                affection: 5,
                next: 5
            },

            {
                text: "I like your name.",
                affection: 8,
                next: 5
            }

        ]
    },


    {
        name: "Narrator",

        text:
        "The bell rings. Your first day at the academy has officially begun.",

        choices: [

            {
                text: "Go to class",
                affection: 0,
                next: 6
            }

        ]
    },


    {
        name: "Narrator",

        text:
        "You wonder what the rest of the year will bring...",

        choices: []

    }

];


/* =================================
   TYPEWRITER
================================= */

function typeText(text){

    clearInterval(typingTimer);

    const dialogue =
        document.getElementById("dialogue");

    dialogue.textContent = "";

    let i = 0;

    typing = true;

    typingTimer = setInterval(() => {

        dialogue.textContent += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(typingTimer);

            typing = false;
        }

    }, 25);
}


/* =================================
   RENDER SCENE
================================= */

function renderScene(){

    const scene =
        story[current];

    document.getElementById("name")
        .textContent =
        scene.name;

    typeText(scene.text);


    const choices =
        document.getElementById("choices");

    choices.innerHTML = "";


    scene.choices.forEach(choice => {

        const button =
            document.createElement("button");

        button.textContent =
            choice.text;


        button.onclick = () => {

            affection +=
                choice.affection || 0;


            document.getElementById(
                "affection"
            ).textContent =
                affection;


            current =
                choice.next;


            renderScene();

        };


        choices.appendChild(button);

    });

}


/* =================================
   CHERRY BLOSSOM PETALS
================================= */

function createPetal(){

    const petal =
        document.createElement("div");

    petal.className = "petal";

    petal.textContent = "🌸";


    petal.style.left =
        Math.random() * 100 + "vw";


    petal.style.fontSize =
        (14 + Math.random() * 14) + "px";


    petal.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    document
        .getElementById("game")
        .appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, 11000);

}


/* =================================
   START PETAL SYSTEM
================================= */

setInterval(createPetal, 450);


/* =================================
   START GAME
================================= */

renderScene();
