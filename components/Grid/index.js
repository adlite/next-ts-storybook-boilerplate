import React from 'react';
import style from './style.scss';

const Grid = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.column}>1</div>
        <div className={style.column}>2</div>
        <div className={style.column}>3</div>
        <div className={style.column}>4</div>
        <div className={style.column}>5</div>
        <div className={style.column}>6</div>
        <div className={style.column}>7</div>
        <div className={style.column}>8</div>
        <div className={style.column}>9</div>
        <div className={style.column}>10</div>
        <div className={style.column}>11</div>
      </div>
    </div>
  );
};

export default Grid;
