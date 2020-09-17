const { BrowserWindow } = require("electron");

class MainWindow extends BrowserWindow {
  constructor(file, isDev) {
    super({
      title: "SysTop",
      width: isDev ? 700 : 355,
      height: 500,
      show: true,
      opacity: 0.95,
      icon: "./assets/icons/icon.png",
      resizable: isDev ? true : false,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    this.loadFile(file);
    if (isDev) {
      this.webContents.openDevTools();
    }
  }
}

module.exports = MainWindow;
