// Possible choices
const choices = ['rock', 'paper', 'scissors'];

// Draw a random value from an array
function computerPlay(options) {
    if (Array.isArray(options)) {
        return options[Math.floor(Math.random() * options.length)];
    } else {
        return "Please use an array as input.";
    }
}

// Determine outcome for comparisons
function getWinner(ego_choice, alter_choice) {
    let outcome;

    if (ego_choice === alter_choice) {
        outcome = "tie";
    } else if (ego_choice === "rock" && alter_choice === "scissors" || ego_choice === "paper" && alter_choice === "rock" || ego_choice === "scissors" && alter_choice === "paper") {
        outcome = "win";
    } else {
        outcome = "lose"
    }

    return outcome;
}

// User makes a play
function userPlay(e) {
    return e.target.getAttribute("value").toLowerCase();
}

// Play one round of Rock Paper Scissors
function playRound(playerSelection = userPlay(choices), computerSelection = computerPlay(choices)) {
    let result = getWinner(playerSelection, computerSelection);
    let verb;

    if (result === "tie") {
        verb = "ties with";
    } else if (result === "win") {
        verb = "beats";
    } else {
        verb = "is beaten by";
    }

    return `You ${result}: ${playerSelection} ${verb} ${computerSelection}!`;

}

// Play a full game, with multiple rounds
function game(rounds) {
    const results = [];
    let gc; //general classification - like in cycling

    for (let round = 0; round < rounds; round++) {
        results.push(playRound());
        console.log(results[round]);
    }

    let wins = results.filter(x => x.includes("win")).length;
    let losses = results.filter(x => x.includes("lose")).length;
    
    if (wins == losses) {
        gc = "No winner!";
    } else if (wins > losses) {
        gc = `You win, with ${wins} game(s) won out of ${rounds}.`;
    } else {
        gc = `You lose, with ${losses} game(s) lost out of ${rounds}.`;
    }

    console.log(gc);
}

// Play a game with five rounds
// game(5);

const buttons = Array.from(document.querySelectorAll('.rps'));
buttons.forEach(btn => btn.addEventListener('click', userPlay));