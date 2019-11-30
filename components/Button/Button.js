// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import LoaderIcon from 'assets/icons/loader.svg';
import Link from 'components/Link';
import style from './style.scss';

const defaultIconSize = 25;

const Button = ({className, children, href, isLoading, icon, iconSize, ...props}) => {
  const classes = cn({
    [style.Button]: true,
    [style.loading]: isLoading,
    [style.link]: href,
    [style.hasIcon]: icon,
    [className]: className,
  });
  const TagName = href ? Link : 'button';
  const Icon = icon;
  const combinedProps = {
    className: classes,
    ...props,
  };
  if (href) {
    combinedProps.href = href;
  }

  return (
    <TagName {...combinedProps}>
      {isLoading && (
        <span className={style.loaderBox}>
          <LoaderIcon width={defaultIconSize} height={defaultIconSize} />
        </span>
      )}
      <span className={style.content}>
        {icon && <Icon width={iconSize} height={iconSize} className={style.icon} />}
        <span>{children}</span>
      </span>
    </TagName>
  );
};

Button.defaultProps = {
  href: '',
  isLoading: false,
  icon: '',
  iconSize: defaultIconSize,
  className: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isLoading: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  iconSize: PropTypes.number,
  className: PropTypes.string,
};

export default Button;
