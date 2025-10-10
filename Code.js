const files = [
  {
    name: "Costom Homepage",
    desc: "A modern homepage design with vibrant colors and smooth animations using HTML and CSS.This design include a stylish clock widget and a to-do list with date and a random background that refreshes every 1min.This webpage also include shortcut for diffrent sities and search bar for instant search in diffrent websites.This is a perfect webpage if you are finding for a custom homepage for your browser.",
    type: ["html"],
    imgs: [
      "https://www.dropbox.com/scl/fi/hgtsckhmkg4bqbmberdu7/Costom-Homepage.png?rlkey=qvp97bud77ub5gfc8g2ojwvfx&st=ktnhkd7s&dl=0",
      "https://www.dropbox.com/scl/fi/1rhhyes1adcxuq7xhl5nl/Costom-Homepage2.png?rlkey=79bf8fpzyu5p429zl7u19xr7h&st=3aut0pys&dl=0",
    ],
    url: "https://www.dropbox.com/scl/fi/1pqs2egg38hlhqpkbmgrh/Costom-Homepage.html?rlkey=mey3zymkioozic2gmg2pmxpzo&st=3w3yro5t&dl=1",
  },
  {
    name: "Login Form",
    desc: "Beautiful animated login form with glassmorphism",
    type: ["html", "css"],
    imgs: [
      "https://picsum.photos/1920/1080?random=1760063460546&quot",
      "https://picsum.photos/1920/1080?random=1760063460546&quot",
    ],
    url: "https://www.dropbox.com/scl/fi/1pqs2egg38hlhqpkbmgrh/Costom-Homepage.html?rlkey=mey3zymkioozic2gmg2pmxpzo&st=3w3yro5t&dl=1",
  },
  {
    name: "Calculator App",
    desc: "Interactive calculator with JavaScript functionality",
    type: ["html", "css", "js"],
    imgs: [
      "https://picsum.photos/1920/1080?random=1760063460546&quot",
      "https://picsum.photos/1920/1080?random=1760063460546&quot",
    ],
    url: "https://www.dropbox.com/scl/fi/1pqs2egg38hlhqpkbmgrh/Costom-Homepage.html?rlkey=mey3zymkioozic2gmg2pmxpzo&st=3w3yro5t&dl=1",
  },
  {
    name: "Responsive Navbar",
    desc: "Mobile-friendly navigation bar with hamburger menu",
    type: ["html", "css", "js", "responsive"],
    imgs: [
      "https://picsum.photos/1920/1080?random=1760063460546&quot",
      "https://picsum.photos/1920/1080?random=1760063460546&quot",
    ],
    url: "https://www.dropbox.com/scl/fi/1pqs2egg38hlhqpkbmgrh/Costom-Homepage.html?rlkey=mey3zymkioozic2gmg2pmxpzo&st=3w3yro5t&dl=1",
  },
];

const typeColors = {
  html: "#e34c26",
  css: "#264de4",
  js: "#f0db4f",
  responsive: "#43ea7b",
};
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
const cardsContainer = document.getElementById("cards");
const searchInput = document.getElementById("search");
const filterBtn = document.getElementById("filter");
const filtersDiv = document.getElementById("filters");
const filterHtml = document.getElementById("filter-html");
const filterCss = document.getElementById("filter-css");
const filterJs = document.getElementById("filter-js");
const filterResponsive = document.getElementById("filter-responsive");

function getActiveTypes() {
  const types = [];
  if (filterHtml.checked) types.push("html");
  if (filterCss.checked) types.push("css");
  if (filterJs.checked) types.push("js");
  if (filterResponsive.checked) types.push("responsive");
  return types;
}

