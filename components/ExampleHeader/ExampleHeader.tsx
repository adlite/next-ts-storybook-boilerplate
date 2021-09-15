import cn from 'classnames';
import Link from 'next/link';

import {PropsWithClassName} from '@/components/types';
import ExampleLogo from '@/public/assets/icons/example-logo.svg';
import style from './style.module.scss';

export interface Props extends PropsWithClassName {
  isLogoHidden?: boolean;
}

export default function ExampleHeader({className = '', isLogoHidden = false}: Props): JSX.Element {
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
