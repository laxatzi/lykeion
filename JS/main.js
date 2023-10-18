// © Lambros Hatzinikolaou, 2023

const links = document.querySelectorAll(".nav .nav-link a");

for (const link of links) {
  link.addEventListener("click", clickToScrollSmoothly);
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

const scrollTopButton = document.getElementById("js--back-to-top");

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const showScrollButton = function showScrollButtonWhenBeyondWindow() {
  let scrollY = window.scrollY;
  if (scrollY > 250) {
    scrollTopButton.className = "back-to-top show";
  } else {
    scrollTopButton.className = "back-to-top hidden";
  }
};

window.addEventListener("scroll", showScrollButton);

const scrollToTop = function scrollToTopOfDoc() {
  const distanceFromTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (distanceFromTop > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, distanceFromTop - distanceFromTop / 5);
  }
};

scrollTopButton.onclick = function (el) {
  el.preventDefault();
  scrollToTop();
};
