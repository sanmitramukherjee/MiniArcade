    let board = Array(9).fill(null);
    let xIsNext = true;
    const boardElement = document.getElementById("board");
    const statusElement = document.getElementById("status");

    function renderBoard() {
      boardElement.innerHTML = "";
      board.forEach((val, i) => {
        const square = document.createElement("div");
        square.className = "square";
        square.textContent = val;
        square.onclick = () => handleClick(i);
        boardElement.appendChild(square);
      });
      updateStatus();
    }

    function handleClick(index) {
      if (board[index] || calculateWinner(board)) return;
      board[index] = xIsNext ? "X" : "O";
      xIsNext = !xIsNext;
      renderBoard();
    }

    function updateStatus() {
      const winner = calculateWinner(board);
      if (winner) {
        statusElement.textContent = `Winner: ${winner}`;
      } else if (board.every(Boolean)) {
        statusElement.textContent = "It's a draw!";
      } else {
        statusElement.textContent = `Next Player: ${xIsNext ? "X" : "O"}`;
      }
    }

    function restartGame() {
      board = Array(9).fill(null);
      xIsNext = true;
      renderBoard();
    }

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

    renderBoard();