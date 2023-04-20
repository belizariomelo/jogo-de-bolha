var answer = prompt("Digite o amor da sua vida para jogar:");

if (answer.toLowerCase() !== "belizário") {
  alert("Resposta incorreta. Tente novamente.");
  location.reload(); // recarrega a página se a resposta estiver incorreta
}
var board = document.getElementById("board");
var score = document.querySelector("#score span");
var bubbles = [];
var count = 0;
var startButton = document.getElementById("start");
var restartButton = document.getElementById("restart");
var pointThreshold = 5; // define o limite de pontos para aumentar a velocidade
var speedIncrease = 0.2; // define o aumento percentual da velocidade

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  restartButton.style.display = "block";
  var bubbleInterval = setInterval(function () {
    var bubble = document.createElement("div");
    bubble.className = "bubble";
    var size = Math.floor(Math.random() * 100) + 50;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.top = Math.floor(Math.random() * 480) + "px";
    bubble.style.left = Math.floor(Math.random() * 580) + "px";
    board.appendChild(bubble);
    bubbles.push(bubble);
    if (bubbles.length > 11) {
      board.removeChild(bubbles[0]);
      bubbles.shift();
   
    }
    if (count >= pointThreshold) { // verifica se atingiu o limite de pontos
      clearInterval(bubbleInterval); // interrompe o intervalo atual
      var newSpeed = 1000 * (1 - speedIncrease); // calcula a nova velocidade
      bubbleInterval = setInterval(function () {
        // continua com o intervalo atual usando a nova velocidade
        var bubble = document.createElement("div");
        bubble.className = "bubble";
        var size = Math.floor(Math.random() * 100) + 50;
        bubble.style.width = size + "px";
        bubble.style.height = size + "px";
        bubble.style.top = Math.floor(Math.random() * 480) + "px";
        bubble.style.left = Math.floor(Math.random() * 580) + "px";
        board.appendChild(bubble);
        bubbles.push(bubble);
        if (bubbles.length > 11) {
          board.removeChild(bubbles[0]);
          bubbles.shift();
          if (bubbles.length > 10) {
        
            clearInterval(bubbleInterval);
            restartButton.style.display = "none";
            startButton.style.display = "block";
      
            
          }
        }
      }, newSpeed);
      pointThreshold += 10; // atualiza o limite de pontos
    }
  }, 1000);

  board.addEventListener("click", function (event) {
    if (event.target.classList.contains("bubble")) {
      board.removeChild(event.target);
      count++;
      score.innerHTML = count;
    }
  });
});

restartButton.addEventListener("click", function () {
  location.reload();
});
