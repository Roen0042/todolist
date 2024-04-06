const bg = [
    "bg1.png",
    "bg2.jpg",
    "bg3.jpg",
  ];
  
const todaysImgNum = Math.floor(Math.random() * bg.length);
const todaysImg = bg[todaysImgNum];

const bgImg = document.createElement("style");

bgImg.innerText = `body {background-image: url(images/${todaysImg}); background-position: center; background-repeat: no-repeat; background-size: cover; }`;

document.head.appendChild(bgImg);