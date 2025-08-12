    // Game setup
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let turn = 1;
    const maxTurns = 10;

    // DOM elements
    const guessField = document.getElementById('guessField');
    const submitGuess = document.getElementById('submitGuess');
    const guesses = document.getElementById('guesses');
    const feedback = document.getElementById('feedback');
    const hint = document.getElementById('hint');
    const restartBtn = document.getElementById('restartBtn');

    function checkGuess() {
      const userGuess = Number(guessField.value);

      // Input validation
      if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "⚠️ Enter a number between 1 and 100!";
        feedback.style.color = "#e74c3c";
        return;
      }

      if (turn === 1) {
        guesses.textContent = '';
      }

      guesses.textContent += userGuess + ' ';

      if (userGuess === randomNumber) {
        feedback.textContent = '🎉 Correct! You nailed it!';
        feedback.style.color = '#2ecc71';
        hint.textContent = '';
        endGame();
      } else if (turn === maxTurns) {
        feedback.textContent = '💀 Game Over! The number was ' + randomNumber;
        feedback.style.color = '#e74c3c';
        hint.textContent = '';
        endGame();
      } else {
        feedback.textContent = '❌ Try Again!';
        feedback.style.color = '#e67e22';
        hint.textContent = userGuess < randomNumber ? '📉 Too low!' : '📈 Too high!';
      }

      turn++;
      guessField.value = '';
      guessField.focus();
    }

    function endGame() {
      guessField.disabled = true;
      submitGuess.disabled = true;
      restartBtn.classList.remove('hidden');
    }

    function resetGame() {
      turn = 1;
      randomNumber = Math.floor(Math.random() * 100) + 1;
      guessField.disabled = false;
      submitGuess.disabled = false;
      guessField.value = '';
      guesses.textContent = 'None';
      feedback.textContent = '';
      hint.textContent = '';
      restartBtn.classList.add('hidden');
      guessField.focus();
    }

    // Event Listeners
    submitGuess.addEventListener('click', checkGuess);
    restartBtn.addEventListener('click', resetGame);