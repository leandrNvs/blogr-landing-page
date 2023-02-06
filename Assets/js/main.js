const toggleNav = document.querySelector(".header__toggle-nav");
const navbar = document.querySelector(".navbar");
let navIsOpen = 0;

toggleNav.addEventListener("click", function () {
  const img = this.querySelector("img");
  let src = "Assets/images/";

  closeAllDropdows();
  resetDropdownBtn();

  navbar.classList.toggle("active");

  if (navIsOpen === 0) {
    src += "icon-close.svg";
    navIsOpen = 1;
  } else {
    src += "icon-hamburger.svg";
    navIsOpen = 0;
  }

  img.src = src;
});

const dropdownBtn = document.querySelectorAll(".dropdown__btn");
const dropdownContents = document.querySelectorAll(".dropdown__content");

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const sibling = this.nextElementSibling;
    const siblingHeight = sibling.scrollHeight;

    resetDropdownBtn();

    if (sibling.style.maxHeight === "") {
      closeAllDropdows();
      this.classList.add("active");
      sibling.style.maxHeight = siblingHeight + "px";
    } else {
      sibling.style.maxHeight = null;
      this.classList.remove("active");
    }
  });
});

function closeAllDropdows() {
  dropdownContents.forEach((item) => {
    item.style.maxHeight = null;
  });
}

function resetDropdownBtn() {
  dropdownBtn.forEach((item) => {
    item.classList.remove("active");
  });
}

window.addEventListener("click", (e) => {
  const target = e.target;

  if (!target.classList.contains("dropdown__btn")) {
    closeAllDropdows();
    resetDropdownBtn();
  }
});
