import { BLOCK_SIZE, BOART_HEIGHT, BOART_WIDTH } from './config/config';

const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = BLOCK_SIZE * BOART_WIDTH;
canvas.height = BLOCK_SIZE * BOART_HEIGHT;

canvasContext.scale(BLOCK_SIZE, BLOCK_SIZE);

const draw = () => {
  if (NUMBER_OF_LIVES === 0) return;

  canvasContext.fillStyle = '#000';
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  board.forEach((row, y) => {
    row.forEach((col, x) => {
      if (col === 1) {
        canvasContext.fillStyle = '#f8f9fa';
        canvasContext.fillRect(x, y, 1, 1);
      }
    });
  });
};

export const update = () => {
  draw();
  window.requestAnimationFrame(update);
};
