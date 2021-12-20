/*This fucntion picks number from 0-3 and then value rpc is assigned*/
function computerPlay () {
    let randomNumber = Math.random() * 3
    let computerPick
    if (randomNumber <= 1){
        computerPick = "Rock"
    }else if (randomNumber <= 2){
        computerPick = "Paper"
    }else {
        computerPick = "Scissors"
    }
    return computerPick
}

function playerPlay () {
    let playerPick = prompt("Rock-Paper-Scissors")
    return playerPick
}

/* es aris ertad*/
let playerSelection = playerPlay;
let computerSelection = computerPlay;
let state = ""

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
if (playerSelection === computerSelection){
    state = "tie"
    return `${playerSelection} - ${computerSelection}, It is a tie!`
    }


if (playerSelection === "rock"){
    if (computerSelection === "paper"){
    state = "computer"
    return `${playerSelection} - ${computerSelection}, ${computerSelection} won!`
    }else{
    state = "player"
    return `${playerSelection} - ${computerSelection}, ${playerSelection} won!`
    }
}

if (playerSelection === "paper"){
    if (computerSelection === "rock"){
    state = "player"
    return `${playerSelection} - ${computerSelection}, ${playerSelection} won!`
    }else{
    state = "computer"
    return `${playerSelection} - ${computerSelection}, ${computerSelection} won!`
    }
}

if (playerSelection === "scissors"){
    if (computerSelection === "rock"){
    state = "computer"
    return `${playerSelection} - ${computerSelection}, ${computerSelection} won!`
    }else{
    state = "player"
    return `${playerSelection} - ${computerSelection}, ${playerSelection} won!`
    }
}

}

// console.log(playRound(playerPlay(), computerPlay()))

/* New Function called game Use the previous function
 inside of this one to play a 5 round game that keeps
  score and reports a winner or loser at the end.*/
let computer = 0
let player = 0
function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(playerPlay(), computerPlay()))
        if (state === "computer"){
            computer += 1
        } else if (state === "tie"){
            computer += 1
            player += 1
        } else if (state ==="player"){
            player += 1
        }
    }
console.log(`Computer ${computer} vs Player ${player}`)
if (computer > player){
    console.log("Computer won!")
}else if (computer === player) {
    console.log("It is a tie!")
}else {
    console.log("Player won")
}
}

game()