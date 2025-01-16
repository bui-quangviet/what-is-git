document.addEventListener('DOMContentLoaded', () => {
  const numberDisplay = document.getElementById('number-display');
  const incrementButton = document.getElementById('increment-button');

  let number = 1;

  incrementButton.addEventListener('click', () => {
    if (number >== 5){
      alert("Count to 5")
    }
    number++;
    numberDisplay.textContent = number;
  });
});

