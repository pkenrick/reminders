var expect  = require("chai").expect;
var List = require("../models/list.js").List;
var list;

describe("List", function(){

  beforeEach(function(){
    list = new List();
  });

  describe("upon initialisation", function(){
    it("contains an empty array of items", function(){
      expect(list.items.length).equal(0);
    });
  });

  describe("#addItem", function(){
    it("creates a new item and stores in in the array", function(){

    });
  });
});
