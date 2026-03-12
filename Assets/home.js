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











