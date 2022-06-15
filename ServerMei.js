var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/MeiChat.html');
})

io.on('connect', (socket)=>{
    console.log("มีผู้ใช้บริการใหม่ เข้าใช้บริการเว็บแชท");

    socket.on('chat message', (msg)=>{
        console.log('message : ' + msg);
        
        io.emit('chat message', msg);
        

        
    })
}) 

http.listen(7020, function() {
    console.log('กำลังเชื่อมต่อไปยังเซิฟเวอร์ พอร์ต 7020');
});
