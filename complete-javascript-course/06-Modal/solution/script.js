"use strict";

const btnsShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const displayModal = (show) => {
  if (show) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
};

for (let i = 0; i < btnsShowModal.length; i++) {
  const btn = btnsShowModal[i];
  btn.addEventListener("click", () => {
    displayModal(true);
  });
}

btnCloseModal.addEventListener("click", () => {
  displayModal(false);
});

overlay.addEventListener("click", () => {
  displayModal(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    displayModal(false);
  }
});
