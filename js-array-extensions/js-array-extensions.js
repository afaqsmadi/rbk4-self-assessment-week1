var arrayExtension=function(){
var instance={};
	instance.array=[1,2,3,4,5,6,7,8,9,10]
	extend(instance,method)
	return instance
	}
	var method={
		first:function(){
			return this.array[0]
	},

	last:function(){
		return this.array[this.array.length-1]
	}
}
var extend=function(obj1,obj2){
	for(key in obj2){
		obj1[key]=obj2[key]
	}
	return obj2
}