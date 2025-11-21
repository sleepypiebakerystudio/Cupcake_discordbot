const { app, BrowserWindow } = require("electron");
const path = require("path");
require("dotenv").config();
require(path.join(__dirname, "src", "server.js"));
// Express başlasın

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });

  win.loadFile(path.join(__dirname, "renderer", "index.html"));
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    server.close(() => console.log("🛑 Sunucu kapandı"));
    app.quit();
  }
});
