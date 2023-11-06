const galleryFilters = document.querySelector(".gallery-filters");

galleryFilters.addEventListener("click", (ev) => {
  let galleryFilterText = ev.target.textContent.trim();

  if (galleryFilterText === "All") {
    console.log("All");
  } else if (galleryFilterText === "Events") {
    console.log("Events");
  } else if (galleryFilterText === "Classroom") {
    console.log("Classroom");
  }
});
