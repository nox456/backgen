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
