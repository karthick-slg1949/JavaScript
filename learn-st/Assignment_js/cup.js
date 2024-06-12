const myImage = document.getElementById("my-image");

myImage.addEventListener("mouseover", function() {
  myImage.src = "./dhoni.jpg";
});

myImage.addEventListener("mouseout", function() {
  myImage.src = "./cup.jpg";
});