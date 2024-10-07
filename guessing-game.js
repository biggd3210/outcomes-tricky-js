function guessingGame() {
    const randInt = Math.floor(Math.random() * 100);
    let nOfGuesses = 0;
    let won = false
    return function checkNum(guess) {
        if ( won ) {
            return "The game is over, you already won!"
        }
        nOfGuesses++;
        if ( guess === randInt ) {
            won = true;
            const guess = nOfGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${randInt} in ${nOfGuesses} ${guess}.`
        } else if ( guess < randInt ) {
            return `${guess} is too low!`
        } else if ( guess > randInt ) {
            return `${guess} is too high!`
        }
    }
}

module.exports = { guessingGame };
