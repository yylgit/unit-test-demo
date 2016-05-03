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
    return {
        add,desc,num
    }
};
module.exports = Cal();