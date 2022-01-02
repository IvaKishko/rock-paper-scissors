let playerSelection = '';
let computerSelection = computerPlay;
let state = ""

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      playerSelection = button.id
      game()
    });
  });



/*This fucntion picks number from 0-3 and then value rpc is assigned*/
function computerPlay () {
    let randomNumber = Math.random() * 3
    let computerPick
    if (randomNumber <= 1){
        computerPick = "rock"
    }else if (randomNumber <= 2){
        computerPick = "paper"
    }else {
        computerPick = "scissors"
    }
    return computerPick
}

function playerPlay () {
    let playerPick = prompt("Rock-Paper-Scissors")
    return playerPick
}

/* es aris ertad*/


function playRound (playerSelection, computerPlay) {
    playerSelection = playerSelection
    console.log(playerSelection);
    computerSelection = computerPlay();
    console.log(computerSelection);
    let x = ''
if (playerSelection === computerSelection){
    state = "tie"
    announcements.textContent = `${playerSelection} - ${computerSelection}, It is a tie!`
    return
    }


if (playerSelection === "rock"){
    if (computerSelection === "paper"){
    state = "computer"
    announcements.textContent = `${computerSelection} - ${playerSelection}, ${computerSelection} won!`
    return
    }else{
    state = "player"
    announcements.textContent = `${computerSelection} - ${playerSelection}, ${playerSelection} won!`
    return
    }
}

if (playerSelection === "paper"){
    if (computerSelection === "rock"){
    state = "player"
    announcements.textContent = `${computerSelection} - ${playerSelection}, ${playerSelection} won!`
    return
    }else{
    state = "computer"
    announcements.textContent = `${computerSelection} - ${playerSelection}, ${computerSelection} won!`
    return
    }
}

if (playerSelection === "scissors"){
    if (computerSelection === "rock"){
    state = "computer"
    announcements.textContent = `${computerSelection} - ${playerSelection}, ${computerSelection} won!`
    return
    }else{
    state = "player"
    announcements.textContent = `${computerSelection} - ${playerSelection}, ${playerSelection} won!`
    return  
    }
}

}

// console.log(playRound(playerPlay(), computerPlay()))

const announcements = document.querySelector('.announcement')                     
const computerResults = document.querySelector('#notPlayer')
const playerResults = document.querySelector('#player')
const finalAnnoucenents = document.querySelector('.finalAnnouncement')
/* New Function called game Use the previous function
 inside of this one to play a 5 round game that keeps
  score and reports a winner or loser at the end.*/
let computer = 0
let player = 0
function game(){
    for (let i = 0; i < 1; i++){
        playRound(playerSelection, computerPlay);
        if (state === "computer"){
            computer += 1
            computerResults.textContent = `Computer - ${computer}`
        } else if (state === "tie"){
            computer += 1
            player += 1
            computerResults.textContent = `Computer - ${computer}`
            playerResults.textContent = `Player - ${player}`
        } else if (state ==="player"){
            player += 1
            playerResults.textContent = `Player - ${player}`
        }
    }
    
    if(computer === 5 & player ===5){
        finalAnnoucenents.textContent = `The winner is friendship!!! ${computer} - ${player}`
        announcements.textContent = ''
        computer = 0
        player = 0
        computerResults.textContent = `Computer - ${computer}`
        playerResults.textContent = `Player - ${player}`
        
    } else if(computer === 5){
        finalAnnoucenents.textContent = `The winner is Computer!!! ${computer} - ${player}`
        announcements.textContent = ''
        computer = 0
        player = 0
        computerResults.textContent = `Computer - ${computer}`
        playerResults.textContent = `Player - ${player}`
    } else if(player === 5){
        finalAnnoucenents.textContent = `The winner is Player!!! ${computer} - ${player}`
        announcements.textContent = ''
        computer = 0
        player = 0
        computerResults.textContent = `Computer - ${computer}`
        playerResults.textContent = `Player - ${player}`    
    } else {
        finalAnnoucenents.textContent = "And the winner is..."
    }
return
}