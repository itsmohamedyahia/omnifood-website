///////////////////////////////////////////////////////////
// Mobile Navigation
const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

navBtnEl.addEventListener("click", function () {
  console.log("clicked");
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Sticky Navbar
let sectionHeroEl = document.querySelector(".section-hero");
let observer = new IntersectionObserver(
  function (entries) {
    intersectingState = entries[0].isIntersecting;
    if (!intersectingState) {
      console.log(entries);
      document.body.classList.add("sticky");
    }
    if (intersectingState) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);
///////////////////////////////////////////////////////////
// Smooth scrolling animations

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const href = anchor.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      document.querySelector(".header").classList.toggle("nav-open");
    }
  });
});

// const allLinks = document.querySelectorAll("a");
// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     console.log(href);
//     // scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         behavior: "smooth",
//         top: 0
//   });
// if (href !== '#' && href.startsWith("#")) {
//   const sectionEl = document.querySelector(href);
//   console.log(sectionEl);
// }
// }
// );

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
