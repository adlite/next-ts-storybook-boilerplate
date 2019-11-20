import React from 'react';
import style from './style.scss';

const Button = ({ children }) => {
  return (
      <button className={style.root}>
        <span className={style.textSpan}>{children}</span></button>
  );
};

export default Button;