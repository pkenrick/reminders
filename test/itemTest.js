var expect = require('chai').expect;
var Item = require('../models/item.js').Item;
var item;

describe("item", function(){

  beforeEach(function(){
    item = new Item("Buy Milk");
  });

  describe("upon initialisation", function(){
    it("is instantiated with a description and completed status set to false", function(){
      expect(item.description).to.be.a('string');
      expect(item.completeStatus).equal(false);
    });
  });

  describe("#setDescription", function(){
    it("should set description of item to string provided", function(){
      item.setDescription("Buy Bread");
      expect(item.description).equal("Buy Bread");
    });
  });

  describe("#getDescription", function(){
    it("should return the description of the item", function(){
      expect(item.getDescription()).equal("Buy Milk");
    });
  });

  describe("#toggleComplete", function(){
    it("should toggle the item's 'complete' property between false and true", function(){
      item.toggleComplete();
      expect(item.completeStatus).equal(true);
      item.toggleComplete();
      expect(item.completeStatus).equal(false);
    });
  });

  describe("#getCompleteStatus", function(){
    it("should return the completeStatus of the item", function(){
      expect(item.getCompleteStatus()).equal(false);
    });
  });

});
