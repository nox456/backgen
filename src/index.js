#! /usr/bin/env node

import createProject from "./lib/createProject.js";
import process from "node:process";

// ARGUMENTS
import INFO_ARGS from "./args/INFO.js";
import COMMANDS_ARGS from "./args/COMMANDS.js";

const args = process.argv;

const arg = {
    value: args[2],
    isFlag: args[2].startsWith("-"),
};

if (arg.isFlag) {
    console.log(INFO_ARGS[arg.value]);
} else {
    COMMANDS_ARGS[arg.value].execute();
}
