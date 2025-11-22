document.getElementById('sendMessage').addEventListener('click', () => {
    window.electronAPI.sendMessage('Hello from Renderer Process!');
});