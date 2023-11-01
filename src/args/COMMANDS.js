import chalk from "chalk";
import exec from "../lib/exec.js";
import createProject from "../lib/createProject.js";
import { style1, style2 } from "../lib/styles.js";
import inquirer from "inquirer";
import {
    FRAMEWORK,
    PROJECT_NAME,
    SRCDIR,
    MVC,
    LOGGER
} from "../prompts/createProjectPrompts.js";

export default {
    init: async function () {
        const answers = await inquirer.prompt([
            PROJECT_NAME,
            FRAMEWORK,
            SRCDIR,
            MVC,
            LOGGER
        ]);
        const { projectName, framework, srcDir, mvc, logger } = answers;
        const dependencies = {
            framework: framework == "No Framework" ? false : framework,
            logger: logger == "No Logger" ? false : logger
        };
        await createProject({ projectName, dependencies, srcDir, mvc });
    },
};
