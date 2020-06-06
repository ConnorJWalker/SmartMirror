import { BrowserWindow } from 'electron'
import * as path from 'path'

export class MainWindow {
    public window: BrowserWindow | null

    constructor() {
        this.window = null
    }

    public createWindow(): void {
        this.window = new BrowserWindow({
            fullscreen: true,
            titleBarStyle: 'hidden'
        })

        this.initWindowEvents()
    }

    private initWindowEvents(): void {
        this.window?.loadFile(path.join(__dirname, '../../static/index.html'))
        this.window?.on('closed', () => { this.window = null })
    }
}