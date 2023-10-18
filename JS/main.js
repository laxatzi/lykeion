// Wrapping the code in a function and assigning it to window.onload makes sure the script is executed right after everything on the page is loaded, hence nothing remains null
// otherwise it logs Uncaught TypeError: Cannot set property 'onclick' of null
window.onload = function () {
  // Scroll back to top program
  const scrollTopLink = document.getElementById("js--back-to-top");

  // Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
  const showScrollButton = function showScrollButtonWhenBeyondWindow() {
    let scrollY = window.scrollY;
    if (scrollY > 700) {
      scrollTopLink.classList.add("show");
      scrollTopLink.classList.remove("hidden");
    } else {
      scrollTopLink.classList.add("hidden");
      scrollTopLink.classList.remove("show");
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

  scrollTopLink.onclick = function (el) {
    el.preventDefault();
    scrollToTop();
  };
};
