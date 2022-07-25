/**
 * Component Generator
 */

'use strict';

const componentExists = require('../componentExists');
const templateDir = './component';
const componentDest = '../../packages';

module.exports = {
  description: 'Add a ui component library',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'my-new-component',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A package with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: () => {
    return [
      {
        type: 'add',
        path: `${componentDest}/{{name}}/.prettierignore`,
        templateFile: `${templateDir}/.prettierignore.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentDest}/{{name}}/babel.config.js`,
        templateFile: `${templateDir}/babel.config.js.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentDest}/{{name}}/tsconfig.json`,
        templateFile: `${templateDir}/tsconfig.json.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentDest}/{{name}}/package.json`,
        templateFile: `${templateDir}/package.json.hbs`,
        abortOnFail: true,
      },
      {
        type: 'addMany',
        destination: `${componentDest}/{{name}}/`,
        templateFiles: `${templateDir}/src/**/*`,
        abortOnFail: true,
      },
      {
        type: 'addMany',
        destination: `${componentDest}/{{name}}/`,
        templateFiles: `${templateDir}/tests/**/*`,
        abortOnFail: true,
      },
      {
        type: 'addMany',
        destination: `${componentDest}/{{name}}/`,
        templateFiles: `${templateDir}/stories/**/*`,
        abortOnFail: true,
      },
    ];
  },
};
