export const PROJECT_NAME = {
    name: "projectName",
    message: "Enter Project Name:",
    default: "project",
};

export const FRAMEWORK = {
    name: "framework",
    message: "Choose a Framework:",
    type: "list",
    choices: ["No Framework", "Express.js"],
};

export const SRCDIR = {
    name: "srcDir",
    message: "Create src/ Directory?",
    type: "confirm",
    default: true,
};

export const MVC = {
    name: "mvc",
    message: "Use MVC architecture?",
    type: "confirm",
    default: false
}

export const LOGGER = {
    name: "logger",
    message: "Choose a Logger:",
    type: "list",
    choices: ["No Logger", "Morgan"]
}

export const DEV = {
    name: "dev",
    message: "Create basic 'dev' script in 'package.json'?",
    type: "confirm",
    default: false
}

export const DB = {
    name: "db",
    message: "Choose a Database:",
    type: "list",
    choices: ["No database", "PostgreSQL"]
}

export const INDEX = {
    name: "index",
    message: "Create a 'index.js' main file?",
    type: "confirm",
    default: false
}
