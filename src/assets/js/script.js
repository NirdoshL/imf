const navLinks = document.querySelector(".nav-links");
const openMobileNav = document.querySelector("#openMobileNav");
const closeMobileNav = document.querySelector("#closeMobileNav");
const tabs = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");
const contactUsBtn = document.getElementById("contact-us-btn");

let mobileNavState = false;

function onToggleMenu() {
  mobileNavState = !mobileNavState;
  if (mobileNavState) {
    closeMobileNav.classList.remove("hidden");
    openMobileNav.classList.add("hidden");
  } else {
    closeMobileNav.classList.add("hidden");
    openMobileNav.classList.remove("hidden");
  }
  navLinks.classList.toggle("top-[9%]");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabPanels.forEach((panel) => {
      panel.classList.add("hidden");
    });
    target.classList.remove("hidden");
    tabs.forEach((tabUnActive) => {
      tabUnActive.classList.remove("isActive");
      tabUnActive.classList.add("isInActive");
    });
    tab.classList.remove("isInActive");
    tab.classList.add("isActive");
  });
});

contactUsBtn.addEventListener("click", () => {
  window.scrollTo(0, document.body.scrollHeight);
});
