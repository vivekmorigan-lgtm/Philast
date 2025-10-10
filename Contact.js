const form = document.querySelector("form");
const popup = document.getElementById("popup");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      popup.classList.add("active");
      form.reset();
    })
    .catch(() => alert("❌ Something went wrong. Please try again."));
});

function closePopup() {
  popup.classList.remove("active");
}
document.querySelectorAll(".clear-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.previousElementSibling;
    input.value = "";
    input.focus();
    btn.style.display = "none";
  });

  const input = btn.previousElementSibling;
  input.addEventListener("input", () => {
    btn.style.display = input.value ? "block" : "none";
  });
});
