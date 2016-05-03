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

//这里我们需要加上一个异步的flag--done
describe('Test',function(){
    it('test',(done)=>{  //这里加上一个done的参数,表示这是个异步的测试用例
        console.log("I'm testing")
        setTimeout(function(){
            console.log("I've finished test");
            done();  //这里手动告诉mocha我已经测试完了
        },200);
    });
});

//没有异步效果,结果会直接输出I'm testing，而I've finished test却没有效果
describe('Test',function(){
    it('test',()=>{
        console.log("I'm testing")
        setTimeout(function(){
            console.log("I've finished test");
        },200);
    });
})