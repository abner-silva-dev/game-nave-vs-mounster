import './style.css';
import {
  ResetFigure,
  placeFigureBoard,
  Buller,
  Enemy,
  renderLives,
} from './src/utils/helpers';
import { FuncionalityNave } from './src/features/nave';
import {
  BLOCK_SIZE,
  BOART_HEIGHT,
  BOART_WIDTH,
  ENEMY_SPEET,
  livesDiv,
} from './src/config/config';
import { createWaveMounsters } from './src/features/enemy';
import { update } from './src/render';

// 2) FIGURES

// 1) INIT CONFIGURATION

// let indexEnemies = [];
// let wasBuller = false;
// let wasCollision = false;

// 4) HEAR OF APP, RENDER
update();

// 5) Place nave in board
placeFigureBoard(enviroment.nave.figure, enviroment.nave.position);
placeFigureBoard(enviroment.buller.figure, enviroment.buller.position);

window.addEventListener('load', () => {
  setTimeout(() => createWaveMounsters(ENEMY_SPEET), 1);
});

renderLives(NUMBER_OF_LIVES, livesDiv);
document.addEventListener('keydown', FuncionalityNave);
