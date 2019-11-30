import React from 'react';
import renderer from 'react-test-renderer';
import Container from './Container';

it('Renders Container correctly', () => {
  const tree = renderer.create(<Container>Text</Container>).toJSON();
  expect(tree).toMatchSnapshot();
});
