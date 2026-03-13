const groupImages = [
  "Assets/Images/group-photo1.jpg",
  "Assets/Images/group-photo3.jpg",
  "Assets/Images/group-photo5.jpg",
  "Assets/Images/group-photo6.jpg",
  "Assets/Images/group-photo7.jpg",
  "Assets/Images/group-photo8.jpg",
 ];

let groupIndex = 0;

setInterval(() => {
  groupIndex = (groupIndex + 1) % groupImages.length;
  document.getElementById("slide-group").src = groupImages[groupIndex];
}, 3000);




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

let pubIndex = 0;

setInterval(() => {
  pubIndex = (pubIndex + 1) % pubImages.length;
  document.getElementById("slide-pub").src = pubImages[pubIndex];
  document.getElementById("toc-caption").textContent = pubCaptions[pubIndex];
}, 3000);













