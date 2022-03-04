/**
 * Component Generator
 */

/* eslint strict: ["off"] */

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
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: '../../.github/workflows/publish-{{name}}.yml',
        templateFile: `${templateDir}/github-publish.yml.hbs`,
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
        type: 'add',
        path: `${componentDest}/{{name}}/sonar-project.properties`,
        templateFile: `${templateDir}/sonar-project.properties.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentDest}/{{name}}/jest.config.js`,
        templateFile: `${templateDir}/jest.config.js.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentDest}/{{name}}/index.ts`,
        templateFile: `${templateDir}/index.ts.hbs`,
        abortOnFail: true,
      },
      {
        type: 'addMany',
        destination: `${componentDest}/{{name}}/`,
        templateFiles: `${templateDir}/src/**/*`,
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
