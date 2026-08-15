let affection = 0;

const story = [

{
    name:"Narrator",
    text:"A warm spring breeze drifts through the academy gates.",

    choices:[
        {
            text:"Enter the school",
            affection:0,
            next:1
        }
    ]
},

{
    name:"Narrator",
    text:"Someone bumps into you and drops their books.",

    choices:[
        {
            text:"Help pick them up",
            affection:5,
            next:2
        },

        {
            text:"Apologize",
            affection:2,
            next:3
        }
    ]
},

{
    name:"Aster",
    text:"T-thank you...",

    choices:[]
},

{
    name:"Aster",
    text:"Oh! It's okay!",

    choices:[]
}

];

let current = 0;

function typeText(text){

    let i = 0;

    const dialogue =
        document.getElementById("dialogue");

    dialogue.textContent = "";

    const interval = setInterval(()=>{

        dialogue.textContent += text.charAt(i);

        i++;

        if(i >= text.length){
            clearInterval(interval);
        }

    },25);
}

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

    scene.choices.forEach(choice=>{

        const btn =
            document.createElement("button");

        btn.textContent =
            choice.text;

        btn.onclick = ()=>{

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

        choices.appendChild(btn);

    });

}

renderScene();

setInterval(()=>{

    const petal =
        document.createElement("div");

    petal.className =
        "petal";

    petal.innerHTML =
        "🌸";

    petal.style.left =
        Math.random()*100 + "vw";

    petal.style.animationDuration =
        5 + Math.random()*5 + "s";

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },10000);

},500);
