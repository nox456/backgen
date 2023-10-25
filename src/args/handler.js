import INFO_ARGS from "./constants/INFO.js"

export default function handlerArgs() {
    const args = process.argv;

    args.splice(0, 2);

    args.forEach((arg) => {
        console.log(INFO_ARGS[arg]);
    });
}
