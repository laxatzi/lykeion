// © Lambros Hatzinikolaou, 2023
// Wrapping the code in a function and assigning it to window.onload makes sure the script is executed right after everything on the page is loaded, hence nothing remains null
// otherwise it logs Uncaught TypeError: Cannot set property 'onclick' of null

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.

//  Alternative topScroll function
// window.addEventListener("scroll", showScrollButton);

// const scrollToTop = function scrollToTopOfDoc() {
//   const distanceFromTop =
//     document.documentElement.scrollTop || document.body.scrollTop;
//   // We'll also animate that scroll with requestAnimationFrame:
//   // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//   if (distanceFromTop > 0) {
//     window.requestAnimationFrame(scrollToTop);
//     // ScrollTo takes an x and a y coordinate.
//     // Increase the '10' value to get a smoother/slower scroll!
//     window.scrollTo(0, distanceFromTop - distanceFromTop / 1);
//   }
// };

// const showScrollButton = function showScrollButtonWhenBeyondWindow() {
//   let scrollY = window.scrollY;
//   if (scrollY > 350) {
//     scrollTopButton.className = "back-to-top show";
//   } else {
//     scrollTopButton.className = "back-to-top hidden";
//   }
// };

// Code for selecting subPages

// end of wrapper func
