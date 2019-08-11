const electron = require("electron");
const fs = require("fs");
const path = `${__dirname}/test.txt`;
const run = async () => {
  for (let i = 0; i < 10; ++i) await fs.promises.stat(path);
};
console.log("before");
run()
  .then(() => {
    console.log("then");
    electron.remote.getCurrentWebContents().toggleDevTools();
  })
  .catch(() => {
    console.log("catch");
    electron.remote.getCurrentWebContents().toggleDevTools();
  })
  .finally(() => console.log("finally"));
console.log("after");
