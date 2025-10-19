
// // Import the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
// import {
//   getFirestore,
//   doc,
//   setDoc,
// } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// // ================= Firebase Config =================
// const firebaseConfig = {
//   apiKey: "AIzaSyCIo1UOOBqAujvda-QICd2qtRi8nGrQzvs",
//   authDomain: "login-data-29ae4.firebaseapp.com",
//   projectId: "login-data-29ae4",
//   storageBucket: "login-data-29ae4.firebasestorage.app",
//   messagingSenderId: "911329059861",
//   appId: "1:911329059861:web:25f3d4c0bbb0c761fc1a1c",
//   measurementId: "G-YGQCZ523QF",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// console.log("Firebase Initialized");

// // ================= Custom Popup =================
// function showMessage(message, type = "error") {
//   const popup = document.getElementById("messagePopup");
//   popup.textContent = message;
//   popup.className = `message-popup ${type}`;
//   popup.style.display = "block";

//   setTimeout(() => {
//     popup.style.display = "none";
//   }, 3000);
// }

// // ================= SIGN UP =================
// document.getElementById("signupForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const username = document.getElementById("signupUsername").value.trim();
//   const email = document.getElementById("signupEmail").value.trim();
//   const password = document.getElementById("signupPassword").value;
//   const confirm = document.getElementById("signupConfirm").value;

//   if (password !== confirm) {
//     showMessage("Passwords do not match!", "error");
//     return;
//   }

//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     // Save extra data in Firestore
//     await setDoc(doc(db, "users", user.uid), {
//       username: username,
//       email: email,
//       createdAt: new Date().toISOString(),
//     });

//     e.target.reset();
//     showMessage("Sign up successful! ", "success");

//     wrapper.classList.remove("active");
//     toggleHeading.textContent = "Don't have an account?";
//     toggleText.textContent = "Sign up to get started!";
//     toggleBtn.textContent = "Sign Up";
//   } catch (error) {
//     if (error.code === "auth/email-already-in-use") {
//       showMessage("Email already registered!", "error");
//     } else if (error.code === "auth/invalid-credential") {
//       showMessage("Invalid credentials!", "error");
//     } else {
//       console.log(error);
//       showMessage(error.message, "error");
//     }
//   }
// });

// // ================= LOGIN =================
// document.getElementById("loginForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const email = document.getElementById("loginEmail").value.trim();
//   const password = document.getElementById("loginPassword").value;

//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     showMessage("Login successful! ", "success");
//     e.target.reset();
//     window.location.href = "/Code.html";
//   } catch (error) {
//     showMessage(error.message, "error");
//   }
// });

// const signupbtn = document.getElementById("signup-btn");

// signupbtn.addEventListener("click", () => {
//     showMessage("Sign up successful! ", "success");
// });


// Import the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// ================= Firebase Config =================
const firebaseConfig = {
  apiKey: "AIzaSyCIo1UOOBqAujvda-QICd2qtRi8nGrQzvs",
  authDomain: "login-data-29ae4.firebaseapp.com",
  projectId: "login-data-29ae4",
  storageBucket: "login-data-29ae4.firebasestorage.app",
  messagingSenderId: "911329059861",
  appId: "1:911329059861:web:25f3d4c0bbb0c761fc1a1c",
  measurementId: "G-YGQCZ523QF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
console.log("Firebase Initialized");

// ================= Custom Popup =================
function showMessage(message, type = "error") {
  let popup = document.getElementById("messagePopup");

  if (!popup) {
    popup = document.createElement("div");
    popup.id = "messagePopup";
    popup.className = "message-popup";
    document.body.appendChild(popup);
  }

  popup.textContent = message;
  popup.className = `message-popup ${type}`;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

// ================= SIGN UP =================
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("signupConfirm").value;

    if (password !== confirm) {
      showMessage("Passwords do not match!", "error");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save extra data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
        createdAt: new Date().toISOString(),
      });

      e.target.reset();
      showMessage("Sign up successful!", "success");
      setTimeout(() => {
        window.location.href = "/Code.html";
      }, 1000);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        showMessage("Email already registered!", "error");
      } else {
        showMessage(error.message, "error");
      }
    }
  });
}

// ================= LOGIN =================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      showMessage("Login successful!", "success");
      e.target.reset();
      setTimeout(() => {
        window.location.href = "/Code.html";
      }, 1000);
    } catch (error) {
      showMessage(error.message, "error");
    }
  });
}

// ================= USER STATUS (Dashboard Page) =================
const userNameEl = document.getElementById("userName");
const userEmailEl = document.getElementById("userEmail");
const authBtn = document.getElementById("authBtn");
const changePassBtn = document.getElementById("changePassBtn");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Fetch user details from Firestore
    try {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const data = userDoc.exists() ? userDoc.data() : {};

      if (userNameEl) userNameEl.textContent = data.username || "User";
      if (userEmailEl) userEmailEl.textContent = user.email;
    } catch (err) {
      console.error("Error loading user data:", err);
    }

    if (authBtn) {
      authBtn.textContent = "Logout";
      authBtn.classList.add("logout-btn");
      authBtn.addEventListener("click", async () => {
        await signOut(auth);
        showMessage("Logged out successfully!", "success");
      });
    }

    if (changePassBtn) changePassBtn.style.display = "block";
  } else { 
  }

    if (userNameEl) userNameEl.textContent = "Guest User";
    if (userEmailEl) userEmailEl.textContent = "guest@example.com";

    if (authBtn) {
      authBtn.textContent = "Login";
      authBtn.classList.remove("logout-btn");
      authBtn.onclick = () => (window.location.href = "/Login.html");
    }

    if (changePassBtn) changePassBtn.style.display = "none";
  }
);
