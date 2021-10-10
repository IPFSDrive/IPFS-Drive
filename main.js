let {app, BrowserWindow, ipcMain, protocol, dialog} = require('electron')
let versionNumber = require('./version')
let createProtocol = require('./protocol')
let isDev = versionNumber % 2 === 1

console.log("start rclone-ui " + versionNumber)

protocol.registerSchemesAsPrivileged([{scheme: "app", privileges: {secure: true, standard: true}}])

let title = "IPFS Drive";
let uiReady = false;
let mainWindow = null;

let exitByInstall = false;

let rcloneRunByMe = false

async function startRclone() {
  let appPath = app.getAppPath()

  // appPath = appPath.replace(/\\/g, "/")
  if (appPath.endsWith('/app.asar') || appPath.endsWith('\\app.asar')) {
    appPath = appPath.replace('/app.asar', '')
    appPath = appPath.replace('\\app.asar', '')
  }

  // start rclone
  let rclone = require('./rclone');

  let rs = await rclone.start({appPath: appPath})
  if (rs.code !== 200) {
    return rs
  }

  if (rs.data) {
    rcloneRunByMe = !!rs.data.runByMe
  }

  return {code: 200}
}

function createWindow() {
  mainWindow = new BrowserWindow({
    title: title,
    width: 1500,
    height: 920,

    // icon: `${__static}/icon.ico`,
    // resizable: false,
    // useContentSize: true,

    resizable: true,
    show: false, // 防闪烁
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    }
  });


  if (isDev) {
    mainWindow.webContents.openDevTools({mode: 'detach'});
  }

  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    console.log('loading')
    createProtocol('app')
    mainWindow.loadURL('app://./public/load.html');
  }

  mainWindow.on("closed", () => mainWindow = null)

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.setMenu(null)

  mainWindow.on('close', (e) => onWindowCloseClick(e));

  init_event()

}

async function onWindowCloseClick(e) {
  if (!uiReady) {
    // app.exit();
    // return;
  }

  if (exitByInstall) {
    app.exit();
    return;
  }

  e.preventDefault();

  // sendToUI("will-window-close");

  app.exit()

  if (rcloneRunByMe) {
    let rclone = require('./rclone');
    await rclone.kill()
  }
}

function init_event() {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  ipcMain.on("ui-ready", () => {
    uiReady = true;
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ipcMain.on("update", async (event, updateUrl) => {
    await doUpdate(updateUrl)
  });
  ipcMain.on("update-install", async () => {
    await doUpdateInstall()
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ipcMain.on("app-exit", (/*event, params*/) => {
    app.exit();
  })

  //
  ipcMain.on("open-devTools", () => {
    if (mainWindow) {
      mainWindow.webContents.openDevTools({mode: 'detach'});
    }
  });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function sendToUI(channel, msg) {
  mainWindow.webContents.send(channel, msg)
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    // createWindow()
  }
})

app.commandLine.appendSwitch("--disable-http-cache")
app.on("ready", async () => {
  let rs = await startRclone()
  if (rs.code !== 200) {
    dialog.showMessageBox({
      type: 'info',
      title: 'rclone',
      message: rs.msg || 'rclone service no running',
      buttons: ['确定'],
    }).then(res => {
      app.quit()
    });
    return
  }
  createWindow();
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const log = require('electron-log');
const {autoUpdater} = require("electron-updater");
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';

autoUpdater.on('checking-for-update', () => {
  sendToUI("update-checking-for-update")
})
autoUpdater.on('update-available', () => {
  sendToUI("update-available");
})
autoUpdater.on('update-not-available', () => {
  sendToUI("update-not-available");
})
autoUpdater.on('error', () => {
  sendToUI("update-error");
})
autoUpdater.on('download-progress', (progressObj) => {
  sendToUI("update-download-progress", progressObj)
})
autoUpdater.on('update-downloaded', () => {
  sendToUI("update-downloaded")
});

async function doUpdate(updateUrl) {
  if (process.env.NODE_ENV === 'development') {
    let path = require('path');
    autoUpdater.updateConfigPath = path.join(__dirname, 'win-unpacked/resources/app-update.yml')
    // mac 'Contents/Resources/app-update.yml'
  }

  autoUpdater.setFeedURL({
    provider: "generic",
    url: updateUrl
  });

  let rs = await autoUpdater.checkForUpdates();
  await rs.downloadPromise
}

function doUpdateInstall() {
  exitByInstall = true;
  autoUpdater.quitAndInstall();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
