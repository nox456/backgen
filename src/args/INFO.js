import chalk from "chalk";
import HELP_COMMANDS from "../templates/helpCommands.js"

const style1 = chalk.blue.bold
const style2 = chalk.green.bold

export default {
    "-v": `${style2("v")}${style1("0.0.1")}`,
    "--version": `${style2("v")}${style1("0.0.1")}}`,
    "-h": `${style2("BackGen")} ${style1("is a CLI to build backend apps structure")}\n${HELP_COMMANDS}`,
    "--help": `${style2("BackGen")} ${style1("is a CLI to build backend apps structure")}\n${HELP_COMMANDS}`
}
