document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById("start");
    var restartButton = document.getElementById("restart");
    var board = document.getElementById("board");
    var score = document.querySelector("#score span");
    var bubbles = [];
    var count = 0;

    restartButton.addEventListener("click", function () {
        location.reload();
    });

    startButton.addEventListener("click", function () {
        startButton.style.display = "none";
        restartButton.style.display = "block";

        board.addEventListener("click", function (event) {
            if (event.target.classList.contains("bubble")) {
                var bubble = event.target;
                var rect = bubble.getBoundingClientRect();
                var x = event.clientX - rect.left;
                var y = event.clientY - rect.top;
                var distanceFromCenter = Math.sqrt(Math.pow(x - 50, 2) + Math.pow(y - 50, 2));
                var maxDistance = Math.sqrt(Math.pow(50, 2) + Math.pow(50, 2));
                var scoreIncrease = Math.round(10 * (1 - distanceFromCenter / maxDistance));
                count += scoreIncrease;
                score.innerHTML = count;
                board.removeChild(bubble);
            }
        });

        var bubbleInterval = setInterval(function () {
            var bubble = document.createElement("div");
            bubble.className = "bubble";
            bubble.innerHTML = `
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="red"/>
                    <circle cx="50" cy="50" r="30" fill="white"/>
                    <circle cx="50" cy="50" r="20" fill="red"/>
                    <circle cx="50" cy="50" r="10" fill="white"/>
                </svg>
            `;
            bubble.style.top = Math.floor(Math.random() * 480) + "px";
            bubble.style.left = Math.floor(Math.random() * 580) + "px";
            bubble.addEventListener("click", function () {
                board.removeChild(bubble);
                count += 1; // Pontuação fixa ao clicar na bolha
                score.innerHTML = count;
            });
            board.appendChild(bubble);
            bubbles.push(bubble);
            if (bubbles.length > 11) {
                board.removeChild(bubbles[0]);
                bubbles.shift();
            }
        }, 2000);
    });
});

  location.reload();
}

restartButton.addEventListener("click", function () {
  location.reload();
});
