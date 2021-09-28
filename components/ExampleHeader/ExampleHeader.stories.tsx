import type {Meta, ComponentStory} from '@storybook/react';
import ExampleHeader, {Props} from './ExampleHeader';

const Template = (args: Props) => <ExampleHeader {...args} />;

export const Default: ComponentStory<typeof ExampleHeader> = Template.bind({});
Default.args = {};

export const WithHiddenLogo: ComponentStory<typeof ExampleHeader> = Template.bind({});
WithHiddenLogo.args = {
  isLogoHidden: true,
};

const storyMeta: Meta<Props> = {
  title: 'Examples/ExampleHeader',
  component: ExampleHeader,
};

export default storyMeta;
