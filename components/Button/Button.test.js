import React from 'react';
import renderer from 'react-test-renderer';
import CheckIcon from 'assets/icons/check.svg';
import Button from './Button';

it('Renders Button correctly', () => {
  const elements = (
    <ul>
      <li>
        <Button>Click me</Button>
      </li>
      <li>
        <Button isLoading>Click me</Button>
      </li>
      <li>
        <Button href="//ya.ru" targetBlank>
          Link button
        </Button>
      </li>
      <li>
        <Button icon={CheckIcon} targetBlank>
          With icon
        </Button>
      </li>
      <li>
        <Button icon={CheckIcon} iconSize={40} targetBlank>
          With custom sized icon
        </Button>
      </li>
    </ul>
  );
  const tree = renderer.create(elements).toJSON();
  expect(tree).toMatchSnapshot();
});
