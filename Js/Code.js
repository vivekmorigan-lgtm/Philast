// ---------------------- DATA / FILES ----------------------
const files = [
  {
    name: "Custom Homepage",
    desc: "A modern homepage design with vibrant colors and smooth animations using HTML and CSS. Includes a stylish clock, to-do list with date, random background refresh, shortcuts to different sites, and search bar.",
    type: ["html" , "js"],
    imgs: [
      "https://www.dropbox.com/scl/fi/hgtsckhmkg4bqbmberdu7/Costom-Homepage.png?rlkey=qvp97bud77ub5gfc8g2ojwvfx&dl=0",
      "https://www.dropbox.com/scl/fi/1rhhyes1adcxuq7xhl5nl/Costom-Homepage2.png?rlkey=79bf8fpzyu5p429zl7u19xr7h&dl=0",
    ],
    url: "https://www.dropbox.com/scl/fi/1pqs2egg38hlhqpkbmgrh/Costom-Homepage.html?rlkey=mey3zymkioozic2gmg2pmxpzo&dl=1",
  },
  {
    name: "404 page",
    desc: "Beautiful animated 404 error page with HTML and CSS",
    type: ["css"],
    imgs: [
      "https://www.dropbox.com/scl/fi/z9znkd7w4ustog8872yq0/404.gif?rlkey=qqxzavj9cburc2ee0yexzg540&st=jjqh4pl9&dl=0",
      "https://www.dropbox.com/scl/fi/jo27k3vpbenr9rmeztgmn/404.jpg?rlkey=p00xwjwzkc1o5fmitstqy7mc8&st=c91rcuir&dl=0",
    ],
    url: "https://www.dropbox.com/scl/fi/xxpzekstvaogmuhq1s3fb/404-page.html?rlkey=c9zbxsec8pxmzp0oln4rphu1q&st=3dvncwlu&dl=1",
  },
  {
    name: "Vertical clock",
    desc: "Interactive vertical clock with JavaScript",
    type: ["js" , "responsive"],
    imgs: [
      "https://www.dropbox.com/scl/fi/jkjcx1el3xvbzx3wft90f/Screenshot-2025-10-19-111556.png?rlkey=bygwguof3ezujlfduxiusiq8h&st=mq4nibct&dl=0",
    ],
    url: "https://www.dropbox.com/scl/fi/ss0ows84xu4z9mmxly467/Clock.html?rlkey=clvilp3m7q9ho39yjk677hqww&st=lwnpsdf0&dl=1",
  },
  {
    name: "Responsive Navbar",
    desc: "Mobile-friendly navigation bar with hamburger menu",
    type: ["html", "css", "js", "responsive"],
    imgs: [
      "https://picsum.photos/800/450?random=5",
      "https://picsum.photos/800/450?random=6",
    ],
    url: "https://www.dropbox.com/s/EXAMPLE/navbar.zip?dl=1",
  },
];

const typeColors = {
  html: "#e34c26",
  css: "#264de4",
  js: "#f0db4f",
  responsive: "#43ea7b",
};

// ---------------------- HELPERS ----------------------
function fixDropboxLink(url) {
  // Convert common Dropbox share URLs to direct/raw where possible.
  try {
    if (!url.includes("dropbox.com")) return url;
    // If URL already uses dl=1 or dl.dropboxusercontent, return as-is (but normalize)
    if (url.includes("dl=1"))
      return url
        .replace("www.dropbox.com", "dl.dropboxusercontent.com")
        .replace("?dl=1", "");
    // Replace typical share link patterns
    let out = url.replace("www.dropbox.com", "dl.dropboxusercontent.com");
    // remove ?dl=0 or ?raw=1
    out = out.replace(/\?dl=0$/, "").replace(/\?raw=1$/, "");
    return out;
  } catch (e) {
    return url;
  }
}

// Normalize file links immediately
files.forEach((f) => {
  if (Array.isArray(f.imgs)) f.imgs = f.imgs.map(fixDropboxLink);
  if (f.url) f.url = fixDropboxLink(f.url);
});

// ---------------------- UI ELEMENTS ----------------------
const cardsContainer = document.getElementById("cards");
const searchInput = document.getElementById("search");
const filterBtn = document.getElementById("filter");
const filtersDiv = document.getElementById("filters");
const filterHtml = document.getElementById("filter-html");
const filterCss = document.getElementById("filter-css");
const filterJs = document.getElementById("filter-js");
const filterResponsive = document.getElementById("filter-responsive");

const profileBtn = document.getElementById("ProfileBtn");
const menuDropdown = document.getElementById("menuDropdown");
const userNameEl = document.getElementById("userName");
const userEmailEl = document.getElementById("userEmail");
const authBtn = document.getElementById("authBtn");
const changePassBtn = document.getElementById("changePassBtn");

