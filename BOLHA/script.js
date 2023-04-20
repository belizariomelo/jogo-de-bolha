// Prompt para solicitar o nome do amor da vida
var loverName = prompt("Digite o amor da sua vida para jogar:");

// Verifica se a resposta é igual a "BELIZÁRIO" em letras minúsculas ou maiúsculas
if (loverName.toLowerCase() === "belizário") {

  // Adiciona um alerta se a resposta for correta
  alert("Own que fofo penso o mesmo Nêssa <3");

  // Esconde o botão de início e mostra o botão de reinício
  startButton.style.display = "none";
  restartButton.style.display = "block";
  
  // Inicia o intervalo para criar bolhas
  var bubbleInterval = setInterval(function () {
    // código para criar bolhas aqui
  }, 1000);

  // Código para contabilizar pontos e remover bolhas aqui
}

// Se a resposta for incorreta, recarrega a página
else {
  location.reload();
}

restartButton.addEventListener("click", function () {
  location.reload();
});
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
