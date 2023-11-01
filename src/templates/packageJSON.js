import packageProps from "../lib/packageProps.js";

const writeJSON = (projectName, dependencies, scripts, srcDir) => {
    const packages = {
        "Express.js": '"express": "^4.18.2"',
        Morgan: '"morgan": "^1.10.0"',
    };
    const dependenciesValues = Object.values(dependencies).filter(
        (d) => d != false
    );
    const packageTemplate = packageProps(packages, dependenciesValues);
    const scriptsCommands = {
        dev: srcDir
            ? '"dev": "node --watch ./src/index.js"'
            : '"dev": "node --watch ./index.js"',
    };
    const scriptsValues = Object.keys(scripts);
    const scriptTemplate = packageProps(scriptsCommands, scriptsValues);
    return `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {${scriptTemplate}},
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {${packageTemplate}}
}
`;
};

export default writeJSON;
