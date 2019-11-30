import React from 'react';
import renderer from 'react-test-renderer';
import Typography from './Typography';

it('Renders Typography correctly', () => {
  const elements = (
    <div>
      <Typography variant="heading1" hasMargin>
        Text
      </Typography>
      <Typography variant="heading2" hasMargin>
        Text
      </Typography>
      <Typography variant="heading3" hasMargin>
        Text
      </Typography>
      <Typography variant="heading4" hasMargin>
        Text
      </Typography>
      <Typography variant="heading5" hasMargin>
        Text
      </Typography>
      <Typography variant="heading6" hasMargin>
        Text
      </Typography>
      <Typography variant="heading6" hasMargin secondary>
        Text
      </Typography>
      <Typography variant="paragraph" hasMargin>
        Text
      </Typography>
      <Typography variant="paragraph" zeroLineHeight>
        Text
      </Typography>
    </div>
  );
  const tree = renderer.create(elements).toJSON();
  expect(tree).toMatchSnapshot();
});
