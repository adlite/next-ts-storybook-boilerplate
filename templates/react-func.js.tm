import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './style.module.scss';

function ${TM:COMPONENT_NAME}({className}) {
  return (
    <div className={cn(style.${TM:COMPONENT_NAME}, className)}>
      ${TM:COMPONENT_NAME} component
    </div>
  );
}

${TM:COMPONENT_NAME}.defaultProps = {
  className: '',
};

${TM:COMPONENT_NAME}.propTypes = {
  className: PropTypes.string,
};

export default ${TM:COMPONENT_NAME};
