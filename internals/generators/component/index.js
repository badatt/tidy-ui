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
        path: `${componentDest}/{{name}}/src/{{ properCase name }}.tsx`,
        templateFile: `${templateDir}/src/Component.tsx.hbs`,
        type: 'add',
      },
      {
        abortOnFail: true,
        path: `${componentDest}/{{name}}/src/index.ts`,
        templateFile: `${templateDir}/src/index.ts.hbs`,
        type: 'add',
      },
      {
        abortOnFail: true,
        path: `${componentDest}/{{name}}/src/types.ts`,
        templateFile: `${templateDir}/src/types.ts.hbs`,
        type: 'add',
      },
      {
        abortOnFail: true,
        path: `${componentDest}/{{name}}/stories/{{ properCase name }}.stories.tsx`,
        templateFile: `${templateDir}/stories/Component.stories.tsx.hbs`,
        type: 'add',
      },
      {
        abortOnFail: true,
        path: `${componentDest}/{{name}}/tests/{{ properCase name }}.spec.tsx`,
        templateFile: `${templateDir}/tests/Component.spec.tsx.hbs`,
        type: 'add',
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
