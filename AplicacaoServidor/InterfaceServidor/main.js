const { app, BrowserWindow, Menu, electron, ipcMain, ipcRenderer, shell } = require("electron");
const path = require('path');
const os = require('os');
const fs = require('fs');
// Menu.setApplicationMenu(false);
let win;
let splash;

function createSplashScreen() {
    splash = new BrowserWindow({
        width: 400,
        height: 475,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    splash.loadURL(`file://${__dirname}/dist/InterfaceServidor/assets/splash-screen/index.html`);

    splash.show();

    splash.on("close", createMainWindow);
    splash.on("closed", function () {
        splash = null;
    });
}

function createMainWindow() {
    win = new BrowserWindow({
        //width: 900,
        //height: 600,
        backgroundColor: "#ffffff",
        show: false,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
        }
        //icon: `file://${__dirname}/dist/InterfaceServidor/assets/img/logo.png`
    });
    //win.webContents.openDevTools();
    win.loadURL(`file://${__dirname}/dist/InterfaceServidor/index.html`);
    
    workerWindow = new BrowserWindow({
        show: false,
        webPreferences: {
            webSecurity: false,
            nodeIntegration: true
        }
    });
    workerWindow.loadURL("file://" + __dirname + "/dist/InterfaceServidor/assets/pdf/worker.html");
    //workerWindow.webContents.openDevTools();
    workerWindow.hide();
 
    win.maximize();
    win.show();

     workerWindow.on("closed", () => {
        workerWindow = undefined;
    });
    win.on("closed", function () {
        win = null;
    });
}

ipcMain.on('printPDF', (event, content) => {
    //console.log(content);
    workerWindow.webContents.send('printPDF', content);
});
// when worker window is ready
ipcMain.on("readyToPrintPDF",async(event) => {
    const pdfPath = path.join(os.homedir(),'relatorio Aso '+new Date().toString());
    // Use default printing options
 
	await workerWindow.webContents.printToPDF({  printSelectionOnly: false,printBackground: true, silent: false,  landscape: false, pageSize: "A4" }).then((data) => {
        fs.writeFile(pdfPath, data, function (error) {
            if (error) {
                throw error
            }
            event.sender.send('wrote-pdf', pdfPath)
            shell.openExternal('file://' + pdfPath);
        })
    }).catch((error) => {
        throw error;
    })
});
// app.on("ready", createMainWindow);
app.on("ready", createSplashScreen);

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function () {
    if (splash === null) {
        // createMainWindow();
        createSplashScreen();
    }
});
