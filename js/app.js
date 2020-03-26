let userScore = 0;
let compScore = 0;

const playBtn = document.querySelector('.play');
const intro = document.querySelector('.intro');
const match = document.querySelector('.match');
const score = document.querySelector('.score');

playBtn.addEventListener('click', () => {
  intro.classList.add('fadeOut');
  match.classList.add('fadeIn');
  score.classList.add('fadeIn');
});

const options = document.querySelectorAll('.options button');
const playerHand = document.querySelector('.p-hand');
const computerHand = document.querySelector('.c-hand');
const hands = document.querySelectorAll('.hands img');
const computerOptions = ['rock', 'paper', 'scissors'];

options.forEach(option => {
  option.addEventListener('click', function () {
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];

    setTimeout(() => {
      compareHands(this.textContent, computerChoice);
      playerHand.src = `./assets/${this.textContent}.png`;
      computerHand.src = `./assets/${computerChoice}.png`;
    });

    const updateScore = () => {
      const playerScore = document.querySelector('.user-score p');
      const computerScore = document.querySelector('.computer-score p');
      playerScore.textContent = userScore;
      computerScore.textContent = compScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
      const winner = document.querySelector('.match__title');

      if (playerChoice === computerChoice) {
        winner.textContent = 'Tie';
        return;
      }

      if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
          winner.textContent = 'Player Wins';
          userScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Computer Wins';
          compScore++;
          updateScore();
          return;
        }
      }

      if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
          winner.textContent = 'Computer Wins';
          compScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Player Wins';
          userScore++;
          updateScore();
          return;
        }
      }

      if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
          winner.textContent = 'Computer Wins';
          compScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Player Wins';
          userScore++;
          updateScore();
          return;
        }
      }
    };
  })
});