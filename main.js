"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron = require("electron");
let mainWindow;
electron.app.on("ready", () => {
  mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
