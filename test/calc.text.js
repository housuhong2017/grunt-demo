var add = require('../sum.js');
var expect = require('chai').expect;

describe('加法函数的测试',function(){
  it('0 + 0 = 0',function(){
    expect(add(0,0)).to.be.equal(0);
  });
  it('1 +1 = 2',function(){
    expect(add(1,1)).to.be.equal(2);
  });
  it('"1"+"0"="1"',function(){
    expect(add('1','0')).to.be.equal(1);
  })
 })
