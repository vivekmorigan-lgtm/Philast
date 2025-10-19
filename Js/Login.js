// ================= TOGGLE SYSTEM =================
const wrapper = document.getElementById('formWrapper');
const toggleBtn = document.getElementById('toggleBtn');
const toggleHeading = document.getElementById('toggleHeading');
const toggleText = document.getElementById('toggleText');

toggleBtn.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    document.getElementById("signupForm").reset();
    document.getElementById("loginForm").reset();

    if (wrapper.classList.contains('active')) {
        toggleHeading.textContent = "Already have an account?";
        toggleText.textContent = "Login to your account!";
        toggleBtn.textContent = "Login";

    } else {
        toggleHeading.textContent = "Don't have an account?";
        toggleText.textContent = "Sign up to get started!";
        toggleBtn.textContent = "Sign Up";
    }
});

const password = document.getElementById('signupPassword');
const showBtn = document.getElementById('show-btn');

showBtn.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        showBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        password.type = 'password';
        showBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});
const conPassword = document.getElementById('signupConfirm');
const showBtn2 = document.getElementById('show-btn-2');

showBtn2.addEventListener('click', () => {
    if (conPassword.type === 'password') {
        conPassword.type = 'text';
        showBtn2.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        conPassword.type = 'password';
        showBtn2.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});