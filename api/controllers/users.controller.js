var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-nodejs');

modules.export.register = function(req, res) {
  console.log('registering user');
  var username = request.body.username;
  var name = req.body.name || null;
  var password = req.body.password;

  User.create(
    {
      username: username,
      name: name,
      password: bcrypt.hashSynce(password, bcrypt.genSaltSync(10))
    },
    function(err, user) {
      if (err) {
        console.log(err);
        res.status(400).json(err);
      } else {
        console.log('user created', user);
        res.status(201).json(user);
      }
    }
  );
};

modules.export.login = function(req, res) {
  console.log('logging in');
  var username = request.body.username;
  var password = req.body.password;

  User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        console.log('user found', user);
        res.status(201).json(user);
      } else {
        res.status(401).json('unauthorized');
      }
    }
  });
};
