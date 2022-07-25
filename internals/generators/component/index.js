/**
 * Component Generator
 */

'use strict';

const componentExists = require('../componentExists');
const templateDir = './component';
const componentDest = '../../packages';

module.exports = {
  actions: () => {
    return [
      {
        abortOnFail: true,
        path: `${componentDest}/{{name}}/tsconfig.json`,
        templateFile: `${templateDir}/tsconfig.json.hbs`,
        type: 'add',
      },
      {
        abortOnFail: true,
        path: `${componentDest}/{{name}}/package.json`,
        templateFile: `${templateDir}/package.json.hbs`,
        type: 'add',
      },
      {
        abortOnFail: true,
        destination: `${componentDest}/{{name}}/`,
        templateFiles: `${templateDir}/src/**/*`,
        type: 'addMany',
      },
      {
        abortOnFail: true,
        destination: `${componentDest}/{{name}}/`,
        templateFiles: `${templateDir}/tests/**/*`,
        type: 'addMany',
      },
      {
        abortOnFail: true,
        destination: `${componentDest}/{{name}}/`,
        templateFiles: `${templateDir}/stories/**/*`,
        type: 'addMany',
      },
    ];
  },
  description: 'Add a ui component library',
  prompts: [
    {
      default: 'my-new-component',
      message: 'What should it be called?',
      name: 'name',
      type: 'input',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A package with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
  ],
};
