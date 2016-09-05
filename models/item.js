(function(exports){

function Item(description){
  this.description = description;
  this.completeStatus = false;
}

Item.prototype.setDescription = function(description){
  this.description = description;
};

Item.prototype.getDescription = function(){
  return this.description;
};

Item.prototype.toggleComplete = function(){
  if(this.completeStatus === false){
    this.completeStatus = true;
  } else {
    this.completeStatus = false;
  };
};

Item.prototype.getCompleteStatus = function(){
  return this.completeStatus;
};

// module.exports = Item;
exports.Item = Item;

})(this);
