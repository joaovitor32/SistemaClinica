const { app, BrowserWindow, Menu } = require("electron");

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

    splash.loadURL(`file://${__dirname}/dist/InterfaceAtendente/assets/splash-screen/index.html`);

    splash.show();

    splash.on("close", createMainWindow);
    splash.on("closed", function () {
        splash = null;
    });
}

function createMainWindow() {
    win = new BrowserWindow({
        width: 900,
        height: 600,
        backgroundColor: "#ffffff",
        show: false,
       // icon: `file://${__dirname}/dist/AplicacaoExame/assets/img/logo.png`
    });

    win.loadURL(`file://${__dirname}/dist/InterfaceAtendente/index.html`);
    win.maximize();
    win.show();

    win.on("closed", function () {
        win = null;
    });
}

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
