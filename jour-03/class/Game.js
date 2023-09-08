import { Player } from './Player.js';
import { Board } from './Board.js';

export class Game {
    constructor(player1, player2) {
        this.player1 = new Player(player1);
        this.player2 = new Player(player2);
        this.board = new Board();
        this.currentTurn = this.player1;
        this.player1.isCurrentPlayer = true;
        this.turnCount = 0;  
    }

    startNewGame() {
        document.getElementById("message").textContent = ""; 
        this.board.initializeBoard();
        this.board.displayBoard();
        this.registerMove();
        this.currentTurn = this.player1;
        this.player1.isCurrentPlayer = true;
        this.turnCount = 0;  
        document.getElementById('current-player').innerText = `Joueur actuel: ${this.currentTurn.symbol}`;
    }

    makeMove(row, col) {
        const currentPlayer = this.currentTurn;
        const isValidMove = this.board.placeMove(row, col, currentPlayer.symbol);
        
        if (isValidMove) {
            this.board.displayBoard();
            this.registerMove();  
            this.turnCount++;  
            
            if (this.checkGameOver()) {
                setTimeout(() => {
                    this.announceWinner();
                }, 100); 
                return;
            }
            this.switchTurn();
        }
    }

    switchTurn() {
        if (this.currentTurn === this.player1) {
            this.currentTurn = this.player2;
            this.player1.isCurrentPlayer = false;
            this.player2.isCurrentPlayer = true;
        } else {
            this.currentTurn = this.player1;
            this.player2.isCurrentPlayer = false;
            this.player1.isCurrentPlayer = true;
        }
        document.getElementById('current-player').innerText = `Joueur actuel: ${this.currentTurn.symbol}`;
    }

    registerMove() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                document.getElementById(`btn-${i}-${j}`).addEventListener('click', () => {
                    this.makeMove(i, j);
                });
            }
        }
    }

    checkGameOver() {
        return this.board.checkVictory() || this.board.isFull();
    }

    announceWinner() {
        if (this.board.checkVictory()) {
            document.getElementById("message").textContent = `Le joueur ${this.currentTurn.symbol} a gagné en ${this.turnCount} tours! Félicitations !`;
        } else {
            document.getElementById("message").textContent = "Match nul ! Essayez à nouveau.";
        }


        const replayButton = document.createElement("button");
        replayButton.textContent = "Rejouer";
        replayButton.addEventListener("click", () => {
            this.startNewGame();
            replayButton.remove();
        });
        document.body.appendChild(replayButton);
    }
}
