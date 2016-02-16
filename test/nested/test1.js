var express = require("express");
var request = require("supertest");
var app = express();
var expect = require('chai').expect;

// 定义路由
app.get('/user', function(req, res){
  res.status(202).send({ name: 'jerryc' });
});

describe('GET /user', function(){
  it('respond with json', function(done){
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err){
          done(err);
        }
        expect(res.body.name).to.equal('jerryc');
        done();
      })
  });
});