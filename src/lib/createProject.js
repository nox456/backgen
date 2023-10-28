import exec from "./exec.js";
import fs from "node:fs/promises";
import process from "node:process";
import { style2, style1 } from "./styles.js";
import {
    CONTENT_NO_DEPENDENCIES,
    CONTENT_WITH_DEPENDENCIES,
} from "../templates/packageJSON.js";

export default async function createProject({ projectName, dependencies, srcDir }) {
    try {
        await exec(`mkdir ${projectName}/`);
        await exec(`cd ${projectName} && touch package.json`);
        if (srcDir) {
            await exec(`cd ${projectName} && mkdir src/`)
        }
        if (Object.values(dependencies).every((dep) => dep == false)) {
            await fs.writeFile(
                `${process.cwd()}/${projectName}/package.json`,
                CONTENT_NO_DEPENDENCIES(projectName)
            );
        } else {
            await fs.writeFile(
                `${process.cwd()}/${projectName}/package.json`,
                CONTENT_WITH_DEPENDENCIES(projectName, dependencies)
            );
        }
    } catch (err) {
        console.error(err);
    }
    console.log(
        style1(`Project '${style2(projectName)}' created sucessfully!`)
    );
}
