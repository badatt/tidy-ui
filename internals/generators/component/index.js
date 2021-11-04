/**
 * Component Generator
 */

/* eslint strict: ["off"] */

"use strict";

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add a ui component library",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "my-new-component",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A package with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: "../../packages/{{properCase name}}/tsconfig.json",
        templateFile: "./component/template/tsconfig.json.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../packages/{{properCase name}}/package.json",
        templateFile: "./component/template/package.json.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../packages/{{properCase name}}/index.ts",
        templateFile: "./component/template/index.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../packages/{{properCase name}}/src/index.ts",
        templateFile: "./component/template/src/index.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../packages/{{properCase name}}/src/{{properCase name}}.tsx",
        templateFile: "./component/template/src/Component.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path:
          "../../packages/{{properCase name}}/stories/{{properCase name}}.stories.tsx",
        templateFile: "./component/template/stories/Component.stories.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path:
          "../../packages/{{properCase name}}/test/{{properCase name}}.spec.tsx",
        templateFile: "./component/template/test/Component.spec.tsx.hbs",
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
