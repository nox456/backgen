#! /usr/bin/env node

import { handlerCommandArgs, handlerInfoArgs } from "./args/handler.js";
import createProject from "./lib/createProject.js";
import process from "node:process"

const args = process.argv

const arg = {
    value: args[2],
    isFlag: args[2].startsWith("-")
}

if (arg.isFlag) {
    handlerInfoArgs(arg.value)
} else {
    handlerCommandArgs(arg.value)
}
