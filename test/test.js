var express = require("express");
var request = require("supertest");
var app = express();
var expect = require('chai').expect;
var bodyParser = require('body-parser');

// 定义路由
describe('POST /user', function(){
  it('should work with .send() etc', function(done){
    var app = express();

    app.use(bodyParser.json());

    app.post('/', function(req, res){
      res.send(req.body.name);
    });

    request(app)
    .post('/')
    .send({ name: 'jimmy' })
    .expect('jimmy', done);
  });
});