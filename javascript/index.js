// main function show and hide
function showContent(id) {
  // Hiding all content div
  var contentDivs = document.querySelectorAll("#content > div");
  for (var i = 0; i < contentDivs.length; i++) {
    contentDivs[i].style.display = "none";
  }

  // Showing the selected content div
  var selectedDiv = document.getElementById(id);
  if (selectedDiv) {
    selectedDiv.style.display = "block";
  }
}

// Adding event listeners to navigation links
var links = document.querySelectorAll("#left-panel a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    var activeNav = document.querySelector(".active");
    if (activeNav !== null) {
      e.preventDefault();
      activeNav.classList.remove("active");
    }
    e.target.className = "active";
    showContent(this.getAttribute("href").substring(1));
  });
}

// function myFunction(e) {
//   var elems = document.querySelector(".active");
//   if (elems !== null) {
//     elems.classList.remove("active");
//   }
//   e.target.className = "active";
// }
