const galleryFilters = document.querySelector(".gallery-filters");
const galImage1 = document.querySelector(".gal-image:nth-child(1)");
const galImage2 = document.querySelector(".gal-image:nth-child(2)");
const galImage3 = document.querySelector(".gal-image:nth-child(3)");
const galImage4 = document.querySelector(".gal-image:nth-child(4)");
const galImage5 = document.querySelector(".gal-image:nth-child(5)");
const galImage6 = document.querySelector(".gal-image:nth-child(6)");

galleryFilters.addEventListener("click", (ev) => {
  const galleryFilterText = ev.target.textContent.trim();

  if (galleryFilterText === "All") {
    console.log("All");
  } else if (galleryFilterText === "Events") {
    console.log("Events");
  } else if (galleryFilterText === "Classroom") {
    console.log("Classroom");
  }
});
