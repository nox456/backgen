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
    DB,
    INDEX,
} from "../prompts/createProjectPrompts.js";

export default {
    init: {
        execute: async function () {
            const answers = await inquirer.prompt([
                PROJECT_NAME,
                FRAMEWORK,
                SRCDIR,
                MVC,
                LOGGER,
                DEV,
                DB,
                INDEX,
            ]);
            const {
                projectName,
                framework,
                srcDir,
                mvc,
                logger,
                dev,
                db,
                index,
            } = answers;
            const dependencies = {
                framework: framework == "No Framework" ? false : framework,
                logger: logger == "No Logger" ? false : logger,
                db: db == "No database" ? false : db,
            };
            const scripts = {
                dev,
            };
            await createProject({
                projectName,
                dependencies,
                srcDir,
                mvc,
                scripts,
                index,
            });
        },
        description: "Start initialization prompts to create a Backend Project"
    },
};
