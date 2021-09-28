import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import {PropsWithClassName} from '~/components/types';
import style from './style.module.scss';

export interface Props extends PropsWithClassName {
  isLogoHidden?: boolean;
}

export default function ExampleHeader({className = '', isLogoHidden = false}: Props): JSX.Element {
  return (
    <header className={cn(style.ExampleHeader, className)}>
      {isLogoHidden || (
        <Link href="/" passHref>
          <a>
            <Image src="/assets/vector/example-logo.svg" width={192} height={57} alt="Logo" />
          </a>
        </Link>
      )}
    </header>
  );
}
