var Person = function(name, email, address){
	this.name = name;
	this.email = email;
	this.address = address;
	this.sayName = function(){
		console.log(this.name);
	};
};

var ben = new Person(‘Ben’);
ben.sayName();
var tyler = new Person(‘Tyler’);
tyler.sayName();








var outer = function () {
	var x = true;

	var middle = function(){
		var y = true;

		var inner = function() {
			var z = true;

			console.log(z);
			console.log(y);
			console.log(x);
		}
	}
}