import React from 'react';
import style from './style.styl';

const Button = ({ children }) => {
  return <button className={style.root}>{children}</button>
};

export default Button;