

const form = document.querySelector("form");
const formMessage = document.querySelector("#form-message");
const submitBtn = form.querySelector("button[type='submit']");

function showMessage(message, isError) {
    formMessage.textContent = message;
    formMessage.style.color = isError ? "#dc2626" : "#16a34a";
    formMessage.classList.remove("show");

    requestAnimationFrame(function() {
        void formMessage.offsetWidth;
        formMessage.classList.add("show");
    });

    setTimeout(function() {
        formMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name === "") {
    showMessage("Please enter your name.", true);
    return;
  }

  if (email === "") {
    showMessage("Please enter your email.", true);
    return;
  }

  if (message.length < 10) {
    showMessage("Please enter a message with at least 10 characters.", true);
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  setTimeout(function() {
    showMessage("Thanks " + name + "! Your message has been sent.", false);
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit";
    form.reset();
}, 2200);

});