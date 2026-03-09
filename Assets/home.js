const images = [
  "Assets/Images/group-photo1.jpg",
  "Assets/Images/group-photo3.jpg",
  "Assets/Images/group-photo5.jpg",
  "Assets/Images/group-photo6.jpg",
  "Assets/Images/group-photo7.jpg",
  "Assets/Images/group_photo8.png",
 ];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 3000);








