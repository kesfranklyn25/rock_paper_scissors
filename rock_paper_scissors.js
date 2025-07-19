score = 0;
choices = ['Rock', 'Paper', 'Scissors'];
function random_choice(list){
    return list[Math.floor(Math.random() * list.length)];
}
computer_choice = random_choice(choices);
// console.log(computer_choice);
const btnrock = document.getElementById('rock');
const btnpaper = document.getElementById('paper');
const btnscissors = document.getElementById('Scissors');
btnreset = document.getElementById('reset');

// Rock condition
if (btnrock) {
    btnrock.addEventListener('click', () => {
        const computer_choice = random_choice(choices);
        const user_choice = 'Rock'

        if (computer_choice  === user_choice ) {
            score = score;
            alert(`It's a tie! You both chose ${user_choice}`);

        } 
        if(computer_choice === 'Scissors'){
            score++;
            alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}, You win! ${score}`);
        }
        if(computer_choice === 'Paper'){
            score = score;
            alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}, You lose! ${score}`);
        }


    });
}
// Paper Condition

if (btnpaper) {
    btnpaper.addEventListener('click', () => {
        const computer_choice = random_choice(choices);
        const user_choice = 'Paper'

        if (computer_choice  === user_choice ) {
            score = score;
            alert(`It's a tie! You both chose ${user_choice}`);

        } 
        if(computer_choice === 'Scissors'){
            score = score;
            alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}, You lose! ${score}`);
        }
        if(computer_choice === 'Rock'){
            score++;
            alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}, You win! ${score}`);
        }
    });
}

// Scissor Condition

if (btnscissors) {
    btnscissors.addEventListener('click', () => {
        const computer_choice = random_choice(choices);
        const user_choice = 'Scissors'

        if (computer_choice  === user_choice ) {
            score = score;
            alert(`It's a tie! You both chose ${user_choice}`);

        } 
        if(computer_choice === 'Paper'){
            score++;
            alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}, You win! ${score}`);
        }
        if(computer_choice === 'Rock'){
            score = score;
            alert(`Your choice - ${user_choice}, Computer choice - ${computer_choice}, You loss! ${score}`);
        }

    });
}

// Reset button
if (btnreset) {
    btnreset.addEventListener('click', () => {
        score = 0;
        console.clear();
    });
}