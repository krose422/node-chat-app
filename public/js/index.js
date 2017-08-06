var socket = io();

socket.on('connect', () => {
  console.log('Connected to server')

  socket.emit('createMessage', {
    from: 'Locks',
    text: 'Hello this is Locks.'
  });

});

socket.on('disconnect', () => {
  console.log('Disconnected from server')
});

socket.on('newMessage', (message) => {
  console.log('New message for you', message);
});
