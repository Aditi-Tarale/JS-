# Projects related to DOM

## project link
[click here](https://vitejsvite29fyt2ia-2thw--5173--d4eba4a9.local-credentialless.webcontainer.io)

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