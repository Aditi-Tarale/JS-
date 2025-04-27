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