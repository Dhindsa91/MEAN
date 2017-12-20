var dbconn = require('../data/connection.js');
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
  var db = dbconn.get();
  var collection = db.collection('hotels');

  collection
    .find()
    .skip(offset)
    .limit(count)
    .toArray(function(err, docs) {
      console.log('found hotels', docs);
      res.status(200).json(docs);
    });

  // console.log('db', db);
  // console.log('Get the hotels');
  // console.log(req.query);

  var offset = 0;
  var count = 5;

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  var returnData = hotelData.slice(offset, offset + count);

  res.status(200).json(returnData);
};

module.exports.hotelsAddOne = function(req, res) {
  console.log('post new hotel');
  console(req.body);
  res.status(200).json(req.body);
};

module.exports.hotelsGetOne = function(req, res) {
  console.log('GET hotelId', req.params.hotelId);
  res.status(200).json(hotelData[req.params.hotelId]);
};
