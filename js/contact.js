const form = document.getElementById("contact-us-form");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");


form.onsubmit = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const title = e.target.title.value;
  const text = e.target.text.value;

  fetch("https://online-shop-backend.darkube.app/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, title, text }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        errorMessage.style.display = 'none';
        successMessage.style.display = "block";

        form.reset();
      } else {
        successMessage.style.display = 'none';

        errorMessage.innerText = res.error;
        errorMessage.style.display = "block";
      }
    })
};
