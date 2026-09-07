const groupImages = [
  "Assets/Images/group-photo1.jpg",
  "Assets/Images/group-photo3.jpg",
  "Assets/Images/group-photo5.jpg",
  "Assets/Images/group-photo6.jpg",
  "Assets/Images/group-photo7.jpg",
  "Assets/Images/group-photo8.jpg",
  "Assets/Images/group-photo9.jpg",
 ];

let groupIndex = 0;
let groupTimer = null;          // ADDED FOR CONTROLS
let groupPlaying = true;        // ADDED FOR CONTROLS
const GROUP_INTERVAL_MS = 3000; // ADDED FOR CONTROLS

// MODIFIED FOR CONTROLS: pulled "show a slide" into its own function
function showGroupSlide(index) {
  document.getElementById("slide-group").src = groupImages[index];
}

function startGroupSlideshow() {        // MODIFIED FOR CONTROLS
  if (groupTimer) return;
  groupTimer = setInterval(() => {
    groupIndex = (groupIndex + 1) % groupImages.length;
    showGroupSlide(groupIndex);
  }, GROUP_INTERVAL_MS);
}

function stopGroupSlideshow() {         // ADDED FOR CONTROLS
  clearInterval(groupTimer);
  groupTimer = null;
}

function nextGroupSlide() {             // ADDED FOR CONTROLS
  groupIndex = (groupIndex + 1) % groupImages.length;
  showGroupSlide(groupIndex);
}

function prevGroupSlide() {             // ADDED FOR CONTROLS
  groupIndex = (groupIndex - 1 + groupImages.length) % groupImages.length;
  showGroupSlide(groupIndex);
}




const pubImages = [
  "Assets/Images/TOC_pub1.png",
  "Assets/Images/TOC_pub2.png",
  "Assets/Images/TOC_pub3.png",
  "Assets/Images/TOC_pub4.png",
  "Assets/Images/TOC_pub5.png",
  "Assets/Images/TOC_pub6.png",
  "Assets/Images/TOC_pub7.png",
  "Assets/Images/TOC_pub8.png",
  "Assets/Images/TOC_pub9.png",
  "Assets/Images/TOC_pub10.png",
  "Assets/Images/TOC_pub11.png",
  "Assets/Images/TOC_pub12.png"
];

const pubCaptions = [
  "Li et al, JACS 2025",
  "Greenwald et al, Nature Nano 2021",
  "Li et al, JACS 2023",
  "Garner, Li, et al, Nature 2018",
  "Zang et al, Angew Chemie 2019",
  "Lovat, choi et al, Nature Nano 2017",
  "Li et al, JACS 2016",
  "Adak et al, Nano Letters 2015",
  "Capozzi et al, Nature Nanotechnology 2015",
  "Li et al JACS 2024",
  "Su et al, Nature Chemistry 2015",
  "Li et al, JACS 2015"
];

// --- GROUP SLIDESHOW ---
let groupIndex = 0;
let groupTimer = null;          // ADDED FOR CONTROLS
let groupPlaying = true;        // ADDED FOR CONTROLS
const GROUP_INTERVAL_MS = 3000; // ADDED FOR CONTROLS

function showGroupSlide(index) {                // MODIFIED FOR CONTROLS
  document.getElementById("slide-group").src = groupImages[index];
}

function startGroupSlideshow() {                // MODIFIED FOR CONTROLS
  if (groupTimer) return; // already running
  groupTimer = setInterval(() => {
    groupIndex = (groupIndex + 1) % groupImages.length;
    showGroupSlide(groupIndex);
  }, GROUP_INTERVAL_MS);
}

function stopGroupSlideshow() {                 // ADDED FOR CONTROLS
  clearInterval(groupTimer);
  groupTimer = null;
}

function nextGroupSlide() {                     // ADDED FOR CONTROLS
  groupIndex = (groupIndex + 1) % groupImages.length;
  showGroupSlide(groupIndex);
}

