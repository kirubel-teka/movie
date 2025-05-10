//---Search Container
const detailsSearchContainer = document.querySelector(
  ".search-container-details"
);
const detailsSearchButton = document.querySelector(
  ".search-container-details i"
);
detailsSearchButton.addEventListener("click", () => {
  detailsSearchContainer.classList.toggle("search-container-details-active");
});
//Search Container---

//---Popup
let previousElement;
window.togglePopup = (e) => {
  if (previousElement) {
    previousElement.querySelector(".popup").classList.remove("show");
  }
  e.querySelector(".popup").classList.add("show");
  previousElement = e;
};