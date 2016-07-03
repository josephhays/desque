const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let desk = new BrowserWindow({
    fullscreen: false
  })

  desk.loadURL(`file://${__dirname}/desk.html`)
})

exports.shutDown = () => {
  app.quit()
}

exports.openGoogleApp = () => {
  let gapp = new BrowserWindow({
    height: 400,
    width: 400,
    parent: desk
  })

  gapp.loadURL(`http://google.com`)
}
