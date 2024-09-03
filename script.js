// script.js
document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const dice = document.getElementById('dice');
    const resultDiv = document.getElementById('result');
    
    // Generate a random number between 1 and 6
    const roll = Math.floor(Math.random() * 6) + 1;
    
    // Update the dice display with the corresponding dice face emoji
    dice.textContent = getDiceFace(roll);
    
    // Update the result div with the result
    resultDiv.textContent = `You rolled a ${roll}`;
}

function getDiceFace(roll) {
    // Return the corresponding emoji for the dice roll
    switch (roll) {
        case 1: return '⚀';
        case 2: return '⚁';
        case 3: return '⚂';
        case 4: return '⚃';
        case 5: return '⚄';
        case 6: return '⚅';
        default: return '🎲'; // Default dice face
    }
}
