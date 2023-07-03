/*
Namespace Pattern
-----------------
It is dependent on ModularPattern's sub-module pattern.

Instead of polluting the global scope with a lot of functions, objects and other variables, you can create one for ur application.
Then you can add all the functionality to that object.
*/

/*
// anti pattern

// constructors
function Parent() {}
function Child() {}
// variables
var some_var = 1;
// some objects
var module1 = {};
module1.data = {.....};
*/

/***** one namespace pattern *****/

// Just one global object
var MYAPP = {};
// construcotrs
MYAPP.Parent = function() {};
MYAPP.Child = function() {};
// a variable
MYAPP.some_var = 1;
// an object container
MYAPP.module1 ={};

// Normally, global objects should be in all CAPS. Here we define only one MYAPP as global object. 

// unsafe
var MYAPP = {};
// better
if(typeof MYAPP === "undefined") {
	var MYAPP = {};
}
// or shorter
var MYAPP = MYAPP || {};

//First check whether MYAPP already exists, if not then only create a new object.


//Declaring Dependencies - 

var myFunction = function() {

	var mod = MYAPP.module1;
	
	//... use mod (instead of MYAPP.module1) as many times as you want ...
};
//This will improve the performance also.