# Electron Issue 19554 Repro
This repo reproduces issue 19554 in the electron repo (https://github.com/electron/electron/issues/19554). renderer.js should print some sort of `console.log` message every time it runs but it only prints intermittently. Since it isn't even printing a `catch` or `finally` message, this indicates that `fs.stat` and `fs.promises.stat` are randomly hanging.
