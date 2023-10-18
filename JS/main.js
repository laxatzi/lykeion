// smooth scrolling
const hopLinks = document.querySelectorAll(".hop");

for (const hopLink of hopLinks) {
  hopLink.addEventListener("click", clickToScrollSmoothly);
}

function clickToScrollSmoothly(el) {
  el.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// back to top
// Get the button
const topButton = document.querySelector("#top-button");

// When the user scrolls down 250px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    topButton.style.opacity = 1;
  } else {
    topButton.style.opacity = 0;
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
