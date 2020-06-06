import { app } from 'electron'
import { MainWindow } from './windows/main'

const mainWindow = new MainWindow()

app.on('ready', () => mainWindow.createWindow())

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit()
})

app.on('activate', () => {
    if (mainWindow.window === null)
        mainWindow.createWindow()
})