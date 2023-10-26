import chalk from "chalk";
import exec from "../../lib/exec.js";
import createProject from "../../lib/createProject.js";
import inquirer from "inquirer";

export default {
    init: async function () {
        const answers = await inquirer.prompt([
            {
                name: "projectName",
                message: "Enter Project Name:",
                default: "project",
            },
        ]);
        const { projectName } = answers;
        await createProject(projectName);
    },
};
