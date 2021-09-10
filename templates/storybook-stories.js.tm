import ${TM:COMPONENT_NAME} from './${TM:COMPONENT_NAME}';

export default {
  title: 'App/${TM:COMPONENT_NAME}',
  component: ${TM:COMPONENT_NAME},
  argTypes: {},
};

const Template = (args) => <${TM:COMPONENT_NAME} {...args} />;

export const Default = Template.bind({});
Default.args = {};
