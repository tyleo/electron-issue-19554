const electron = require("electron");
const fs = require("fs");
const path = `${__dirname}/TestFile.txt`;
const run = async () => {
  for (let i = 0; i < 10; ++i) await fs.promises.stat(path);
};
// eslint-disable-next-line no-console
console.log("before");
run()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("then");
    electron.remote.getCurrentWebContents().toggleDevTools();
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.log("catch");
    electron.remote.getCurrentWebContents().toggleDevTools();
  })
  // eslint-disable-next-line no-console
  .finally(() => console.log("finally"));
// eslint-disable-next-line no-console
console.log("after");
