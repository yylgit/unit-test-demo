
console.log('1');
var add = require('./add.js');
//自己测试的代码
var Cal = function(){
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
    var func1 = function() {
      console.log('1')
    }
    return {
        add,desc,num,func1
    }
};
module.exports = Cal();