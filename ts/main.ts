import * as Electron from "electron";

let mainWindow: Electron.BrowserWindow;

Electron.app.on("ready", () => {
  mainWindow = new Electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(`file://${__dirname}/../index.html`);
});
