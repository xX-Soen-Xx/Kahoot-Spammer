const { app, BrowserWindow } = require('electron');
const path = require('path');
const { isContext } = require('vm');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 334,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });
  mainWindow.setMenuBarVisibility(false)
  mainWindow.setResizable(false)
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  // mainWindow.setIcon(path.join(__dirname, 'icon.png'))
  
  // Open the DevTools.
 //mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();    
  }
});

