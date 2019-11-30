import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

it('Renders Link correctly', () => {
  const elements = (
    <ul>
      <li>
        <Link href="/" activeClassName="active">
          Main page
        </Link>
      </li>
      <li>
        <Link href="/about" activeClassName="active">
          About
        </Link>
      </li>
      <li>
        <Link href="//ya.ru">External</Link>
      </li>
      <li>
        <Link href="//ya.ru" targetBlank>
          External with targetBlank
        </Link>
      </li>
      <li>
        <Link href="+79993335544" protocol="tel">
          Call me
        </Link>
      </li>
      <li>
        <Link href="adlite@yandex.ru" protocol="mailto">
          Send me email
        </Link>
      </li>
    </ul>
  );
  const tree = renderer.create(elements).toJSON();
  expect(tree).toMatchSnapshot();
});
