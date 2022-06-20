const path = require("path");
const {lstatSync, readdirSync} = require("fs");

// get listing of packages in mono repo
const basePath = path.resolve(__dirname, "packages");
const packages = readdirSync(basePath).filter((name) =>
    lstatSync(path.join(basePath, name)).isDirectory()
);

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",

    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest",
        ...packages.reduce(
            (acc, name) => ({
                ...acc,
                [`@tidy-ui/${name}(.*)$`]: `<rootDir>/packages/./${name}/src/$1`,
            }),
            {}
        ),
    },
    modulePathIgnorePatterns: [
        ...packages.reduce(
            (acc, name) => [...acc, `<rootDir>/packages/${name}/build`],
            []
        ),
    ],
};