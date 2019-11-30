import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Button = ({children}) => {
  return (
    <button className={style.Button}>
      <span className={style.textSpan}>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
