window.addEventListener("scroll", function () {
  document
    .querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 10);
});

(function () {
  emailjs.init("pYGirvxecUrEu5rJA");
})();

function sendMail(e) {
  e.preventDefault();
  console.log("Button clicked");
  emailjs
    .send("service_1dbhjx4", "template_h223vrt", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    })
    .then(() => {
      alert("Message sent successfully ✅");
      document.querySelector(".contact-form").reset();
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to send ❌");
    });
}
