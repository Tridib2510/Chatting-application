const express=require('express')

const {Server}=require('socket.io')

const app=express()

app.use(express.static('FrontEnd'))

app.route('/').get((req,res)=>{
    return res.status(200).sendFile('index.html',{root:"FrontEnd"})
})


const http=require('http')

const server=http.createServer(app)

const io=new Server(server)

io.on('connection',socket=>{
    socket.on('sendMessage',(message,sender)=>{
        socket.broadcast.emit('receiveMessage',message,sender)
    })
})

server.listen(8000,()=>{
    console.log('Listening')
})