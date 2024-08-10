const contactForm = document.getElementById('contactForm');
const loader = document.querySelector('.loader');

loader.style.display = "none";

contactForm.addEventListener("submit", function (e) {
    loader.style.display = "block";
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    }).then(() => {
        loader.style.display = "none";
        window.location.href = "/thankyou.html";
    }).catch((e) => alert('error'))
})