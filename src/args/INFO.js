import chalk from "chalk";

const style1 = chalk.blue.bold
const style2 = chalk.green.bold

export default {
    "-v": `${style2("v")}${style1("0.0.1")}`,
    "--version": `${style2("v")}${style1("0.0.1")}}`,
    "-h": `${style2("BackGen")} ${style1("is a CLI to build backend apps structure")}`,
    "--help": `${style2("BackGen")} ${style1("is a CLI to build backend apps structure")}`
}
