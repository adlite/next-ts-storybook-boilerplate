import React from 'react';
import renderer from 'react-test-renderer';
import Grid from './Grid';

it('Renders Grid correctly', () => {
  const tree = renderer.create(<Grid />).toJSON();
  expect(tree).toMatchSnapshot();
});
