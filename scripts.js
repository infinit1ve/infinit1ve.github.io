const localeSelector = document.getElementById("localeSelector");
const locale = localeSelector.value;

localeSelector.addEventListener('change', function() {
    window.location.href = `/${this.value}/index.html`;
});

if(locale === "de") {
  var words = ["tue Dinge.", "lerne.", "chille.", "schreibe.", "bastle."];
  var welcomeText = ["Jetzt bist du schon mal hier &#8212; dann schau dich ruhig um.", "Schön, dass du hergefunden hast. Bleib doch ein bisschen und schau dich um.", "Na gut, jetzt wo du schon mal da bist &#8212; schau dich einfach um.", "Wenn du aus einem bestimmten Grund hier bist &#8212; ich hoffe, du findest, was du suchst."];
} else {
  var words = ["do stuff.", "learn.", "vibe.", "write.", "tinker."];
  var welcomeText = ["You&#39;re here now &#8212; might as well see what&#39;s going on.", "Glad you wandered in. Stay a while, explore a bit.", "Well, now that you&#39;re here, take a look around.", "If you&#39;re here for a reason, I hope you find it."];
}


let currentWordList = shuffle([...words]);
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("dynamic-verb-text");

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

const textWelcomeElement = document.getElementById("dynamic-welcome-text");

function shuffle(array) {
  // Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const textWelcomeElementShuffled = shuffle(welcomeText);
textWelcomeElement.innerHTML = textWelcomeElementShuffled[0];