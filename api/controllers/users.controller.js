var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

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
        var token = jwt.sign({ username: user.username }, 's3cr3t', {
          expiresIn: 3600
        });
        res.status(201).json({ success: true, token: token });
      } else {
        res.status(401).json('unauthorized');
      }
    }
  });
};

modules.export.authenticate = function(req, res, next) {
  var headerExists = req.headers.authorization;
  if (headerExists) {
    var token = req.headers.authorization.split('')[1];
    jwt.verify(token, 's3cr3t', function(error, decoded) {
      if (error) {
        console.log(error);
        res.status(401).json('unauthorized');
      } else {
        req.user = decoded.username;
        next();
      }
    });
  } else {
    res.status(403).json('No token provided');
  }
};
