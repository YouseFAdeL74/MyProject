$(document).ready(function () {
  $(".navbar-nav .nav-link").click(function () {
    $(this).addClass("active").parent().siblings().find(".nav-link").removeClass("active");
  });
  $(".num").counterUp({
    delay: 10,
    time: 1000
  })
});


let changeicon = function (icon) {
  icon.classList.toggle("fa-times");
};

window.onload = function () {
  let loader = document.getElementById("load");
  document.body.style.overflow = "hidden";

  setTimeout(function () {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    loader.style.transition = "1.5s";
    document.body.style.overflow = "auto";
  }, 3000)
}

let meassage = this.document.querySelector(".message");
let contact = document.querySelector(".contact")
let exit = document.getElementById("close");

meassage.onclick = function () {
  contact.classList.add("contact-show");
}
exit.addEventListener("click", function () {
  this.parentElement.classList.remove("contact-show")
})
window.addEventListener("scroll", function () {
  let meassage = this.document.querySelector(".message");
  meassage.classList.toggle("show", this.window.scrollY > 800)
  let whatsup = document.getElementById("whatsup");
  whatsup.classList.toggle("show-whats", window.scrollY > 850)
});

