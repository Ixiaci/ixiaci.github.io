// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika Menu Di Click
document.querySelector("#rmenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klick di luar sidebar untuk hilangkan navbar
const rmenu = document.querySelector("#rmenu");

document.addEventListener("click", function (e) {
  if (!rmenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
