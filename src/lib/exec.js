import { exec } from "node:child_process"

export default function execPromise(command) {
    return new Promise((resolve,reject) => {
        exec(command,(err,stdout,stderr) => {
            if (err) {
                reject(err)
            } else if (stderr) {
                reject(stderr)
            } else {
                resolve(stdout)
            }
        })
    })
}
