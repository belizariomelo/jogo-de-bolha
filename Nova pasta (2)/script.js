var board = document.getElementById("board");
var score = document.querySelector("#score span");
var bubbles = [];
var count = 0;

board.addEventListener("click", function (event) {
  if (event.target.classList.contains("bubble")) {
    board.removeChild(event.target);
    count++;
    score.innerHTML = count;
  }
});

setInterval(function () {
  var bubble = document.createElement("div");
  bubble.className = "bubble";
  var size = Math.floor(Math.random() * 100) + 50;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.top = Math.floor(Math.random() * 480) + "px";
  bubble.style.left = Math.floor(Math.random() * 580) + "px";
  board.appendChild(bubble);
  bubbles.push(bubble);
  if (bubbles.length > 10) {
    board.removeChild(bubbles[0]);
    bubbles.shift();
  }
}, 700);

var restartButton = document.getElementById("restart");
restartButton.addEventListener("click", function () {
  location.reload();
});