function renderFiles(filesToRender) {
  const cardsContainer = document.getElementById("cards");
  cardsContainer.innerHTML = "";

  filesToRender.forEach((file, fileIdx) => {
    const fileTypes = Array.isArray(file.type) ? file.type : [file.type];

    // Create card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Type indicator
    const circle = `<span class="type-indicator" style="display: inline-flex; align-items: center; gap: 0.5em; margin-bottom: 0.7em;">
      ${fileTypes
        .map(
          (t) => `
            <span style="
                display: inline-block;
                height: 10px;
                width: 10px;
                border-radius: 50%;
                background: ${typeColors[t]};
                box-shadow: 0 0 8px ${typeColors[t]}55;
                border: 2px solid #fff;
            "></span>
            <span style="
                font-weight: 600;
                color: ${typeColors[t]};
                text-shadow: 0 1px 2px #0002;
                font-size: 10px;
                letter-spacing: 1px;
                text-transform: uppercase;
                margin-top: 2px;
            ">${t}</span>
        `
        )
        .join(" ")}
    </span>`;

    // Image gallery HTML
    const imgCount = file.imgs.length;
    let galleryHtml = `<div class="card-img-gallery" data-count="${imgCount}" id="gallery-${fileIdx}">`;
    file.imgs.forEach((img, idx) => {
      galleryHtml += `<img src="${img}" alt="${file.name} ${
        idx + 1
      }" class="card-img-gallery-img" data-idx="${idx}" />`;
    });
    galleryHtml += `</div>`;

    // Dots for mobile
    let dotsHtml = "";
    if (imgCount > 1) {
      dotsHtml = `<div class="card-img-dots" id="dots-${fileIdx}">`;
      for (let i = 0; i < imgCount; i++) {
        dotsHtml += `<span class="card-img-dot" data-dot="${i}"></span>`;
      }
      dotsHtml += `</div>`;
    }

    // Set initial HTML: images + title + download button (desc and type added dynamically)
    card.innerHTML = `
      ${galleryHtml}
      ${dotsHtml}
      <h3>${file.name}</h3>
      <button class="download-btn"><span>Download</span></button>
    `;

    // --- Description with Read More button ---
    const desc = document.createElement("p");
    desc.classList.add("desc");
    desc.innerText = file.desc;

    const readMoreBtn = document.createElement("button");
    readMoreBtn.classList.add("read-more-btn");
    readMoreBtn.innerText = "Read more";

    let expanded = false;
    readMoreBtn.addEventListener("click", () => {
      expanded = !expanded;
      if (expanded) {
        desc.style.display = "block";
        readMoreBtn.innerText = "Read less";
      } else {
        desc.style.display = "-webkit-box";
        readMoreBtn.innerText = "Read more";
      }
    });

    // Type indicator below description
    const circleWrapper = document.createElement("div");
    circleWrapper.innerHTML = circle;

    // Append in order: desc → readMore → type → download button
    const downloadBtn = card.querySelector(".download-btn");
    card.insertBefore(desc, downloadBtn);
    card.insertBefore(readMoreBtn, downloadBtn);
    card.insertBefore(circleWrapper, downloadBtn);

    // --- Download button logic ---
    downloadBtn.addEventListener("click", function () {
      const btn = this;
      btn.classList.add("downloading");
      btn.disabled = true;

      // Download logic
      const downloadUrl = file.url.replace("?dl=0", "?dl=1");
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Show popup
      setTimeout(() => {
        btn.classList.remove("downloading");
        btn.disabled = false;
        showDownloadPopup();
      }, 3000);
    });

    // --- Image gallery hover logic for desktop ---
    if (window.innerWidth > 700) {
      const gallery = card.querySelector(".card-img-gallery");
      const imgs = gallery.querySelectorAll(".card-img-gallery-img");
      imgs.forEach((img) => {
        img.addEventListener("mouseenter", () => {
          imgs.forEach((i) => i.classList.remove("active"));
          img.classList.add("active");
        });
        img.addEventListener("mouseleave", () => {
          img.classList.remove("active");
        });
      });
    }

    // --- Mobile: horizontal scroll & dots ---
    if (window.innerWidth <= 700 && imgCount > 1) {
      const gallery = card.querySelector(".card-img-gallery");
      const dots = card.querySelectorAll(".card-img-dot");
      gallery.addEventListener("scroll", () => {
        const scrollLeft = gallery.scrollLeft;
        const galleryWidth = gallery.offsetWidth;
        const imgs = gallery.querySelectorAll(".card-img-gallery-img");
        let activeIdx = 0;
        imgs.forEach((img, idx) => {
          if (img.offsetLeft - gallery.scrollLeft < galleryWidth / 2)
            activeIdx = idx;
        });
        dots.forEach((dot, idx) =>
          dot.classList.toggle("active", idx === activeIdx)
        );
      });
      dots[0].classList.add("active");
      dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
          const imgs = gallery.querySelectorAll(".card-img-gallery-img");
          gallery.scrollTo({
            left: imgs[idx].offsetLeft,
            behavior: "smooth",
          });
        });
      });
    }

    cardsContainer.appendChild(card);
  });
}

// Custom popup function
function showDownloadPopup() {
  // Remove existing popup if any
  const oldPopup = document.getElementById("download-popup");
  if (oldPopup) oldPopup.remove();

  const popup = document.createElement("div");
  popup.id = "download-popup";
  popup.innerHTML = `
                <div class="popup-content">
                    <span class="popup-close">&times;</span>
                    <h2>Thanks for downloading!</h2>
                    <p>Enjoy your code!</p>
                </div>
            `;
  document.body.appendChild(popup);

  // Close popup on click
  popup.querySelector(".popup-close").onclick = () => popup.remove();
  // Auto remove after 2.5s
  setTimeout(() => popup.remove(), 2500);
}

function filterAndSearch() {
  let filtered = files;
  const activeTypes = getActiveTypes();
  filtered = filtered.filter((f) => {
    const fileTypes = Array.isArray(f.type) ? f.type : [f.type];
    return fileTypes.some((t) => activeTypes.includes(t));
  });

  // Search by name
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter((f) =>
      f.name.toLowerCase().includes(searchTerm)
    );
  }

  renderFiles(filtered);
}

searchInput.addEventListener("input", filterAndSearch);

[filterHtml, filterCss, filterJs, filterResponsive].forEach((cb) => {
  cb.addEventListener("change", filterAndSearch);
});

function fixDropboxLink(url) {
  if (!url.includes("dropbox.com")) return url; // not a Dropbox link
  return url
    .replace("www.dropbox.com", "dl.dropboxusercontent.com")
    .replace("?dl=0", "")
    .replace("?raw=1", "");
}

files.forEach((file) => {
  file.imgs = file.imgs.map((img) => fixDropboxLink(img));
  file.url = fixDropboxLink(file.url);
});

// ⬇ keep your existing line after this
renderFiles(files);

renderFiles(files);

// Show/hide filter options when filter button clicked
filterBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  filtersDiv.style.display =
    filtersDiv.style.display === "flex" ? "none" : "flex";
});

// Hide filters when clicking outside
document.addEventListener("click", (e) => {
  if (!filtersDiv.contains(e.target) && e.target !== filterBtn) {
    filtersDiv.style.display = "none";
  }
});
