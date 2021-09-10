import ExampleLayout from './ExampleLayout';

export default {
  title: 'Examples/ExampleLayout',
  component: ExampleLayout,
  argTypes: {},
};

const Template = args => <ExampleLayout {...args}>Page content here</ExampleLayout>;

export const Default = Template.bind({});
Default.args = {};
