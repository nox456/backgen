import INFO_ARGS from "./constants/INFO.js";
import COMMANDS_ARGS from "./constants/COMMANDS.js"

export function handlerInfoArgs(arg) {
    console.log(INFO_ARGS[arg])
}

export function handlerCommandArgs(arg) {
    COMMANDS_ARGS[arg]()
}
