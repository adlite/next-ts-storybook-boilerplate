import {PureComponent} from 'react';
import cn from 'classnames';

import {PropsWithClassName} from '~/components/types';
import style from './style.module.scss';

export interface Props extends PropsWithClassName {}

export interface State {}

export default class ${TM:COMPONENT_NAME} extends PureComponent<Props, State> {
  state: State = {};

  render(): JSX.Element {
    const {className} = this.props;

    return (
      <div className={cn(style.${TM:COMPONENT_NAME}, className)}>
        ${TM:COMPONENT_NAME} component
      </div>
    );
  }
}
