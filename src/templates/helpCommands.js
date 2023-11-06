import COMMANDS from "../args/COMMANDS.js";
import { style1, style2, style3 } from "../lib/styles.js";

const commands = Object.entries(COMMANDS);

let content = "";

commands.forEach((command) => {
    const line = `${style2(command[0])}  ${style3("|")}  ${style1(command[1].description)}\n`;
    content = content.concat(line);
    content = content.concat(style3("~".repeat(80)), "\n");
});
const HELP_COMMANDS = `
${style3("Commands:")}

${content}
`;

export default HELP_COMMANDS;
