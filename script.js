let elem = document.querySelectorAll(".elem");
let hamburger = document.querySelector("#item-menu");
let list = document.querySelector(".nav-items");
let isOpen = false;

hamburger.addEventListener("click", () => {
    if (isOpen == false) {
        list.style.transform = 'translateX(0%)';
        isOpen = true;
    } else {
        list.style.transform = 'translateX(-100%)';
        isOpen = false;
    }
});


elem.forEach((val) => {
  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1;
  })
  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0;
  })
})

var typed = new Typed('#element', {
  strings: ['a Coder', ' and a Web Developer'],
  typeSpeed: 70,
});
