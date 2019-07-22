var app = require('express')();
var http = require('http').createServer(app);

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
  });

  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message: ' , msg);
    });
  });

http.listen(3000 || process.env.PORT, function(){
  console.log('listening on *:3000');
});
