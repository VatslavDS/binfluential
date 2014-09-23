var express = require('express')
  , routes = require('./routes/routes.js')
  , mongoose = require('mongoose')
  , http = require('http')
  , bcrypt = require('bcryptjs')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , sockets = require('socket.io')
  , user = require('./models/User.js')
  , path = require('path');

var app = express()
  , server = http.createServer(app)
  , io = sockets.listen(server);

mongoose.connect('mongodb://localhost/binfluential');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

routes(app, user); 