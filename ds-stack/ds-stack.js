var Stack = function() {
    this._storage =[]
    this.add = function(value){
 		 this._storage.push(value)  
   
    };
    this.remove = function() {
		 var d= this._storage.pop()
		 return d
    };
return this
  };