import type {Meta, ComponentStory} from '@storybook/react';
import ExampleLayout, {Props} from './ExampleLayout';

const Template = (args: Props) => <ExampleLayout {...args}>Page content here</ExampleLayout>;

export const Default: ComponentStory<typeof ExampleLayout> = Template.bind({});
Default.args = {};

const storyMeta: Meta<Props> = {
  title: 'Examples/ExampleLayout',
  component: ExampleLayout,
  argTypes: {},
};

export default storyMeta;
