/*
Private Members
---------------
In javascript, there is really nothing like private/protected/public. But you can somehow achieve it.
*/
function Gadget1() {
	// private member
	var name = "ipod";
	// public member
	this.getName = function() {
		return name;
	};
}
var toy1 = new Gadget1();
console.log(toy1.name); // undefined
console.log(toy1.getName()); // ipod

/*
By default, constructor functions return 'this'. Whatever you define inside this (e.g. this.getName) becomes public and others (e.g. var name) becomes private.
This works fine in case of literals, but now think of objects.
*/

function Gadget() {
	// private member
	var specs = {
		screen_width:320,
		screen_height:320,
		color:"white"
	};
	
	// public function
	this.getSpecs = function() {
		return specs;
	};
}

var toy = new Gadget();
var specs = toy.getSpecs();
specs.color = "black";
console.dir(toy.getSpecs()); // color is changed to "black". O/P: {"color": "black", "screen_height": 320, "screen_width": 320}

// everytime you call 'new', members are reinitialized
var toy1 = new Gadget();
console.dir(toy1.getSpecs()); //O/P: {"color": "white", "screen_height": 320, "screen_width": 320}

/*
Javascript returns an object as a reference. So, even though, specs is private, when it's reference is returned by getSpecs and indirectly specs becomes public.

Same is true for the array object
*/

function Gadget2() {
  // private member
  var specs = [1,2,3];
  this.someVar = "hi";
  // public function
	this.getSpecs = function() {
		return specs;
	};
}

var toy2 = new Gadget2();
console.dir(toy2.someVar);
var specs = toy2.getSpecs();
specs[0] = 4;
console.dir(toy2.getSpecs()); //[4, 2, 3]


// Solution: return some other object instead of 'this'.

function Gadget() {
	// private member
	var specs = {
		screen_width:320,
		screen_height:320,
		color:"white"
	};
  
  	return { // return some other object instead of 'this'
		getSpecs: function() {
			return specs;
		}
  	};
}

var toy = new Gadget();
var specs = toy.getSpecs();
specs.color = "black";
console.dir(toy.getSpecs()); // color is changed to "black"

var toy1 = new Gadget();
console.dir(toy1.getSpecs()); // color is changed to "white"