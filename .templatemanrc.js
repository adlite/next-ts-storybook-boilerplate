/**
 * Templateman config
 * @see https://github.com/adlite/templateman
 */
module.exports = {
  templates: [
    {
      name: 'React Component Function',
      files: [
        {
          from: './templates/react-func.js.tm',
          to: './components/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.js',
        },
        {
          from: './templates/style-file.scss.tm',
          to: './components/${TM:COMPONENT_NAME}/style.module.scss',
        },
        {
          from: './templates/export-module.js.tm',
          to: './components/${TM:COMPONENT_NAME}/index.js',
        },
        {
          from: './templates/storybook-stories.js.tm',
          to: './components/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.stories.js',
        },
      ],
    },
    {
      name: 'React Component Class',
      files: [
        {
          from: './templates/react-class.js.tm',
          to: './components/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.js',
        },
        {
          from: './templates/style-file.scss.tm',
          to: './components/${TM:COMPONENT_NAME}/style.module.scss',
        },
        {
          from: './templates/export-module.js.tm',
          to: './components/${TM:COMPONENT_NAME}/index.js',
        },
        {
          from: './templates/storybook-stories.js.tm',
          to: './components/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.stories.js',
        },
      ],
    },
    {
      name: 'React Page',
      files: [
        {
          from: './templates/react-page.js.tm',
          to: './pages/${TM:URL}/index.js',
        },
      ],
    },
    {
      name: 'App Section',
      files: [
        {
          from: './templates/export-module.js.tm',
          to: './sections/${TM:PAGE_ROUTE}/${TM:COMPONENT_NAME}/index.js',
        },
        {
          from: './templates/app-section.js.tm',
          to: './sections/${TM:PAGE_ROUTE}/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.js',
        },
        {
          from: './templates/style-file.scss.tm',
          to: './sections/${TM:PAGE_ROUTE}/${TM:COMPONENT_NAME}/style.module.scss',
        },
      ],
    },
    {
      name: 'MobX State Tree Model',
      files: {
        from: './templates/mobx-state-tree-model.js.tm',
        to: './store/models/${TM:MODEL_NAME}.js',
      },
    },
    {
      name: 'React Component Function (partial)',
      files: {
        from: './templates/react-func.js.tm',
        to: './components/${TM:PARENT_COMPONENT_NAME}/${TM:COMPONENT_NAME}.js',
      },
    },
    {
      name: 'React Component Class (partial)',
      files: {
        from: './templates/react-class.js.tm',
        to: './components/${TM:PARENT_COMPONENT_NAME}/${TM:COMPONENT_NAME}.js',
      },
    },
    {
      name: 'Storybook Stories (partial)',
      files: {
        from: './templates/storybook-stories.js.tm',
        to: './components/${TM:PARENT_COMPONENT_NAME}/${TM:COMPONENT_NAME}.stories.js',
      },
    },
  ],
};
