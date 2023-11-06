const galleryFilters = document.querySelector(".gallery-filters");
const galleryFilterAll = document.querySelectorAll(".gallery-filter");
const images = document.querySelectorAll(".gal-image");
const allImages = document.querySelector(".images");

galleryFilters.addEventListener("click", (ev) => {
  const galleryFilterText = ev.target.textContent.trim();

  images.forEach((image) => {
    if (galleryFilterText === "All") {
      image.style.display = "block";
    } else if (galleryFilterText === "Events") {
      image.classList.contains("event")
        ? (image.style.display = "block")
        : (image.style.display = "none");
      allImages.style.columnCount = "3";
    } else if (galleryFilterText === "Classroom") {
      image.classList.contains("classroom")
        ? (image.style.display = "block")
        : (image.style.display = "none");
      allImages.style.columnCount = "3";
    }
  });
});
