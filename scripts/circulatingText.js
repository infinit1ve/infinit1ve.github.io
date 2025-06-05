const words = ["do stuff.", "learn.", "vibe.", "write.", "tinker.", "overthink."];
let currentWordList = shuffle([...words]);
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("dynamic-text");

function shuffle(array) {
  // Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function type() {
  const currentWord = currentWordList[wordIndex];
  const visibleText = currentWord.slice(0, charIndex);
  textElement.textContent = visibleText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex++;
      if (wordIndex >= currentWordList.length) {
        currentWordList = shuffle([...words]); // reshuffle to keep things fresh
        wordIndex = 0;
      }
    }
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", type);