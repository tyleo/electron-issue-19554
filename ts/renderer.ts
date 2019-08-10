import * as electron from "electron";
import * as fs from "fs";
import * as path from "path";

const run = async () => {
  const name = "Testa";
  const thePath = "C:\\Users\\tyleo\\Desktop\\testa";
  const projectFilePath = thePath + `\\${name}.json`;
  const projectFileBody = {
    name,
    type: "lib",
    srcDir: "src",
    libDir: "lib",
  };
  try {
    await fs.promises.stat(thePath);
  } catch {
    await fs.promises.mkdir(thePath);
  }
  const libDirPath = path.join(thePath, "lib");
  const srcDirPath = path.join(thePath, "src");
  await Promise.all([
    fs.promises.mkdir(libDirPath),
    fs.promises.mkdir(srcDirPath),
  ]);

  await fs.promises.writeFile(
    projectFilePath,
    JSON.stringify(projectFileBody, undefined, 4),
  );

  const mainFilePath = path.join(srcDirPath, "Main.node_def.json");
  await fs.promises.writeFile(
    mainFilePath,
    JSON.stringify({ butt: "Hello World" }),
  );
};

const megaRun = async () => {
   await run();
   await run();
   await run();
   await run();
   await run();
   await run();
   await run();
   await run();
   await run();
}

// eslint-disable-next-line no-console
console.log("before");
megaRun()
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
