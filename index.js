let fighterArray = []
console.log(fighterArray);
document.addEventListener("DOMContentLoaded", () => {
    alert("RNGesus will... CHOOSE YOUR FIGHTER!!")
    grabFighters()
    addFightersToArray()
    document.querySelector("#reset").addEventListener("click", () => {
        document.getElementById("character-select").innerHTML = "";
        fighterArray.length = 0
        grabFighters()
        addFightersToArray()
    })
    document.querySelector("#randomize").addEventListener("click", () => {
        randomFighter()
        console.log("random")
    })
    document.getElementById("theme-dropdown").addEventListener("change", (e) => {
        if (e.target.value === "dark") {
            document.querySelector("link[href='light.css']").href = "dark.css";
        }
        else {
            document.querySelector("link[href='dark.css']").href = "light.css"
        }
        }
    )
    }    
);

function grabFighters() {
    fetch("http://localhost:3000/fighters")
    .then(response => response.json())
    .then(data => data.forEach(fighter => showFighters(fighter)))
};

function addFightersToArray() {
    fetch("http://localhost:3000/fighters")
    .then(response => response.json())
    .then(data => data.forEach(fighter => fighterArray.push(fighter.id)))
}; 

function showFighters(fighter) {
    const fighterContainer = document.getElementById("character-select");
    const div = document.createElement("div");
    div.classList.add("card");
    const h2 = document.createElement("h2");
    h2.textContent = fighter.name;
    const img = document.createElement("img")
    img.src = fighter.image;
    div.append(h2, img);
    fighterContainer.append(div);
};

// function randomFighterInt(min, max) {
//     min = Math.ceil(1);
//     max = Math.floor(19);
//     return Math.floor(Math.random() * (19 - 1 + 1)) + 1;
// }

// function randomFighter() {
//     var chosenFighter = fighterArray.random()
//     fighterArray.remove(chosenFighter)
//     console.log(fighterArray)
// }