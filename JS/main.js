// © Lambros Hatzinikolaou, 2023
// Wrapping the code in a function and assigning it to window.onload makes sure the script is executed right after everything on the page is loaded, hence nothing remains null
// otherwise it logs Uncaught TypeError: Cannot set property 'onclick' of null
window.onload = function () {
  const scrollTopButton = document.getElementById("js--back-to-top");

  // When the user scrolls down 250px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 350 ||
      document.documentElement.scrollTop > 350
    ) {
      scrollTopButton.style.opacity = 1;
    } else {
      scrollTopButton.style.opacity = 0;
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  scrollTopButton.onclick = function (el) {
    el.preventDefault();
    // scrollToTop();
    topFunction();
  };

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

  const coursePages = document.querySelectorAll(".course-page");
  const overview = document.querySelector(".overview");
  const curriculum = document.querySelector(".curriculum");
  const overviewPage = document.querySelector(".overview-page");
  const curriculumPage = document.querySelector(".curriculum-page");
  const navItems = document.querySelectorAll(".course-nav-item");

  // const activeToggler = function activeClassToggler(ev) {
  //   ev.preventDefault();
  // };

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      coursePages.forEach((page) => {
        if (page.classList.contains("active")) {
          page.classList.remove("active");
        } else {
          page.classList.add("active");
        }
      });
    });
  });
};
