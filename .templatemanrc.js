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
          to: './components/${TM:COMPONENT_NAME}/style.scss',
        },
        {
          from: './templates/export-module.js.tm',
          to: './components/${TM:COMPONENT_NAME}/index.js',
        },
        {
          from: './templates/react-test-spec.js.tm',
          to: './components/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.test.js',
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
          to: './components/${TM:COMPONENT_NAME}/style.scss',
        },
        {
          from: './templates/export-module.js.tm',
          to: './components/${TM:COMPONENT_NAME}/index.js',
        },
        {
          from: './templates/react-test-spec.js.tm',
          to: './components/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.test.js',
        },
      ],
    },
    {
      name: 'React Component Connected Class',
      files: [
        {
          from: './templates/react-connected-class.js.tm',
          to: './components/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.js',
        },
        {
          from: './templates/style-file.scss.tm',
          to: './components/${TM:COMPONENT_NAME}/style.scss',
        },
        {
          from: './templates/export-module.js.tm',
          to: './components/${TM:COMPONENT_NAME}/index.js',
        },
        {
          from: './templates/react-test-spec.js.tm',
          to: './components/${TM:COMPONENT_NAME}/${TM:COMPONENT_NAME}.test.js',
        },
      ],
    },
    {
      name: 'Next Page',
      files: [
        {
          from: './templates/next-page.js.tm',
          to: './pages/${TM:URL}.js',
        },
      ],
    },
    {
      name: 'Redux Duck Module',
      files: {
        from: './templates/redux-duck.js.tm',
        to: './store/modules/${TM:DUCK_NAME}.js',
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
      name: 'React Component Connected Class (partial)',
      files: {
        from: './templates/react-connected-class.js.tm',
        to: './components/${TM:PARENT_COMPONENT_NAME}/${TM:COMPONENT_NAME}.js',
      },
    },
    {
      name: 'React Test Spec',
      files: {
        from: './templates/react-test-spec.js.tm',
        to: './components/${TM:PARENT_COMPONENT_NAME}/${TM:COMPONENT_NAME}.test.js',
      },
    },
  ],
};
