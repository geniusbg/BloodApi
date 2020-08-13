var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(5080); //the server object listens on port 8080

const mongoose = require('mongoose');
mongoose.connect('mongodb://blood:bl00d@77.78.36.178:27017/blood', {useNewUrlParser: true, useUnifiedTopology: true});

const User = mongoose.model('User', { name: String, birthday: Number, bloodGroup: String });

const Gosho = new User({ name: 'Gosho', birthday: 1983, bloodGroup: "A+"});
Gosho.save().then(() => console.log(Gosho));

User.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})

