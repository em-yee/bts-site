const socket = io(); //access to web socket api

//username, message input fields

let chatUserName = document.querySelector('#chat-username')
let chatMessage = document.querySelector('#chat-message')
let chatForm = document.querySelector('#chatform')
let chatDisplay = document.querySelector('.chat-display')

console.log(chatForm);

//listen for new incoming messages
socket.on('updateMessage', (data)=>{
    //data {username, message}

    let newMessage = document.createElement('p');
    if(chatUserName.value === data.username){
        newMessage.className = "bg-success chat-text"
    }
    else{
        newMessage.className = "bg-info text-warning chat-text"
    }

    //<p>sldjsldfjls<p>

    newMessage.innerHTML = `<strong>${data.username}</strong>: ${data.message}`

    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild)

})

//send message to server

chatForm.addEventListener('submit', e=>{
    e.preventDefault()
    console.log('posing message')
    console.log(chatUserName.value);
    console.log(chatMessage.value);
    socket.emit('postMessage', {
        username: chatUserName.value,
        message: chatMessage.value
    })
})
