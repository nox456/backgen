import chalk from "chalk";
import exec from "../../lib/exec.js";
import createProject from "../../lib/createProject.js";
import { style1, style2 } from "../../prompts/styles.js";
import inquirer from "inquirer";

export default {
    init: async function () {
        const answers = await inquirer.prompt([
            {
                name: "projectName",
                message: "Enter Project Name:",
                default: "project",
            },
            {
                name: "framework",
                message: "Choose a Framework:",
                type: "list",
                choices: ["No Framework", "Express.js"],
            },
        ]);
        const { projectName, framework } = answers;
        const dependencies = {
            framework: framework == "No Framework" ? false : framework,
        };
        await createProject({ projectName, dependencies });
    },
};
