import ExampleHeader from './ExampleHeader';

export default {
  title: 'Examples/ExampleHeader',
  component: ExampleHeader,
  argTypes: {},
};

const Template = args => <ExampleHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithHiddenLogo = Template.bind({});
WithHiddenLogo.args = {
  isLogoHidden: true,
};
