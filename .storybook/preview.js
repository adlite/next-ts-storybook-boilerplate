import './next-js-adapter';
import '~/styles/base.scss';
import '~/styles/storybook.scss';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  backgrounds: {
    default: 'primary',
    values: [
      {
        name: 'primary',
        value: '#e1ebf3',
      },
      {
        name: 'secondary',
        value: '#000000',
      },
    ],
  },
};
