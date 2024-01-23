import { livesDiv } from '../config/config';
import {
  Enemy,
  ResetFigure,
  placeFigureBoard,
  renderLives,
} from '../utils/helpers';

export const createWaveMounsters = (ENEMY_SPEET) => {
  board.at(0).forEach((item, x) => {
    if (Math.floor(Math.random() * 2) === 1) {
      const newEnemy = new Enemy({ y: 0, x });

      enviroment.enemy.enemies.push(newEnemy);
      placeFigureBoard(enviroment.enemy.figure, newEnemy.position);
    }
  });

  const idInt = setInterval(() => {
    const collision = enviroment.enemy.enemies.some(
      (enemy) => board.at(enemy.position.y + 1).at(enemy.position.x) === 1
    );

    if (collision) {
      renderLives(--NUMBER_OF_LIVES, livesDiv);
    }

    if (enviroment.enemy.enemies.at(0).position.y + 1 !== 30) {
      enviroment.enemy.enemies.forEach((enemy) => {
        ResetFigure(enviroment.enemy.figure, enemy.position);
        enemy.position.y++;
        placeFigureBoard(enviroment.enemy.figure, enemy.position);
      });
    }

    if (enviroment.enemy.enemies.at(0).position.y === 29) {
      enviroment.enemy.enemies.forEach((enemy) => {
        ResetFigure(enviroment.enemy.figure, enemy.position);
      });

      enviroment.enemy.enemies = [];

      ResetFigure(enviroment.nave.figure, enviroment.nave.position);

      placeFigureBoard(enviroment.nave.figure, enviroment.nave.position);

      createWaveMounsters(ENEMY_SPEET);

      clearInterval(idInt);
    }
  }, ENEMY_SPEET);
};
