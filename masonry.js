const galleryFilters = document.querySelector(".gallery-filters");
const galleryFilterAll = document.querySelectorAll(".gallery-filter");
const images = document.querySelectorAll(".masonry-brick");
const allImages = document.querySelector(".masonry");

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

  galleryFilterAll.forEach((theFilter) => {
    const active = theFilter.querySelector(".active");

    if (active) {
      active.classList.remove("active");
      active.classList.add("inactive");
    }

    if ((ev.target.classList.contains = "inactive")) {
      ev.target.classList.remove("inactive");
      ev.target.classList.add("active");
    }
  });

  // end of event
});
