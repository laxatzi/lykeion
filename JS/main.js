window.onload = function () {
  // your code

  // Scroll back to top program
  const scrollTopLink = document.getElementById("js--back-to-top");

  // Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
  const showScrollButton = function showScrollButtonWhenBeyondWindow() {
    let scrollY = window.scrollY;
    if (scrollY > 350) {
      scrollTopLink.classList.add("show");
      scrollTopLink.classList.remove("hidden");
      console.log(">350");
    } else {
      scrollTopLink.classList.add("hidden");
      scrollTopLink.classList.remove("show");
      console.log("<350");
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