// Profile menu toggle (click)
profileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isActive = profileBtn.getAttribute("aria-expanded") === "true";
  profileBtn.setAttribute("aria-expanded", String(!isActive));
  menuDropdown.style.display = isActive ? "none" : "block";
  menuDropdown.setAttribute("aria-hidden", String(isActive));
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!filtersDiv.contains(e.target) && e.target !== filterBtn) {
    filtersDiv.style.display = "none";
    filterBtn.setAttribute("aria-expanded", "false");
  }
  if (!menuDropdown.contains(e.target) && e.target !== profileBtn) {
    menuDropdown.style.display = "none";
    profileBtn.setAttribute("aria-expanded", "false");
  }
});

// Filters toggle
filterBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const visible = filtersDiv.style.display === "flex";
  filtersDiv.style.display = visible ? "none" : "flex";
  filtersDiv.setAttribute("aria-hidden", String(visible));
  filterBtn.setAttribute("aria-expanded", String(!visible));
});

function getActiveTypes() {
  const types = [];
  if (filterHtml.checked) types.push("html");
  if (filterCss.checked) types.push("css");
  if (filterJs.checked) types.push("js");
  if (filterResponsive.checked) types.push("responsive");
  return types;
}

// ---------------------- RENDERING ----------------------
function renderFiles(filesToRender) {
  cardsContainer.innerHTML = "";
  filesToRender.forEach((file, fileIdx) => {
    const card = document.createElement("article");
    card.className = "card";
    card.setAttribute("role", "article");
    card.setAttribute("aria-label", file.name);

    const imgCount = Array.isArray(file.imgs) ? file.imgs.length : 0;
    const gallery = document.createElement("div");
    gallery.className = "card-img-gallery";
    gallery.dataset.count = imgCount;

    (file.imgs || []).forEach((src, idx) => {
      const img = document.createElement("img");
      img.className = "card-img-gallery-img";
      img.src = src;
      img.alt = `${file.name} ${idx + 1}`;
      img.dataset.idx = idx;
      gallery.appendChild(img);
    });

    // Dots for mobile
    let dots = null;
    if (imgCount > 1) {
      dots = document.createElement("div");
      dots.className = "card-img-dots";
      (file.imgs || []).forEach((_, i) => {
        const d = document.createElement("span");
        d.className = "card-img-dot";
        d.dataset.dot = i;
        dots.appendChild(d);
        d.addEventListener("click", () => {
          gallery.scrollTo({
            left: gallery.querySelectorAll(".card-img-gallery-img")[i]
              .offsetLeft,
            behavior: "smooth",
          });
        });
      });
    }

    const title = document.createElement("h3");
    title.textContent = file.name;

    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = file.desc;

 const readMoreBtn = document.createElement("button");
readMoreBtn.className = "read-more-btn";
readMoreBtn.type = "button";
readMoreBtn.innerText = "Read more";

let expanded = false;

readMoreBtn.addEventListener("click", () => {
  expanded = !expanded;
  if (expanded) {
    desc.style.webkitLineClamp = "unset";
    readMoreBtn.innerText = "Read less";
  } else {
    desc.style.webkitLineClamp = "3"; // or whatever number of lines you want
    readMoreBtn.innerText = "Read more";
  }
});


    const typeSpan = document.createElement("div");
    typeSpan.innerHTML = (Array.isArray(file.type) ? file.type : [file.type])
      .map((t) => {
        const color = typeColors[t] || "#888";
        return `<span style="display:inline-flex;gap:.5em;align-items:center;margin-right:.6em;">
                    <span style="width:10px;height:10px;border-radius:50%;background:${color};box-shadow:0 0 8px ${color}55;border:1px solid #fff;"></span>
                    <small style="color:${color};font-weight:600;text-transform:uppercase;font-size:.7rem">${t}</small>
                  </span>`;
      })
      .join(" ");

    const downloadBtn = document.createElement("button");
    downloadBtn.className = "download-btn";
    downloadBtn.type = "button";
    downloadBtn.innerHTML = `<span>Download</span>`;

    downloadBtn.addEventListener("click", async () => {
      downloadBtn.classList.add("downloading");
      downloadBtn.disabled = true;

      try {
        // create hidden anchor to trigger download / open file
        const a = document.createElement("a");
        a.href = file.url || "#";
        a.rel = "noopener";
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (err) {
        console.warn("Download failed", err);
      }

      setTimeout(() => {
        downloadBtn.classList.remove("downloading");
        downloadBtn.disabled = false;
        showDownloadPopup();
      }, 1500);
    });

    // Desktop: hover gallery behavior
    card.appendChild(gallery);
    if (dots) card.appendChild(dots);
    card.appendChild(title);
    card.appendChild(typeSpan);
    card.appendChild(desc);
    card.appendChild(readMoreBtn);
    card.appendChild(downloadBtn);
    cardsContainer.appendChild(card);

    // Wire up hover/active image classes for desktop
    const imgs = gallery.querySelectorAll(".card-img-gallery-img");
    if (window.innerWidth > 700) {
      imgs.forEach((img) => {
        img.addEventListener("mouseenter", () => {
          imgs.forEach((i) => i.classList.remove("active"));
          img.classList.add("active");
        });
        img.addEventListener("mouseleave", () => {
          imgs.forEach((i) => i.classList.remove("active"));
        });
      });
    } else {
      // mobile: update dots on scroll
      if (dots) {
        const dotEls = dots.querySelectorAll(".card-img-dot");
        gallery.addEventListener("scroll", () => {
          const galleryWidth = gallery.offsetWidth;
          let activeIdx = 0;
          gallery
            .querySelectorAll(".card-img-gallery-img")
            .forEach((imgEl, idx) => {
              if (imgEl.offsetLeft - gallery.scrollLeft < galleryWidth / 2)
                activeIdx = idx;
            });
          dotEls.forEach((d, i) =>
            d.classList.toggle("active", i === activeIdx)
          );
        });
        dotEls[0].classList.add("active");
      }
    }
  });
}

function filterAndSearch() {
  let filtered = files.slice();
  const activeTypes = getActiveTypes();
  if (activeTypes.length) {
    filtered = filtered.filter((f) =>
      (Array.isArray(f.type) ? f.type : [f.type]).some((t) =>
        activeTypes.includes(t)
      )
    );
  }
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter((f) =>
      (f.name + " " + (f.desc || "")).toLowerCase().includes(searchTerm)
    );
  }
  renderFiles(filtered);
}

