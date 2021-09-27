import type {Meta, ComponentStory} from '@storybook/react';
import ${TM:COMPONENT_NAME}, {Props} from './${TM:COMPONENT_NAME}';

const Template = (args: Props) => <${TM:COMPONENT_NAME} {...args} />;

export const Default: ComponentStory<typeof ${TM:COMPONENT_NAME}> = Template.bind({});
Default.args = {};

const storyMeta: Meta<Props> = {
  title: 'App/${TM:COMPONENT_NAME}',
  component: ${TM:COMPONENT_NAME},
  argTypes: {},
};

export default storyMeta;
