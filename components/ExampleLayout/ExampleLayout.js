import PropTypes from 'prop-types';
import cn from 'classnames';

import ExampleHeader from '@/components/ExampleHeader';
import style from './style.module.scss';

function ExampleLayout({className, children}) {
  return (
    <div className={cn(style.ExampleLayout, className)}>
      <ExampleHeader />
      <main className={style.main}>{children}</main>
    </div>
  );
}

ExampleLayout.defaultProps = {
  className: '',
};

ExampleLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ExampleLayout;
