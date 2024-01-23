import { ResetFigure, placeFigureBoard, Buller } from '../utils/helpers';
import { BULLET_SPEET } from '../config/config';

export const FuncionalityNave = (e) => {
  ResetFigure(enviroment.nave.figure, enviroment.nave.position);

  if (e.key === 'ArrowUp' && enviroment.nave.position.y !== 0)
    enviroment.nave.position.y--;
  if (e.key === 'ArrowDown' && enviroment.nave.position.y !== 27)
    enviroment.nave.position.y++;
  if (e.key === 'ArrowLeft' && enviroment.nave.position.x !== 0)
    enviroment.nave.position.x--;
  if (e.key === 'ArrowRight' && enviroment.nave.position.x !== 17)
    enviroment.nave.position.x++;

  enviroment.buller.position = { ...enviroment.nave.position };

  if (enviroment.buller.position.y === 0) {
    enviroment.buller.position = { ...enviroment.nave.position };
  }

  if (e.key === ' ') {
    // wasBuller = true;
    const newBuller = new Buller({ ...enviroment.nave.position });
    const idInt = setInterval(() => {
      // keep the start pixel to the nave in its your place
      ResetFigure(enviroment.nave.figure, enviroment.nave.position);
      placeFigureBoard(enviroment.nave.figure, enviroment.nave.position);

      ResetFigure(enviroment.buller.figure, newBuller.position);
      newBuller.position.y--;
      placeFigureBoard(enviroment.buller.figure, newBuller.position);

      if (newBuller.position.y === 0) {
        ResetFigure(enviroment.buller.figure, newBuller.position);
        enviroment.buller.position = { ...enviroment.nave.position };
        clearInterval(idInt);
      }
    }, BULLET_SPEET);
  }

  placeFigureBoard(enviroment.nave.figure, enviroment.nave.position);
  enviroment.buller.position = { ...enviroment.nave.position };
};
