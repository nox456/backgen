import exec from "./exec.js"
import { style2,style1 } from "../prompts/styles.js"

export default async function createProject(projectName) {
    let out
    try {
        out = await exec(`mkdir ${projectName}/`)
    } catch(err) {
        console.error(err)
    }
    console.log(style1(`Project '${style2(projectName)}' created sucessfully!`)) 
}
