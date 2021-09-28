import cn from 'classnames';

import {PropsWithChildren, PropsWithClassName} from '~/components/types';
import ExampleHeader from '~/components/ExampleHeader';
import style from './style.module.scss';

export interface Props extends PropsWithClassName, PropsWithChildren {}

export default function ExampleLayout({className = '', children}: Props): JSX.Element {
  return (
    <div className={cn(style.ExampleLayout, className)}>
      <ExampleHeader />
      <main className={style.main}>{children}</main>
    </div>
  );
}
