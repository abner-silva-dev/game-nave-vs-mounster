export const BULLET_SPEET = 10;
export const BLOCK_SIZE = 20;
export const BOART_WIDTH = 20;
export const BOART_HEIGHT = 30;
export const ENEMY_SPEET = 100;

export const livesDiv = document.querySelector('.lives__hearts');

window.NUMBER_OF_LIVES = 3;

window.board = Array.from({ length: 30 }, (i) =>
  Array.from({ length: 20 }, () => 0)
);

window.enviroment = {
  nave: {
    position: { x: 9, y: 27 },
    figure: [
      [0, 1, 0],
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  buller: {
    position: {},
    figure: [[0, 1, 0]],
  },
  enemy: {
    enemies: [],
    figure: [[1]],
  },
};

// Put buller in the same position that the nave
enviroment.buller.position = { ...enviroment.nave.position };
