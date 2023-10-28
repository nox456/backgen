import exec from "./exec.js";
import fs from "node:fs/promises";
import process from "node:process";
import { style2, style1 } from "./styles.js";
import {
    CONTENT_NO_DEPENDENCIES,
    CONTENT_WITH_DEPENDENCIES,
} from "../templates/packageJSON.js";
import Spinnies from "spinnies";

const loader = new Spinnies({
    color: "blueBright",
    succeedColor: "greenBright",
    spinner: {
        interval: 80,
        frames: ["-", "_"],
    },
});

export default async function createProject({
    projectName,
    dependencies,
    srcDir,
}) {
    try {
        await exec(`mkdir ${projectName}/`);
        await exec(`cd ${projectName} && touch package.json`);
        if (srcDir) {
            await exec(`cd ${projectName} && mkdir src/`);
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
        loader.add("spinner-1", { text: "Creating Project..." });
    } catch (err) {
        console.error(err);
    }
    loader.succeed("spinner-1", {
        text: `Project '${style2(projectName)}' created sucessfully!`,
    });
}
