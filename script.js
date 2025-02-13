document.addEventListener('DOMContentLoaded', () => {
  const numberDisplay = document.getElementById('number-display');
  const incrementButton = document.getElementById('increment-button');
  const decreaseButton = document.getElementById('decrease-button');

  let number = 13;

  incrementButton.addEventListener('click', () => {

    number++;
    numberDisplay.textContent = number;
  });

  decreaseButton.addEventListener('click', () => {

    number--;
    numberDisplay.textContent = number;
  });
});

