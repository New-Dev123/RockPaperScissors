
const choices = ['rock','paper','scissors']

function computerPlay(computer) {
    let compPick = Math.floor(Math.random() * choices.length); 
// math.random gives random number between 0-1, (1 exclusive)
// length of the array is 3. Length is always n+1 the highest index in the array. 
// math.floor rounds down
// math.floor(0<n<3). So n will be between 0 and 2, which are the index's of the array.
    return choices[compPick]
}

// let computerSelection = computerPlay(choices) // computers pick

// let playerSelection = prompt("Rock, Paper, or Scissors?")  //asks player to pick
// playerSelection = playerSelection.toLowerCase();
//console.log(playerSelection)



function playRound(p,c){
//console.log(p)
//console.log(c)

//let win = 'You win ' + p + ' beats ' + c
//let loss = 'You lose ' + c + ' beats ' + p
//let tie = 'You tied ' + p + ' equals ' + c

    while(p == 'rock') {
        if(c == 'rock'){
            console.log('You tied ' + p + ' equals ' + c)
            return ('tie')
        } else if(c== 'paper'){
            console.log('You lose ' + c + ' beats ' + p)
            return ('loss')
        } else{
            console.log('You win ' + p + ' beats ' + c)
            return ('win')
        }
        break;
    }

    while(p == 'paper') {
        if(c == 'rock'){
            console.log('You win ' + p + ' beats ' + c)
            return ('win')
        } else if(c== 'paper'){
            console.log('You tied ' + p + ' equals ' + c)
            return ('tie')
        } else{
            console.log('You lose ' + c + ' beats ' + p)
            return ('loss')
        }
        break;
    }

    while(p == 'scissors') {
        if(c == 'rock'){
            console.log('You lose ' + c + ' beats ' + p)
            return ('loss')
        } else if(c== 'paper'){
            console.log('You win ' + p + ' beats ' + c)
            return ('win')
        } else{
            console.log('You tied ' + p + ' equals ' + c)
            return ('tie')
        }
        break;
    }
}

function game(){
    //console.log (playRound(playerSelection, computerSelection))
let wins = 0
let losses = 0
let ties = 0
let value
    for (let i = 0; i < 5; i++){
        let computerSelection = computerPlay(choices)
        let playerSelection = prompt("Rock, Paper, or Scissors?")
        playerSelection = playerSelection.toLowerCase();
        value = playRound(playerSelection, computerSelection)
        //console.log (value)

        if (value === 'win'){
            wins += 1;
        }else if (value === 'loss'){
            losses += 1;
        }else {
            ties += 1;
        }
    }

    if (wins > losses){
        console.log('You Win!')
    }else if (wins < losses){
        console.log('You Lose!')
    }else {
        console.log('Tie Game!')
    }

console.log ('Total Wins = ' + wins)
console.log ('Total Losses = ' + losses)
console.log ('Total Ties = ' + ties)
}



// console.log (playRound(playerSelection, computerSelection))
game ()