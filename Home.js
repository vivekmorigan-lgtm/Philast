const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountainsBehind = document.getElementById("mountains_behind");
const mountainsFront = document.getElementById("mountains_front");
const text = document.getElementById("text");
const btn = document.getElementById("btn");

function getMultipliers() {
  const w = window.innerWidth;
  if (w <= 480) {
    return {
      stars: 0.08,
      moon: 0.6,
      behind: 0.2,
      front: 0.05,
      textRight: 0,
      textTop: 0.3,
    };
  }
  if (w <= 768) {
    return {
      stars: 0.12,
      moon: 0.8,
      behind: 0.3,
      front: 0.08,
      textRight: 0,
      textTop: 0.4,
    };
  }
  return {
    stars: 0.25,
    moon: 1,
    behind: 0.5,
    front: 0,
    textRight: 4,
    textTop: 1.5,
  };
}

function onScroll() {
  const value = window.scrollY;
  const m = getMultipliers();

  if (stars) stars.style.transform = `translateX(${value * m.stars}px)`;
  if (moon) moon.style.transform = `translateY(${value * m.moon}px)`;
  if (mountainsBehind)
    mountainsBehind.style.transform = `translateY(${value * m.behind}px)`;
  if (mountainsFront)
    mountainsFront.style.transform = `translateY(${value * m.front}px)`;

  if (text) {
    if (window.innerWidth > 768) {
      text.style.marginRight = value * m.textRight + "px";
      text.style.marginTop = value * m.textTop + "px";
    } else {
      text.style.marginTop = value * m.textTop + "px";
    }
  }

  if (btn) btn.style.marginTop = value * 0.3 + "px";
}

let ticking = false;
window.addEventListener("scroll", function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      onScroll();
      ticking = false;
    });
    ticking = true;
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("resize", () => onScroll());
document.addEventListener("DOMContentLoaded", () => onScroll());

// Typing effect
const words = ["Developer", "Designer", "Freelancer", "Blogger"];
const typedText = document.getElementById("typed-text");
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (typing) {
    typedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      typing = false;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeEffect, typing ? 100 : 50);
}
typeEffect();

// Infinite slider
const whySlider = document.getElementById("why-slider");
if (whySlider) {
  whySlider.innerHTML += whySlider.innerHTML;
  let sliderWidth = whySlider.scrollWidth / 2;
  let translateX = 0;
  let speed = 0.5;

  function animateWhySlider() {
    translateX -= speed;
    if (Math.abs(translateX) >= sliderWidth) {
      translateX = 0;
    }
    whySlider.style.transform = `translateX(${translateX}px)`;
    requestAnimationFrame(animateWhySlider);
  }
  animateWhySlider();
}

const animated = document.querySelectorAll("[data-animate]");
window.addEventListener("scroll", () => {
  animated.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("visible");
  });
});
