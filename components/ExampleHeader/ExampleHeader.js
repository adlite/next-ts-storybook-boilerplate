import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from 'next/link';

import ExampleLogo from '@/public/assets/icons/example-logo.svg';
import style from './style.module.scss';

function ExampleHeader({className, isLogoHidden}) {
  return (
    <header className={cn(style.ExampleHeader, className)}>
      {isLogoHidden || (
        <Link href="/" passHref={false}>
          <div>
            <ExampleLogo className={style.logo} />
          </div>
        </Link>
      )}
    </header>
  );
}

ExampleHeader.defaultProps = {
  className: '',
  isLogoHidden: false,
};

ExampleHeader.propTypes = {
  className: PropTypes.string,
  isLogoHidden: PropTypes.bool,
};

export default ExampleHeader;
