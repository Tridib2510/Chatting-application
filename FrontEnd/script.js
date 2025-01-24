const user=prompt('Enter your usename')
const socket=io()


socket.on('receiveMessage',(message,sender)=>{
    appendMessage(message, sender);
})

function sendMessage() {
    const userInput = document.getElementById('user-message').value;
    if (!userInput.trim()) return;
    
    appendMessage(userInput, user);
    
    socket.emit('sendMessage',userInput,user)

   
    document.getElementById('user-message').value = '';

    
}

function appendMessage(message, sender) {
    const chatBox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
   var speaker=sender
    if(sender===user){
    console.log('Test case 1 passed')    
        messageDiv.style.textAlign='right'
        speaker='You'
    }
    else{
        messageDiv.style.color='blue'
    }
    
    messageDiv.innerText = `${speaker}: `+message;
    chatBox.appendChild(messageDiv);

    
    
}
