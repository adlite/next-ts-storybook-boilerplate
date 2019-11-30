// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import parseHtml from 'react-html-parser';
// Styles
import style from './style.scss';

const getTagNameFromVariant = variant => {
  switch (variant) {
    case 'heading1':
      return 'h1';
    case 'heading2':
      return 'h2';
    case 'heading3':
      return 'h3';
    case 'heading4':
      return 'h4';
    case 'heading5':
      return 'h5';
    case 'heading6':
      return 'h6';
    case 'paragraph':
      return 'p';
    default:
      return 'div';
  }
};

const Typography = ({
  className,
  children,
  variant,
  tagName,
  hasHtml,
  hasMargin,
  uppercase,
  secondary,
  zeroLineHeight,
  ...props
}) => {
  const TagName = tagName ? tagName : getTagNameFromVariant(variant);
  const classes = cn({
    [style.Typography]: true,
    [style[variant]]: variant,
    [style.uppercase]: uppercase,
    [style.hasMargin]: hasMargin,
    [style.secondary]: secondary,
    [style.zeroLineHeight]: zeroLineHeight,
    [className]: className,
  });

  return (
    <TagName className={classes} {...props}>
      {hasHtml ? parseHtml(children) : children}
    </TagName>
  );
};

Typography.defaultProps = {
  className: '',
  tagName: null,
  secondary: false,
  hasHtml: false,
  hasMargin: false,
  uppercase: false,
  zeroLineHeight: false,
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'paragraph'])
    .isRequired,
  className: PropTypes.string,
  tagName: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  hasHtml: PropTypes.bool,
  hasMargin: PropTypes.bool,
  uppercase: PropTypes.bool,
  secondary: PropTypes.bool,
  zeroLineHeight: PropTypes.bool,
};

export default Typography;
