export const CONTENT_NO_DEPENDENCIES = (projectName) => {
    return `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {},
  "keywords": [],
  "author": "",
  "license": "ISC"
}
`;
};

export const CONTENT_WITH_DEPENDENCIES = (projectName, dependencies) => {
    const frmwkPackages = {
        "Express.js": `"express": "^4.18.2"`,
    };
    return `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {},
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    ${frmwkPackages[dependencies.framework]},
  },
}
`;
};
