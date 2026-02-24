const scriptURL = "YOUR_SCRIPT_URL";

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