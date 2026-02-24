const scriptURL = "https://script.google.com/macros/s/AKfycbylwvg9ewjdZ6xLgxMEj4slFrOuLvzE_hCLgj9wsiIgPxd51nAa4DcaBcgxcls7QuTV/exec";

document.getElementById("leadForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch(scriptURL, {
        method: "POST",
        body: data
    })
    .then(response => {
        document.getElementById("responseMessage").innerText =
            "Thank you! We will contact you shortly.";
        form.reset();
    })
    .catch(error => {
        document.getElementById("responseMessage").innerText =
            "Something went wrong. Please try again.";
    });
});