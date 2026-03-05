const images = [
  "Assets/Images/pic1.jpg",
  "Assets/Images/pic2.jpg",
  "Assets/Images/pic3.jpg"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 3000);


