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


//自己测试的代码
var Cal = (function(){
    var num = {
        base:0
    };
    var add = function(){
        num.base++;
        return num.base;
    }
    var desc = function(){
        --num.base;
        return num.base;
    }
    return {
        add,desc,num
    }
})();
//ok,现在引用断言库chai
var expect = require('chai').expect;
//写出测试
describe('Counter',function(){
    it('it should increase',function(){
        expect(Cal.num.base).to.below(Cal.add());
    })
    it('it should decrease',function(){
        expect(Cal.num.base).to.above(Cal.desc());
    })
})