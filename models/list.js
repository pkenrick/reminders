(function(exports){

  function List(){
    this.items = [];
  }

  List.prototype.addItem = function(itemClass = Item){
    this.items.push(new itemClass("Feed the Dog"));
  };

// module.exports = List;
exports.List = List;

})(this);
