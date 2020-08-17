const app = require('express');
const http =require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection',(socket)=>{
    console.log('Um usuário conectado');
    socket.on('broadcast',(msg)=>{
        io.sockets.emit('broadcast',msg);
    });
})

http.listen(3000,()=>{
    console.log('ouvindo porta 3000')
})