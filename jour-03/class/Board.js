export class Board {
    constructor() {
        this.grid = [];
        this.hasWinner = false;
    }

    initializeBoard() {
        this.grid = [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]
        ];
        this.hasWinner = false;
    }

    displayBoard() {
        const boardDiv = document.getElementById('board');
        boardDiv.innerHTML = '';
        for(let i = 0; i < 3; i++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';
            for(let j = 0; j < 3; j++) {
                const btn = document.createElement('button');
                btn.id = `btn-${i}-${j}`;
                btn.className = 'case';
                btn.innerText = this.grid[i][j];
                rowDiv.appendChild(btn);
            }
            boardDiv.appendChild(rowDiv);
        }
    }

    placeMove(row, col, symbol) {
        if(this.grid[row][col] === "-") {
            this.grid[row][col] = symbol;
            return true;
        }
        return false;
    }

    checkVictory() {
        // Vérification des lignes, colonnes et diagonales
        for(let i = 0; i < 3; i++) {
            if(this.grid[i][0] !== '-' && this.grid[i][0] === this.grid[i][1] && this.grid[i][0] === this.grid[i][2]) {
                this.hasWinner = true;
                return true;
            }
            if(this.grid[0][i] !== '-' && this.grid[0][i] === this.grid[1][i] && this.grid[0][i] === this.grid[2][i]) {
                this.hasWinner = true;
                return true;
            }
        }
        
        if(this.grid[0][0] !== '-' && this.grid[0][0] === this.grid[1][1] && this.grid[0][0] === this.grid[2][2]) {
            this.hasWinner = true;
            return true;
        }
        
        if(this.grid[0][2] !== '-' && this.grid[0][2] === this.grid[1][1] && this.grid[0][2] === this.grid[2][0]) {
            this.hasWinner = true;
            return true;
        }
        
        return false;
    }

    isFull() {
        return this.grid.flat().every(cell => cell !== "-");
    }

    resetBoard() {
        this.initializeBoard();
        this.displayBoard();
    }
}
