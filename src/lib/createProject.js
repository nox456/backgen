import exec from "./exec.js";
import fs from "node:fs/promises"
import process from "node:process";
import { style2, style1 } from "../prompts/styles.js";
import { CONTENT_NO_FRMWK } from "../templates/packageJSON.js"

export default async function createProject(projectName) {
    try {
        await exec(`mkdir ${projectName}/`);
        await exec(`cd ${projectName} && touch package.json && mkdir src/`)
        await fs.writeFile(`${process.cwd()}/${projectName}/package.json`, CONTENT_NO_FRMWK(projectName))
        await exec(`cd ${projectName}/src && touch index.js`)
    } catch (err) {
        console.error(err);
    }
    console.log(
        style1(`Project '${style2(projectName)}' created sucessfully!`)
    );
}
