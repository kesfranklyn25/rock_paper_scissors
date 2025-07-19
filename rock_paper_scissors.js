let score = 0;
let win = 0;
let lose = 0;
let tie = 0;

const choices = ['Rock', 'Paper', 'Scissors'];

function random_choice(list) {
    return list[Math.floor(Math.random() * list.length)];
}

const btnrock = document.getElementById('rock');
const btnpaper = document.getElementById('paper');
const btnscissors = document.getElementById('Scissors');
const btnreset = document.getElementById('reset');

function playRound(user_choice) {
    if (lose > 5) {
        alert("Game over — you’ve already lost 5 rounds!");
        return;
    }

    const computer_choice = random_choice(choices);

    if (computer_choice === user_choice) {
        tie++;
        alert(`It's a tie! You both chose ${user_choice}`);
    } else if (
        (user_choice === 'Rock' && computer_choice === 'Scissors') ||
        (user_choice === 'Paper' && computer_choice === 'Rock') ||
        (user_choice === 'Scissors' && computer_choice === 'Paper')
    ) {
        win++;
        score++;
        alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}. You win! Score: ${score}`);
    } else {
        lose++;
        alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}. You lose! Score: ${score}`);
    }

    console.log(`Wins: ${win}  Losses: ${lose}  Ties: ${tie}`);
}

if (btnrock) {
    btnrock.addEventListener('click', () => playRound('Rock'));
}

if (btnpaper) {
    btnpaper.addEventListener('click', () => playRound('Paper'));
}

if (btnscissors) {
    btnscissors.addEventListener('click', () => playRound('Scissors'));
}

if (btnreset) {
    btnreset.addEventListener('click', () => {
        score = 0;
        win = 0;
        lose = 0;
        tie = 0;
        console.clear();
        alert("Game reset.");
    });
}



// score = 0;
// choices = ['Rock', 'Paper', 'Scissors'];
// function random_choice(list){
//     return list[Math.floor(Math.random() * list.length)];
// }
// computer_choice = random_choice(choices);
// // console.log(computer_choice);
// const btnrock = document.getElementById('rock');
// const btnpaper = document.getElementById('paper');
// const btnscissors = document.getElementById('Scissors');
// btnreset = document.getElementById('reset');
// lose = 0;
// win = 0;
// tie = 0

// // Rock condition
// if (btnrock) {
//     btnrock.addEventListener('click', () => {
//         const computer_choice = random_choice(choices);
//         const user_choice = 'Rock'

//         if (computer_choice  === user_choice ) {
//             score = score;
//             tie++;
//             alert(`It's a tie! You both chose ${user_choice}`);

//         } 
//         if(computer_choice === 'Scissors'){
//             score++;
//             win++;
//             alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}, You win! ${score}`);
//         }
//         if(computer_choice === 'Paper'){
//             score = score;
//             lose++
//             alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}, You lose! ${score}`);
//         }


//     });
// }
// // Paper Condition

// if (btnpaper) {
//     btnpaper.addEventListener('click', () => {
//         const computer_choice = random_choice(choices);
//         const user_choice = 'Paper'

//         if (computer_choice  === user_choice ) {
//             score = score;
//             tie++
//             alert(`It's a tie! You both chose ${user_choice}`);

//         } 
//         if(computer_choice === 'Scissors'){
//             score = score;
//             lose++
//             alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}, You lose! ${score}`);
//         }
//         if(computer_choice === 'Rock'){
//             score++;
//             win++
//             alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}, You win! ${score}`);
//         }
//     });
// }

// // Scissor Condition

// if (btnscissors) {
//     btnscissors.addEventListener('click', () => {
//         const computer_choice = random_choice(choices);
//         const user_choice = 'Scissors'

//         if (computer_choice  === user_choice ) {
//             score = score;
//             tie++
//             alert(`It's a tie! You both chose ${user_choice}`);

//         } 
//         if(computer_choice === 'Paper'){
//             score++;
//             win++;
//             alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}, You win! ${score}`);
//         }
//         if(computer_choice === 'Rock'){
//             score = score;
//             lose++
//             alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}, You lose! ${score}`);
//         }

//     });
// }
// console.log(`Win: ${win}  Loses: ${lose}  Ties: ${tie}`);
// // Reset button
// if (btnreset) {
//     btnreset.addEventListener('click', () => {
//         score = 0;
//         console.clear();
//     });
// }

