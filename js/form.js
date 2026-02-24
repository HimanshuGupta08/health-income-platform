const scriptURL = "https://script.google.com/macros/s/AKfycbwfWnBGgiFeOKyGFcZW7x0Yvi60GXLn38iRnYqEGPnTe_0BtIxZTzkYdlbeFRNE-CGj/exec";

const form = document.getElementById("leadForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", e => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData,
    mode: "no-cors"
  })
  .then(() => {
    responseMessage.innerHTML = "Thank you! We will contact you soon.";
    form.reset();
  })
  .catch(error => {
    console.error("Error!", error.message);
    responseMessage.innerHTML = "Something went wrong. Please try again.";
  });
});