function prevGroupSlide() {                     // ADDED FOR CONTROLS
  groupIndex = (groupIndex - 1 + groupImages.length) % groupImages.length;
  showGroupSlide(groupIndex);
}

// --- PUBLICATIONS SLIDESHOW ---
let pubIndex = 0;
let pubTimer = null;          // ADDED FOR CONTROLS
let pubPlaying = true;        // ADDED FOR CONTROLS
const PUB_INTERVAL_MS = 3000; // ADDED FOR CONTROLS

// MODIFIED FOR CONTROLS: pulled the "show a slide" logic into its own function
// so buttons can call it directly instead of only the interval calling it.
function showPubSlide(index) {
  document.getElementById("slide-pub").src = pubImages[index];
  document.getElementById("toc-caption").textContent = pubCaptions[index];
}

// MODIFIED FOR CONTROLS: renamed/refactored so we can start/stop it on demand
function startPubSlideshow() {
  if (pubTimer) return; // already running
  pubTimer = setInterval(() => {
    pubIndex = (pubIndex + 1) % pubImages.length;
    showPubSlide(pubIndex);
  }, PUB_INTERVAL_MS);
}

function stopPubSlideshow() {           // ADDED FOR CONTROLS
  clearInterval(pubTimer);
  pubTimer = null;
}

function nextPubSlide() {               // ADDED FOR CONTROLS
  pubIndex = (pubIndex + 1) % pubImages.length;
  showPubSlide(pubIndex);
}

function prevPubSlide() {               // ADDED FOR CONTROLS
  pubIndex = (pubIndex - 1 + pubImages.length) % pubImages.length;
  showPubSlide(pubIndex);
}

// --- WIRE UP BUTTONS ONCE PAGE LOADS ---
document.addEventListener("DOMContentLoaded", () => {

  // --- pub slideshow controls (only wired up if these buttons exist on this page) ---
  const btnPrev = document.getElementById("pub-prev");
  const btnNext = document.getElementById("pub-next");
  const btnPlayPause = document.getElementById("pub-play-pause");

  if (btnPrev && btnNext && btnPlayPause) {   // ADDED FOR CONTROLS: guard so index.html doesn't crash
    showPubSlide(pubIndex);
    startPubSlideshow();

    btnPrev.addEventListener("click", () => {
      stopPubSlideshow();
      prevPubSlide();
      if (pubPlaying) startPubSlideshow();
    });

    btnNext.addEventListener("click", () => {
      stopPubSlideshow();
      nextPubSlide();
      if (pubPlaying) startPubSlideshow();
    });

    btnPlayPause.addEventListener("click", () => {
      pubPlaying = !pubPlaying;
      if (pubPlaying) {
        startPubSlideshow();
        btnPlayPause.textContent = "Pause";
      } else {
        stopPubSlideshow();
        btnPlayPause.textContent = "Play";
      }
    });
  }

  // --- group slideshow controls (only wired up if these buttons exist on this page) ---
  const btnGroupPrev = document.getElementById("group-prev");
  const btnGroupNext = document.getElementById("group-next");
  const btnGroupPlayPause = document.getElementById("group-play-pause");

  if (btnGroupPrev && btnGroupNext && btnGroupPlayPause) {   // ADDED FOR CONTROLS: guard so publications.html doesn't crash
    showGroupSlide(groupIndex);
    startGroupSlideshow();

    btnGroupPrev.addEventListener("click", () => {
      stopGroupSlideshow();
      prevGroupSlide();
      if (groupPlaying) startGroupSlideshow();
    });

    btnGroupNext.addEventListener("click", () => {
      stopGroupSlideshow();
      nextGroupSlide();
      if (groupPlaying) startGroupSlideshow();
    });

    btnGroupPlayPause.addEventListener("click", () => {
      groupPlaying = !groupPlaying;
      if (groupPlaying) {
        startGroupSlideshow();
        btnGroupPlayPause.textContent = "Pause";
      } else {
        stopGroupSlideshow();
        btnGroupPlayPause.textContent = "Play";
      }
    });
  }
});













