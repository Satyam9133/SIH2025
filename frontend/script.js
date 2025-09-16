// When clicking the logo → refresh the page
document.getElementById("logo-link").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent normal anchor behavior
  location.reload();  // Refresh the page
});

console.log("NAGARSETU Web App Loaded 🚀");
