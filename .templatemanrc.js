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
          from: './templates/react-func.tm',
          to: './components/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.tsx',
        },
        {
          from: './templates/style-file.scss.tm',
          to: './components/${TM:COMPONENT_NAME}/style.module.scss',
        },
        {
          from: './templates/export-module.tm',
          to: './components/${TM:COMPONENT_NAME}/index.ts',
        },
        {
          from: './templates/storybook-stories.tm',
          to: './components/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.stories.tsx',
        },
      ],
    },
    {
      name: 'React Component Class',
      files: [
        {
          from: './templates/react-class.tm',
          to: './components/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.tsx',
        },
        {
          from: './templates/style-file.scss.tm',
          to: './components/${TM:COMPONENT_NAME}/style.module.scss',
        },
        {
          from: './templates/export-module.tm',
          to: './components/${TM:COMPONENT_NAME}/index.ts',
        },
        {
          from: './templates/storybook-stories.tm',
          to: './components/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.stories.tsx',
        },
      ],
    },
    {
      name: 'React Page',
      files: [
        {
          from: './templates/react-page.tm',
          to: './pages/${TM:URL}/index.tsx',
        },
      ],
    },
    {
      name: 'App Section',
      files: [
        {
          from: './templates/export-module.tm',
          to: './sections/${TM:PAGE_ROUTE}/${TM:COMPONENT_NAME}/index.ts',
        },
        {
          from: './templates/app-section.tm',
          to: './sections/${TM:PAGE_ROUTE}/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.tsx',
        },
        {
          from: './templates/style-file.scss.tm',
          to: './sections/${TM:PAGE_ROUTE}/${TM:COMPONENT_NAME}/style.module.scss',
        },
      ],
    },
    {
      name: 'React Component Function (partial)',
      files: {
        from: './templates/react-func.tm',
        to: './components/${TM:PARENT_COMPONENT_NAME}/${TM:COMPONENT_NAME}.tsx',
      },
    },
    {
      name: 'React Component Class (partial)',
      files: {
        from: './templates/react-class.tm',
        to: './components/${TM:PARENT_COMPONENT_NAME}/${TM:COMPONENT_NAME}.tsx',
      },
    },
    {
      name: 'Storybook Stories (partial)',
      files: {
        from: './templates/storybook-stories.tm',
        to: './components/${TM:PARENT_COMPONENT_NAME}/${TM:COMPONENT_NAME}.stories.tsx',
      },
    },
  ],
};
