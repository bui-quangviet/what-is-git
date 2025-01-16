document.addEventListener('DOMContentLoaded', () => {
  const numberDisplay = document.getElementById('number-display');
  const incrementButton = document.getElementById('increment-button');

  let number = 1;

  incrementButton.addEventListener('click', () => {
      number++;
      numberDisplay.textContent = number;
  });
});

