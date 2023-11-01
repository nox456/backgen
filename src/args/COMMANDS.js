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
    LOGGER,
    DEV,
} from "../prompts/createProjectPrompts.js";

export default {
    init: async function () {
        const answers = await inquirer.prompt([
            PROJECT_NAME,
            FRAMEWORK,
            SRCDIR,
            MVC,
            LOGGER,
            DEV,
        ]);
        const { projectName, framework, srcDir, mvc, logger, dev } = answers;
        const dependencies = {
            framework: framework == "No Framework" ? false : framework,
            logger: logger == "No Logger" ? false : logger,
        };
        const scripts = {
            dev
        }
        await createProject({ projectName, dependencies, srcDir, mvc, scripts });
    },
};
