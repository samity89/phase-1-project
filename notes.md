## PROJECT REQUIREMENTS
* runs on a single page using frontend of JS, HTML, CSS
* atleast 3 unique event listeners
* project most contain atleast 1 iteration over an array
* keep code DRY, ie using helper functions to streamline
* blog post pertaining phase-1, must be atleast 750 words and contain a block of code

### step 1: come up with an idea
* MULTIVERSUS IRONMAN RANDOMIZER

### step 2: working on the overview
* Ironman challenges players to win all characters before losing a single game
* will present the character select screen as character portraits
* users click a randomize button to be presented with the next character to play, that character portrait can be clicked by the user to grey out/dim/remove the portrait
* characters selected by randomize button cannot be repeated until the user clicks a reset button, restoring character portraits to their original state
* dropdown menu to change theme of page

### step 3: list all the features
* DOMContentLoaded event listener
* Click event listener on random button to return a character from db.json, character is then removed from pool of randomizer and pictures
* Click event listener reset button for when player loses and needs to restart challenge.  Character portraits are returned to the pool for randomizer and pictures
* Change event listener on dropdown menu for switch from light to dark mode