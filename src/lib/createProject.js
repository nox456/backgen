import exec from "./exec.js";
import fs from "node:fs/promises";
import process from "node:process";
import { style2, style1 } from "./styles.js";
import writeJSON from "../templates/packageJSON.js";
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
        await fs.writeFile(
            `${process.cwd()}/${projectName}/package.json`,
            writeJSON(projectName, dependencies)
        );
        loader.add("spinner-1", { text: "Creating Project..." });
    } catch (err) {
        console.error(err);
    }
    loader.succeed("spinner-1", {
        text: `Project '${style2(projectName)}' created sucessfully!`,
    });
}
