let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navBar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");

  let navigation = document.querySelectorAll(".navigation");

  navigation.forEach((navigate) => {
    navigate.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navBar.classList.remove("active");
    });
  });
});

// display collection item 2

let displayMoreBtn = document.getElementById("displayMore");
let hiddenCollectionBox = document.getElementById("hiddenBox");

displayMoreBtn.addEventListener("click", () => {
  hiddenCollectionBox.classList.remove("activeBox");
  displayMoreBtn.classList.add("activeBox");
  setTimeout(() => {
    hiddenCollectionBox.classList.add("collection-item2");
  }, 1000);
});
