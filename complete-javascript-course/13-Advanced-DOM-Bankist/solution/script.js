"use strict";

///////////////////////////////////////
// App

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnScrollTo.addEventListener("click", function (e) {
  // const s1coords = section1.getBoundingClientRect();

  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: "smooth"
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed component
tabsContainer.addEventListener("click", function (e) {
  // Method 1: ternary operator
  // const clickedTab =
  //   e.target.parentElement === tabsContainer
  //     ? e.target
  //     : e.target.parentElement;

  // Method 2: closest()
  const clickedTab = e.target.closest(".operations__tab");

  if (!clickedTab) return;
  // Remove active class
  tabs.forEach(tab => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach(tab =>
    tab.classList.remove("operations__content--active")
  );
  // Activate tab
  clickedTab.classList.add("operations__tab--active");
  // Activate content area
  document
    .querySelector(`.operations__content--${clickedTab.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const clickedLink = e.target;
    const siblings = clickedLink.closest(".nav").querySelectorAll(".nav__link");
    const logo = clickedLink.closest(".nav").querySelector("img");

    siblings.forEach(el => {
      if (el !== clickedLink) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky Navigation
// Method 1: Naive approach
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener("scroll", function (e) {
//   if (this.window.scrollY > initialCoords.top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

// Method 2: Intersection Observer API
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImages = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImages, {
  root: null,
  threshold: 0,
  rootMargin: "200px"
});

imgTargets.forEach(img => imageObserver.observe(img));

// Slider
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

const maxSlide = slides.length;
let currentSlide = 0;

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach(dot => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`)
  );
};

const nextSlide = function () {
  currentSlide = currentSlide === maxSlide - 1 ? 0 : currentSlide + 1;
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const previousSlide = function () {
  currentSlide = currentSlide === 0 ? maxSlide - 1 : currentSlide - 1;
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

// Initialize the Slider
goToSlide(0);
createDots();
activateDot(0);

// Event
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") previousSlide();
  else if (e.key === "ArrowRight") nextSlide();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
    currentSlide = slide;
  }
});

///////////////////////////////////////
// Experiments

// const h1 = document.querySelector("h1");
// const handleEventH1 = function (e) {
//   console.log("H1");
//   h1.removeEventListener("mouseenter", handleEventH1);
// };
// h1.addEventListener("mouseenter", handleEventH1);

// const randomInt = (min, max) =>
//   Math.floor(min + Math.random() * (max - min + 1));

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target);
//   console.log(e.currentTarget === this);
//   e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(" CONTAINER", e.target);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("NAV", e.target);
// });

/* -------------- DOM Traversing --------------- */
// const h1 = document.querySelector("h1");

// // Going downwards: Selecting child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.children);
// h1.firstElementChild.style.color = "red";
// h1.lastElementChild.style.color = "whitesmoke";

// // Going upwards: Selecting parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";

// // Going sideways: Selecting siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = "scale(0.5)";
//   }
// });

// The Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
