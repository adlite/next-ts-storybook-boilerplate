import cn from 'classnames';

import {PropsWithClassName} from '~/components/types';
import style from './style.module.scss';

export interface Props extends PropsWithClassName {}

export default function ${TM:COMPONENT_NAME}({className = ''}: Props): JSX.Element {
  return (
    <div className={cn(style.${TM:COMPONENT_NAME}, className)}>
      ${TM:COMPONENT_NAME} component
    </div>
  );
}
