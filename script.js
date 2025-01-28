const contactForm = document.getElementById('contactForm');
const loader = document.getElementById('loader');

contactForm.addEventListener("submit", function (e) {
    loader.classList.toggle("hidden");
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    }).then(() => {
        loader.classList.toggle("hidden");
        window.location.href = "/thankyou.html";
    }).catch((e) => alert('error'))
})