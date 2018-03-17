var makeHashTable = function() {
	//Do not change the max!
	var max = 4;

	return {
		_storage: [],
		arr:[]
		retrieve: function(key) {
			return this._storage[hashFn(key, max)];
	},

	insert: function(key, value) {
		//      in the first when need to insert documet in hash tabel we send the key and then hash tabel calculat index
		var index=hashFn(key, max);
		this._storage[hashFn(key, max)] = value;
		for(var i=0;i<this._storage;i++){
		  if(this.storage[index][i]===key){
			  this.arr.push(key)
			  this.arr.push(value)
              this.storage[index][i]=this.arr
		  }  
	    } 
   }
 }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};