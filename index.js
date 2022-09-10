let fighterArray = []

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
        removeRandom(fighterArray)
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
    .then(data => data.forEach(fighter => fighterArray.push(fighter.name)))
}; 

function showFighters(fighter) {
    let fighterContainer = document.getElementById("character-select");
    const div = document.createElement("div");
    div.classList.add("card");
    const h2 = document.createElement("h2");
    h2.textContent = fighter.name;
    const img = document.createElement("img")
    img.src = fighter.image;
    div.append(h2, img);
    fighterContainer.append(div);
};

const removeRandom = (array) => {
    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    const selectedContainer = document.getElementById("selected-character")
    selectedContainer.innerHTML = ""
    if (array.length > 0) {
        const random = Math.floor(Math.random() * array.length);
        const chosenFighter = array.splice(random, 1)[0];
        console.log(chosenFighter);
        console.log(fighterArray);
        h3.innerText = chosenFighter
        div.append(h3)
        selectedContainer.append(div)
    }
    else {
        alert("Congratulations!  You did it!")
    }
}