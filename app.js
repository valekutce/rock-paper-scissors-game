window.addEventListener('DOMContentLoaded', function() {
    alert('Нажмите Ок если хотите сыграть с компьютером в Камень Ножницы Бумага');

    let gameStart = document.querySelector('.game__start'),
    newGame = document.querySelector('.new__game'),
    gameDisplay = document.querySelectorAll('.game__display'),
    gameResult = document.querySelector('.game__result'),
    gameSelectClick = document.querySelectorAll('.game__select_click'),
    gameYouDisplay = document.querySelector('.game__you-display'),
    gameCompDisplay = document.querySelector('.game__comp-display'),
    imgFinger = document.querySelector('.finger');
    let playerScore = 0;
    let compScore = 0;

    window.addEventListener('load', function() {
        gameStart.style.display = 'none';
    });

    newGame.addEventListener('click', startGame);

    function startGame(event) {
        if (newGame.textContent == 'Новая игра') {
            newGame.textContent = 'Игра началась!';
            imgFinger.style.display = 'none';
        }
        gameDisplay.forEach((gameDisplays) => {
            gameDisplays.textContent = '';
        });
        gameResult.textContent = '';
        gameResult.style.color = '#ffffff';
        playerScore = 0;
        compScore = 0;
    }

    // Выбор кнопки камень ножницы или бумага
    gameSelectClick.forEach((gameSelectClick, gameSelectClickIndex) => {
        gameSelectClick.addEventListener('click', playerSelection); // Выбор человека
        gameSelectClick.addEventListener('click', endGame); // Конец игры
    });

    function playerSelection(event,randomNumber = Math.random()*(2)) {
            if (newGame.textContent == 'Новая игра') {
                newGame.classList.add('button__active');
                imgFinger.style.display = 'inline-block';
            } else if (newGame.textContent == 'Игра началась!') {
                console.log(Math.round(randomNumber));
            if (event.target.textContent == 'Камень' && Math.round(randomNumber) === 0) {
                gameResult.textContent = 'У вас камень на камень, а это ничья';
            } else if (event.target.textContent == 'Камень' && Math.round(randomNumber) === 1) {
                gameResult.textContent = 'Вам 1 бал, камень разбивает ножницы';
                gameYouDisplay.textContent = ++playerScore;
            } else if (event.target.textContent == 'Камень' && Math.round(randomNumber) === 2) {
                gameResult.textContent = 'Бал компьютеру, как ни странно камень проигрывает бумаге!';
                gameCompDisplay.textContent = ++compScore;
            } else if (event.target.textContent == 'Ножницы' && Math.round(randomNumber) === 0) {
                gameResult.textContent = 'Бал компьютеру, ножницы проигрывают камню!';
                gameCompDisplay.textContent = ++compScore;
            } else if (event.target.textContent == 'Ножницы' && Math.round(randomNumber) === 1) {
                gameResult.textContent = 'Ножницы на ножницы - это ничья!';
            } else if (event.target.textContent == 'Ножницы' && Math.round(randomNumber) === 2) {
                gameResult.textContent = 'Вам бал, бумага не устоит под ножницами!';
                gameYouDisplay.textContent = ++playerScore;
            } else if (event.target.textContent == 'Бумага' && Math.round(randomNumber) === 0) {
                gameResult.textContent = 'У вас +1 бал, бумага круче камня, в этой игре)';
                gameYouDisplay.textContent = ++playerScore;
            } else if (event.target.textContent == 'Бумага' && Math.round(randomNumber) === 1) {
                gameResult.textContent = 'Бал компьютеру, у компьютера ножницы, которые разрезают бумагу!';
                gameCompDisplay.textContent = ++compScore;
            } else if (event.target.textContent == 'Бумага' && Math.round(randomNumber) === 2) {
                gameResult.textContent = 'Бумага на бумагу, это значит ничья!';
            }
        }
    }

   function endGame() {
       if (gameYouDisplay.textContent == 5) {
           setTimeout(function(){
                gameResult.textContent = 'Поздравляю вас, вы победитель!!!';
                gameResult.style.color = 'green';
                newGame.textContent = 'Новая игра';
           }, 1000);
       } else if (gameCompDisplay.textContent == 5) {
            setTimeout(function(){
                gameResult.textContent = 'Увы, на этот раз машина оказалась сильнее, вы проиграли!!!';
                gameResult.style.color = 'red';
                newGame.textContent = 'Новая игра';
            }, 1000);
       }
   }


});