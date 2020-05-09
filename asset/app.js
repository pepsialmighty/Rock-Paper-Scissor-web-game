const game = () => {
  let pScore = 0;
  let cScore = 0;

  //start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll(".option button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    //computer option
    const computerOptions = ["rock", "paper", "scissor"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //the computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          // here is wher we call compareHand
          compareHand(this.textContent, computerChoice);

          //update images
          playerHand.src = `./asset/${this.textContent}.png`;
          computerHand.src = `./asset/${computerChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHand = (playerChoice, computerChoice) => {
    //update text
    const winner = document.querySelector(".winner");
    if (computerChoice === playerChoice) {
      winner.textContent = "it is a tie";
      return;
    }
    //check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissor") {
        winner.textContent = "player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "computer win";
        cScore++;
        updateScore();
        return;
      }
    }

    //check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissor") {
        winner.textContent = "computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "player win";
        pScore++;
        updateScore();
        return;
      }
    }

    //check for scissor
    if (playerChoice === "scissor") {
      if (computerChoice === "rock") {
        winner.textContent = "computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "player win";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //call all inner function
  startGame();
  playMatch();
};

//start the game function
game();
