import React from 'react';
import renderer from 'react-test-renderer';
import ${TM:COMPONENT_NAME} from './${TM:COMPONENT_NAME}';

it('Renders ${TM:COMPONENT_NAME} correctly', () => {
  const tree = renderer.create(<${TM:COMPONENT_NAME} />).toJSON();
  expect(tree).toMatchSnapshot();
});
