#! /usr/bin/env node

import handlerArgs from "./args/handler.js"
import inquirer from "inquirer"
import createProject from "./lib/createProject.js"

handlerArgs()

const answers = await inquirer.prompt([{
    name: "projectName",
    message: "Enter Project Name:",
    default: "project"
}])

const { projectName } = answers

await createProject(projectName)
