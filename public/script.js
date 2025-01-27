var user=prompt('Enter your usename')
const socket=io()



socket.on('connectionEstablished',users=>{
    
    console.log(users)


while(users.includes(user)){
    user=prompt('This username is taken please choose another')
}
socket.on('receiveMessage',(message,sender)=>{
    appendMessage(message, sender);
})

const button=document.getElementById('button').addEventListener('click',()=>{
    const userInput = document.getElementById('user-message').value;
    if (!userInput.trim()) return;
    
    appendMessage(userInput, user);
    
    socket.emit('sendMessage',userInput,user)

   
    document.getElementById('user-message').value = '';

    
})

function appendMessage(message, sender) {
    const chatBox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
   var speaker=sender
    if(sender==user){
       
        messageDiv.style.textAlign='right'
        speaker='You'
    }
    else{
        messageDiv.style.color='blue'
    }
    
    messageDiv.innerText = `${speaker}: `+message;
    chatBox.appendChild(messageDiv);

    
    
}
})
socket.on('connect',()=>{
    socket.emit('newSocket',user)
})


