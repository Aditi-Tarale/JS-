# Projects related to DOM

## project link
[click here](https://dompracticeprojectvwn3jo9x-r1h1--5173--d4eba4a9.local-credentialless.webcontainer.io)

# Solution code

##project 1

```javascript
console.log("Aditi)
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    const id = event.target.id;

    switch (id) {
      case 'lavender':
        body.style.backgroundColor = event.target.id;
        break;
      case 'pink':
        body.style.backgroundColor = event.target.id;
        break;
      case 'lightblue':
        body.style.backgroundColor = event.target.id;
        break;
      case 'orange':
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});


```

## Project 2 solution

```
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span><br><span>Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}</span><br><span>Normal Range</span>`;
    } else {
      results.innerHTML = `<span>${bmi}</span><br><span>Overweight</span>`;
    }
  }
});
```

## Project 3 Solution

``` JavaScript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4 Solution
```
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number');
  } else if (guess > 100) {
    alert('Please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMsg(`Game Over , Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg('you guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMsg('Number is Tooo low');
  } else if (guess > randomNumber) {
    displayMsg('Number is Tooo High');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}   `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}
function displayMsg(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id = "newGame">Start new Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```

## project 5 Solution

```JavaScript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
     </tr>
     <tr> 
       <td>${e.key === ' ' ? 'Space' : e.key}</td>  
       <td>${e.keyCode}</td>  
       <td>${e.code}</td>  
     </tr> 
    </table>
    </div>
  `;
});

```

## project 6 Solution

```Javascript
// generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```