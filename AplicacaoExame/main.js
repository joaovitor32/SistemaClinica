const { app, BrowserWindow, Menu } = require("electron");

Menu.setApplicationMenu(false);
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 900,
        height: 600,
        backgroundColor: "#ffffff",
        show: false,
        icon: `file://${__dirname}/dist/AplicacaoExame/assets/img/logo.png`
    });
    win.loadURL(`file://${__dirname}/dist/AplicacaoExame/index.html`);

    win.maximize();
    win.show();

    win.on("closed", function () {
        win = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function () {
    if (win === null) {
        createWindow();
    }
});
