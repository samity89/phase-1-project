/*
Event Listener for DOMContentLoaded

Fetch request (get) to access db.json
Write function to display fighters as cards from db.json in a div container "character-select"
Extract IDs from json to an array randomizer function iterates over (maybe using map)
    this function will check if randomly rolled number from 1-19 is present in the array


Event listener on a randomize button (click) to return a random character name, and remove the character from the pool
Event listener on a reset button (click) that restores all characters to the pool
Event listener of dropdown menu (change) that changes page from light to dark mode
*/

let fighterArray = []
const resetButton = document.getElementById("reset")
const randomButton = document.getElementById("randomize")
const dropdownThemes = document.getElementById("theme-dropdown")

document.addEventListener("DOMContentLoaded", (grabFighters))

function grabFighters() {
    const fighterContainer = document.getElementById("character-select")
    fetch("http://localhost:3000/fighters")
    .then(response => response.json())
    .then(response => console.log(response[0].id, "response"))
}