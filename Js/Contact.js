const form = document.querySelector("form");
const popup = document.getElementById("popup");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        popup.classList.add("active");
        form.reset();
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
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
