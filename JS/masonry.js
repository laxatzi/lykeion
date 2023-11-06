const galleryFilters = document.querySelector(".gallery-filters");
const images = document.querySelectorAll(".gal-image");

galleryFilters.addEventListener("click", (ev) => {
  const galleryFilterText = ev.target.textContent.trim();

  images.forEach((image) => {
    if (galleryFilterText === "All") {
      image.style.display = "block";
    } else if (galleryFilterText === "Events") {
      if (image.classList.contains("event")) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    } else if (galleryFilterText === "Classroom") {
      if (image.classList.contains("classroom")) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    }
  });
});
