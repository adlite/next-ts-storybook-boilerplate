import React from 'react';
import renderer from 'react-test-renderer';
import Section from './Section';

it('Renders Section correctly', () => {
  const elements = (
    <div>
      <Section>Text</Section>
      <Section title="Section 1">Text</Section>
      <Section title="Section 2" color="brand">
        Text
      </Section>
      <Section title="Section without paddings" hasPaddings={false} color="bg">
        Text
      </Section>
    </div>
  );
  const tree = renderer.create(elements).toJSON();
  expect(tree).toMatchSnapshot();
});
