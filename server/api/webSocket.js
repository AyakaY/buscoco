// WebSocketイベント定義
'use strict';
var webSocket = function() {

  var webSocket = function(args) {
    console.log('webSocket Create');

    var io = args.io;
    //var params = args.params;

    io.sockets.on('connection', function (socket) {
      console.log('new connection');

      socket.on('msg', function (data) {
        console.log('msg recieve data: ', data);

        //socket.emit('msg', data);  // 送信元には送信しない
        socket.broadcast.emit('msg', data);
      });

      socket.on('passed', function (data) {
        console.log('passed recieve data: ', data);

        //socket.emit('passed', data);
        socket.broadcast.emit('passed', data);
      });

      socket.on('location', function (data) {
        console.log('location recieve data: ', data);

        //socket.emit('location', data);
        socket.broadcast.emit('location', data);
      });

      socket.on('disconnect', function () {
        console.log('disconnect');
      });
    });
  };
  return webSocket;
};

module.exports = webSocket;
