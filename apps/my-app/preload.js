const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message) => {
    return ipcRenderer.send('send-message', message)
  },
})
