const proverbs = [
  "A journey of a thousand miles begins with a single step.",
  "Actions speak louder than words.",
  "Better late than never.",
  "Birds of a feather flock together.",
  "Don't count your chickens before they hatch.",
  "Every cloud has a silver lining.",
  "A picture is worth a thousand words.",
  "You can lead a horse to water, but you can't make it drink.",
  "When in Rome, do as the Romans do.",
  "The early bird catches the worm."
];

function showProverb() {
const randint = Math.floor(Math.random() * proverbs.length);
const randProverb = proverbs[randint];

const element = document.querySelector(".fortunes");
element.innerText = randProverb;
}

document.addEventListener('DOMContentLoaded', () => {
showProverb();  

const colorBoxes = document.querySelectorAll('.color-changer div');
const fortunesDiv = document.querySelector('.fortunes');

function setBackgroundColor(color) {
  fortunesDiv.style.backgroundColor = color;
}

function setRandomBackgroundColor() {
  const randomIndex = Math.floor(Math.random() * colorBoxes.length);  
  const randomBox = colorBoxes[randomIndex];  
  const randomColor = window.getComputedStyle(randomBox).backgroundColor;  
  setBackgroundColor(randomColor);  
}

colorBoxes.forEach(box => {
  box.addEventListener('click', () => {
    const color = window.getComputedStyle(box).backgroundColor;  
    setBackgroundColor(color);  
  });
});

setRandomBackgroundColor();  
});

