const intro = document.getElementById("intro-container");
const video = document.getElementById("intro-video");
const mainContent = document.getElementById("main-content");

// When video ends, hide intro and show main content
video.addEventListener("ended", () => {
  intro.style.display = "none";
  mainContent.style.display = "block";
  setTimeout(() => (mainContent.style.opacity = "1"), 100);
});
