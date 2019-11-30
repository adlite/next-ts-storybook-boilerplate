// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import style from './style.scss';

const Container = ({className, children}) => {
  return <div className={cn(style.Container, className)}>{children}</div>;
};

Container.defaultProps = {
  className: '',
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
