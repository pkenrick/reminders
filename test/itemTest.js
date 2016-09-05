var expect = require('chai').expect;
var Item = require('../models/item.js');

describe("item", function(){

  it("is instantiated with a string and a false completed status", function(){
    var item = new Item("Buy Milk");
    console.log(item.description);
    console.log(item.complete);
    expect(item.description).to.be.a('string');
    expect(item.complete).equal(false);
  });

});