// initial render
renderFiles(files);

// event wiring
searchInput.addEventListener("input", filterAndSearch);
[filterHtml, filterCss, filterJs, filterResponsive].forEach((cb) =>
  cb.addEventListener("change", filterAndSearch)
);

function showDownloadPopup() {
  const old = document.getElementById("download-popup");
  if (old) old.remove();
  const popup = document.createElement("div");
  popup.id = "download-popup";
  popup.innerHTML = `
        <div class="popup-content">
          <span class="popup-close" aria-label="Close">&times;</span>
          <h2>Thanks for downloading!</h2>
          <p>Enjoy your code.</p>
        </div>`;
  document.body.appendChild(popup);
  popup
    .querySelector(".popup-close")
    .addEventListener("click", () => popup.remove());
  setTimeout(() => popup.remove(), 2800);
}

// ---------------------- FIREBASE (AUTH & PROFILE) ----------------------
// NOTE: these imports are loaded from the CDN; ensure you serve this page over https.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIo1UOOBqAujvda-QICd2qtRi8nGrQzvs",
  authDomain: "login-data-29ae4.firebaseapp.com",
  projectId: "login-data-29ae4",
  storageBucket: "login-data-29ae4.appspot.com",
  messagingSenderId: "911329059861",
  appId: "1:911329059861:web:25f3d4c0bbb0c761fc1a1c",
  measurementId: "G-YGQCZ523QF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Auth state handler
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // fetch profile document
    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        userNameEl.textContent = data.name || user.displayName || "User";
        userEmailEl.textContent = data.email || user.email || "";
      } else {
        // create basic doc if absent
        await setDoc(userRef, {
          name: user.displayName || "User",
          email: user.email || "",
          photoURL: user.photoURL || "",
        });
        userNameEl.textContent = user.displayName || "User";
        userEmailEl.textContent = user.email || "";
      }
    } catch (err) {
      console.warn("Profile fetch failed:", err);
      userNameEl.textContent = user.displayName || "User";
      userEmailEl.textContent = user.email || "";
    }

    authBtn.textContent = "Logout";
    authBtn.onclick = async () => {
      await signOut(auth);
    };
    changePassBtn.style.display = "block";
    changePassBtn.onclick = async () => {
      try {
        await sendPasswordResetEmail(auth, user.email);
        alert("Password reset email sent!");
      } catch (err) {
        console.error(err);
        alert("Error: " + (err.message || err));
      }
    };
  } else {
    // not logged in
    userNameEl.textContent = "Guest";
    userEmailEl.textContent = "Not logged in";
    authBtn.textContent = "Login";
    authBtn.onclick = () => {
      window.location.href = "/Login.html";
    };
    changePassBtn.style.display = "none";
  }
});
