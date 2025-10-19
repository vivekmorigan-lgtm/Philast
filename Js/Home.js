// elements used for parallax
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
      moon: 0.7,
      behind: 0.2,
      front: 0.05,
      textRight: 0,
      textTop: 0.3,
    };
  }
  if (w <= 768) {
    return {
      stars: 0.12,
      moon: 0.9,
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

  if (stars) {
    // translateX only (stars top is animated via CSS)
    stars.style.transform = `translateX(${value * m.stars}px)`;
  }

  if (moon) {
    // preserve the initial centering translate(-50%,-50%) and add translateY for parallax
    moon.style.transform = `translate(-60%, -60%) translateY(${
      value * m.moon
    }px)`;
  }

  if (mountainsBehind) {
    mountainsBehind.style.transform = `translateY(${value * m.behind}px)`;
  }
  if (mountainsFront) {
    mountainsFront.style.transform = `translateY(${value * m.front}px)`;
  }

  // if (text) {
  //   if (window.innerWidth > 768) {
  //     text.style.marginRight = value * m.textRight + "px";
  //     text.style.marginTop = value * m.textTop + "px";
  //   } else {
  //     text.style.marginTop = value * m.textTop + "px";
  //   }
  // }

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

// nav toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}
if (nav) {
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
    }
  });
}

// show current year
document.getElementById("year").textContent = new Date().getFullYear();

// handle resize and initial onload
window.addEventListener("resize", () => onScroll());
document.addEventListener("DOMContentLoaded", () => onScroll());

/* ===== typing effect (kept same) ===== */
const words = ["Developer", "Designer", "Freelancer", "Blogger"];
const typedText = document.getElementById("typed-text");
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (!typedText) return;
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

/* ===== Infinite slider helper (works for multiple sliders) ===== */
function initInfiniteSlider(sliderId, speed = 0.5) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  // duplicate the contents once for seamless loop
  slider.innerHTML += slider.innerHTML;

  // wait a frame to ensure layout updated before measuring
  requestAnimationFrame(() => {
    const sliderWidth = slider.scrollWidth / 2;
    let translateX = 0;

    function step() {
      translateX -= speed;
      if (Math.abs(translateX) >= sliderWidth) {
        // reset to 0 (start) when one copy scrolled out
        translateX = 0;
      }
      slider.style.transform = `translateX(${translateX}px)`;
      requestAnimationFrame(step);
    }
    // kick off
    requestAnimationFrame(step);
  });
}

// init both sliders (unique IDs)
initInfiniteSlider("why-slider", 0.5);

/* ===== scroll animation trigger for elements with [data-animate] ===== */
const animatedEls = document.querySelectorAll("[data-animate]");
function handleScrollAnimate() {
  animatedEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("visible");
  });
}
window.addEventListener("scroll", handleScrollAnimate);
document.addEventListener("DOMContentLoaded", handleScrollAnimate);

/* ===== FAQ toggle (single declaration) ===== */
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
  });
});
