const writeJSON = (projectName, dependencies) => {
    const frmwkPackages = {
        "Express.js": `"express": "^4.18.2"`,
    };
    let template = ""
    const dependenciesValues = Object.values(dependencies)
    dependenciesValues.forEach((dependencie,index) => {
        if (dependencie != false) {
            if (index == dependenciesValues.length - 1 && dependenciesValues.length > 1) {
                template = `${template}${frmwkPackages[dependencie]},`
            } else {
                template = `${template}${frmwkPackages[dependencie]}`
            }
        }
    })
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

export default writeJSON
