// Nav
const nav = document.querySelector(".nav-menu");
const navigation = document.querySelector(".navigation");
const openBtn = document.querySelector(".bars");
const closeBtn = document.querySelector(".close");

const navLeft = nav.getBoundingClientRect().left;
openBtn.addEventListener("click", () => {
  if (navLeft < 0) {
    navigation.classList.add("show");
    nav.classList.add("show");
    document.body.classList.add("show");
  }
});

closeBtn.addEventListener("click", () => {
  if (navLeft < 0) {
    navigation.classList.remove("show");
    nav.classList.remove("show");
    document.body.classList.remove("show");
  }
});

//  Fixed nav
const navHeight = navigation.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navigation.classList.add("fix-nav");
  } else {
    navigation.classList.remove("fix-nav");
  }
});

// PopUp
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

window.addEventListener("load", () => {
  setTimeout(() => {
    popup.classList.add("show");
  }, 3000);
});