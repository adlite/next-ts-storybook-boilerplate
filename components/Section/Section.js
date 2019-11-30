// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Container from 'components/Container';
import Typography from 'components/Typography';
import style from './style.scss';

const Section = ({className, children, title, hasPaddings, color}) => {
  const classes = cn({
    [style.Section]: true,
    [style.hasPaddings]: hasPaddings,
    [style[color]]: color,
    [className]: className,
  });

  return (
    <div className={classes}>
      <Container>
        {title && (
          <Typography variant="heading2" hasMargin>
            {title}
          </Typography>
        )}
        <div>{children}</div>
      </Container>
    </div>
  );
};

Section.defaultProps = {
  className: '',
  title: '',
  hasPaddings: true,
  color: 'transparent',
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  hasPaddings: PropTypes.bool,
  color: PropTypes.oneOf(['transparent', 'bg', 'brand']),
};

export default Section;
