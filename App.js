const chatBox = document.getElementById('chat-box');

const messageInput = document.getElementById('input');

const sendBtn = document.getElementById('send-btn');


//To alternate between user and other
let isUser = true;

sendBtn.addEventListener('click', () => {
  const messageText = messageInput.value.trim();

   if (messageText === "")
    return;

   const messageElement = document.createElement('div');

   messageElement.classList.add("message");

   messageElement.classList.add(isUser ? "user-message" : "other-message");

   messageElement.textContent = messageText;


   chatBox.appendChild(messageElement);
   //scroll to the latest message
   chatBox.scrollTop = chatBox.scrollHeight;

   //Clear input field
   messageInput.value = '';

   //Toggle between user and other
   isUser = !isUser;
})
