import * as electron from "electron";

let mainWindow: electron.BrowserWindow;

electron.app.on("ready", () => {
  mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(`file://${__dirname}/../index.html`);
});
