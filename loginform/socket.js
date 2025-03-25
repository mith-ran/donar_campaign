// Ensure only one socket connection is created
if (!window.socket) {
    window.socket = io('http://192.168.62.32:8080'); // Initialize only once
}

const socket = window.socket; // Use the same socket instance everywhere

socket.on('connect', () => {
    console.log('Connected to server:', socket.id);
});

socket.on('disconnect', () => {
    console.log('Disconnected from server:', socket.id);
});
