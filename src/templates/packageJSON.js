const writeJSON = (projectName, dependencies) => {
    const packages = {
        "Express.js": '"express": "^4.18.2"',
        Morgan: '"morgan": "^1.10.0"',
    };
    let template = "";
    const dependenciesValues = Object.values(dependencies).filter(d => d != false);
    console.log(dependenciesValues)
    dependenciesValues.forEach((dependencie, index) => {
        if (dependenciesValues.length > 1) {
            if (index == dependenciesValues.length - 1) {
                template = `${template}${packages[dependencie]}`;
            } else {
                template = `${template}${packages[dependencie]},`;
            }
        } else {
            template = `${template}${packages[dependencie]}`;
        }
    });
    return `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {},
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {${template}}
}
`;
};

export default writeJSON;
