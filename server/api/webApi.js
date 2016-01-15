'use strict';
var webApi = function(args) {

  var app = args.app;
  //var params = args.params;

  // バス停取得
  app.get('/api/getBusStation', function(req, res) {
    console.log('call getBusStation');
    // Jsonデータ取得
    var data = require('../data/busStation.json');
    res.send(data);
  });

  // 行き先取得
  app.get('/api/getDestination', function(req, res) {
    console.log('call getDestination');
    // Jsonデータ取得
    var data = require('../data/busDistination.json');
    res.send(data);
  });

  // ルート取得
  app.get('/api/getRoute', function(req, res) {
    console.log('call getRoute');
    // Jsonデータ取得
    var data = require('../data/busRoute.json');
    res.send(data);
  });

  // テスト
  app.get('/api/test', function(req, res) {
    console.log('call Test1');
    // Jsonデータ取得
    var ret = {name: 'test'};
    res.send(ret);
  });
};

module.exports = webApi;
