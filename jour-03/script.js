
import { Game } from './class/Game.js';

const game = new Game('X', 'O');
document.getElementById('play').addEventListener('click', () => game.startNewGame());
