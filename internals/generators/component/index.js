/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

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
        templateFile: './component/template/github-publish.yml.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/tsconfig.json',
        templateFile: './component/template/tsconfig.json.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/package.json',
        templateFile: './component/template/package.json.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/index.ts',
        templateFile: './component/template/index.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/src/index.ts',
        templateFile: './component/template/src/index.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/src/{{properCase name}}.tsx',
        templateFile: './component/template/src/Component.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/stories/{{properCase name}}.stories.tsx',
        templateFile: './component/template/stories/Component.stories.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/test/{{properCase name}}.spec.tsx',
        templateFile: './component/template/test/Component.spec.tsx.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
