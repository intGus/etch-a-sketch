to do improvements

var randomColor = Math.floor(Math.random()*16777215).toString(16);

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

genNew.addEventListener("click", setBg);
setBg();



var canvas = document.createElement('canvas');
canvas.id = "canvas";
document.body.appendChild(canvas);

document.body.style.margin = 0;
canvas.style.position = 'relative';

var ctx = canvas.getContext('2d');
resize();

var pos = {
  x: 0,
  y: 0
};
var buttonDown = false;

const cvs = document.getElementById("canvas");
cvs.addEventListener('mousedown', getRandomInt);
cvs.addEventListener('touchstart', getRandomInt);

window.addEventListener('resize', resize);

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseup', released);

document.addEventListener('touchstart', setPosition);
document.addEventListener('touchmove', draw);
document.addEventListener('touchend', released);

function getRandomInt() {
  window.randInt = Math.floor(Math.random() * Math.floor(3));
}

function released(e) {
  buttonDown = false;
}

function setPosition(e) {
  if (e.type == "touchstart" || e.type == "mousedown") {
    buttonDown = true;
  }
  if (e.type == "touchstart" || e.type == "touchmove") {
    pos.x = e.touches[0].clientX;
    pos.y = e.touches[0].clientY;
  } else {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }
}

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  if (!buttonDown) return;

  var color = '';

  switch (window.randInt) {
    case 1:
      color = 'green';
      break;
    case 2:
      color = 'red';
      break;
    case 0:
      color = 'blue';
      break;
  }

  ctx.beginPath();

  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;

  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);

  ctx.stroke();
}