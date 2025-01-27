const express=require('express')

const {Server}=require('socket.io')

const fs=require('fs')

const users=[]

const app=express()

app.use(express.static('./public'))



// app.route('/').get((req,res)=>{
//  return res.status(200).json({
//     "status":"success"
//  })
// })


const http=require('http')

const server=http.createServer(app)

const io=new Server(server)

io.on('connection',socket=>{
    socket.on('sendMessage',(message,sender)=>{
        
        socket.broadcast.emit('receiveMessage',message,sender)
    })
    socket.on('newSocket',(user)=>{
       
        socket.emit('connectionEstablished',users)
        users.push(user)
      //  console.log(users)
    })
   
    socket.on('disconnect',(user)=>{
        users.pop(user)
        
    })
})

server.listen(8000,()=>{
    console.log('Listening')
})