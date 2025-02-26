const socket1 = io('http://localhost:3008');
const socket2 = io('http://localhost:3008');

function addMessageToChat(chatNumber, message, isUserMessage) {
  const messagesDiv = document.getElementById(`messages-${chatNumber}`);
  const color = isUserMessage ? 'blue' : 'red';
  messagesDiv.innerHTML += `
    <div style="color: ${color}; margin-bottom: 5px;">
      ${message.user}: ${message.text}
    </div>
  `;
}

function sendMessage(chatNumber) {
  const input = document.getElementById(`message-input-${chatNumber}`);
  const message = input.value;
  input.value = '';
  
  const userId = `user${chatNumber}`;
  const socket = chatNumber === '1' ? socket1 : socket2;
  
  addMessageToChat(chatNumber, { user: `Eu (${userId})`, text: message }, true);
  socket.emit('chat message', { userId, message });
}

socket1.on('chat message', (message) => {
  if (message.user !== 'user1') {
    addMessageToChat('1', message, false);
  }
});

socket2.on('chat message', (message) => {
  if (message.user !== 'user2') {
    addMessageToChat('2', message, false);
  }
});
