/*
Immediate and Init Functions
-----------------------------

Immediate function or init() method is used to initiate certain processes or initialize some variables on page load (time when js file is loaded).
It is definitely a better approach than creating a bunch of global variables. It helps you to wrap all your code in its local scope and lot leak any variables in the global scope.

Read self created document for more information.

*/

// Example of immediate function

var personModule = {};

var personModuleInFirstFile = (function (module) {	
	
	// This is a private variable because it is not store inside module object like getName and getAddress methods.
	var personInfo = {
		name : "Tushar" // Will be defined from augmented module in second file (personModuleInSecondFile variable)
	};
	var personAddress = {
			// Immediate function can be used as an inline anonymous function that can be used
			// to dynamically initialize the variable.
			address : 	
				(
						function() {
							//console.log(personInfo.name);
							if("Tushar" === personInfo.name) {
								return "USA";
							}
							return "Address Is Not Known";
						}
				)()
	};
	module.setName = function(name) {
		personInfo.name = name;
	};
	/*module.setAddress = function(address) {
		personAddress.address = address;
	};*/
	module.getName = function() {
		return personInfo.name;
	};
	module.getAddress = function() {
		return personAddress.address;
	};
	return module;
})(personModule || {});

console.log(personModule.getName()); // Tushar
console.log(personModule.getAddress()); // USA


// Ideally it should be in another file
var personModuleInSecondFile = 
	(function (module) {	
		module.setName("Unknown name");
		return module;
	})(personModule || {});
	
	
	
console.log(personModule.getName()); // Unknown name
// You must be expecting that output of below statement will be "Address Is Not Known".
// But it will be "USA" because address is assigned once by an immediate function, it is not going to be reassigned.
console.log(personModule.getAddress()); // USA

