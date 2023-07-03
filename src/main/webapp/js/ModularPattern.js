/*
Module Pattern and Revealing Module pattern

http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

It is helpful to define private or public accessibility to properties and functions.

We’ll simply create an anonymous function, and execute it immediately. 
All of the code that runs inside the function lives in a closure, which provides privacy and state throughout the lifetime of our application.

http://w2ui.com/web/blog/1/A-Variation-of-JavaScript-Module-Pattern
Module Pattern is one of the most popular JavaScript design patterns today. 
All of the properties and methods of any JavaScript object are inherently public and anyone can change, overwrite or even delete them. This is where the module pattern comes in.
All variations of module patterns are based on JavaScript closures. JavaScript closure provides a convenient way to create a private state and protect it. 

*/

/*
A self-invoking function is assigned to a variable thus creating a JavaScript closure with a private variable scope. 
The beauty of this pattern is that you can expose only the properties and methods that you want keeping the rest of them protected in the closure.
*/

var module = (function () {
	// private variables and functions
	return {
		// public variables and functions
	};
})();

//Notice the () around the anonymous function. This is required by the language, since statements that begin with the token function are always considered to be function declarations. Including () creates a function expression instead.

/*
Private members can be accessed only inside the module. 
Public members can be accessed outside module using moduleName.memberName or moduleName.memberName()
Public members are defined as "return { ...all public members... }"

We can't access private members in methods that are added to the object at a later point.
*/

//Module is defined as follows. 

var moduleName = (function () {
  var myPrivateVar, myPrivateMethod;
  // A private counter variable
  myPrivateVar = 0;
  // A private function which logs any arguments
  myPrivateMethod = function( foo ) { // Javascript can have function inside function. Here, anonymous function has another function inside it.
      console.log( foo );
  };
  return {// return statement is return an object {...}.
    // A public variable
    myPublicVar: "foo",
    // Public alias to a  private function
    publicAliasForPrivateMethod: myPrivateMethod,
    // A public function utilizing privates
    myPublicFunction: function( bar ) {
      // Increment our private counter
      myPrivateVar++;
      // Call our private method using bar
      myPrivateMethod( bar );
    }
    
  };
})();

console.log(moduleName.myPrivateVar);// undefined
console.log(moduleName.myPublicVar);// foo
console.log(moduleName.publicAliasForPrivateMethod("hi"));// hi

/*
// By passing globals as parameters to our anonymous function, we import them into our code, which is both clearer and faster than implied globals. Here’s an example:

(function ($, YAHOO) {
	// now have access to globals jQuery (as $) and YAHOO in this code
}(jQuery, YAHOO));
*/

/*
Revealing Module pattern
Define all variables and functions as private inside the module.
Just give public pointers to these private members inside "return { ...}"
*/
var myRevealingModule = (function () {
        var privateCounter = 0;
        function privateFunction() {
            privateCounter++;
        }
        function publicFunction() {
            publicIncrement();
            console.log(privateCounter);
        }
        function publicIncrement() {
            privateFunction();
        }
        function publicGetCount(){
          return privateCounter;
        }
        // Reveal public pointers to
        // private functions and properties       
       return {
            start: publicFunction,
            increment: publicIncrement,
            count: publicGetCount
        };
    })();

myRevealingModule.start();// O/P: 1


/*
But, there is a problem with this pattern. If you start developing very complex JavaScript applications, you will notice that this pattern does not allow you to split the code into multiple files.

Solution: 
Below pattern allows to initialize/augmented module object before the function is called.
You can use initialize/augment the module in some other file and define this function in some other file.
*/
// File1.js
// Before module is loaded in File2
var module = module || {};
module.id     = 12;
module.showIn = 'preview';

// File2.js
var module = (function (mod) {	
	// private variables and functions
	var privateVar = 1;
	
	// interval body of the module
	mod.render = function render() {
		// Here we use variables that we have passed 
		// before module was loaded
		console.log("id: " + mod.id);
		console.log("showIn: " + mod.showIn);
	};
	mod.render();
	
	// return public part
	return mod;
})(module || {});// pass pre-initialized module object to function. If it is undefined, then pass an empty object.

// File3.js
// Augmentation of the module

// You can augment a module at any time in the future. All you need to do is to repeat the basic structure of the module. 
// For example, if in addition to the code above you execute the following code.
// module already has render function. This will add another function doSomething to it.
// This way you can keep augmenting the module in multiple files.

var module = (function (mod) {	
	// private variables and functions
	var privateVar = 1;
	
	// body of the module
	mod.doSomething = function doSomething() {
		// You can put any JavaScript code here
	};
	
	// return public part
	return mod;
})(module || {});


/*
The Prettiest Form
My favorite and, arguably, the most prettiest form of the module pattern with augmentation is achieved when we call it and pass the context.

Besides using call to invoke the module, this version also uses functional declaration for internal methods, not functional expressions. 
If you assign a function to a variable you cannot use this variable before it was declared. However, if you use functional declarations, you can use them before they were declared. 
This allows to use functions and then exit the module with return this, while the implementation of the module follows below. 
In my view it makes the code easier to follow in large applications.

You can read about call method more in the document for 'Anonymous Function And Call Method' 

var module = (function () {	
	// private variables and functions
	var private = 1;
	
	// public part
	this.doSomething = doSomething;
	this.doNothing   = doNothing;
	return this;
	
	// Module Implementation	
	function doSomething() {
		// JavaScript code
	}
	function doNothin() {
		// JavaScript code
	}
}).call(module || {});
*/

/*
Sub-modules
-----------
Sub module is just a module inside the main module. 
There are many good cases for creating sub-modules. It is just like creating regular modules:

MODULE.sub = (function () {
	var my = {};
	// ...

	return my;
}());

Sub-modules have all the advanced capabilities of normal modules, including augmentation and private state.

Namespace pattern is dependent on Sub-module pattern.
*/