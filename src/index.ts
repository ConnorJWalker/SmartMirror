import { app, BrowserWindow } from 'electron'
import * as path from 'path'

let mainWindow: BrowserWindow | null

function createWindow() : void {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    })

    mainWindow.loadFile(path.join(__dirname, '../static/index.html'))

    mainWindow.on('closed', () => { mainWindow = null })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit()
})

app.on('activate', () => {
    if (mainWindow === null)
        createWindow()
})