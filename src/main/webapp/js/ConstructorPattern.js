/*
'this' and Constructor Function
-------------------------------
var x = 10;
var o = { x: 15 };

function f()
{
	console.log(this.x);
}

f(); // 10 - Here, this references the global object. x is a global variable. So, this.x = 10.


http://odetocode.com/Articles/473.aspx

	function Point(x,y)
	{
		this.x = x;
		this.y = y;
	}

var p1 = new Point(3,5);
var p2 = new Point(4,6);

When we use the new operator with the Point function, the new operator will first create a new object. The new operator then invokes the Point function and passes a reference to the newly created object in the implicit "this" parameter.
Inside the Point function we are creating new name/value pairs using the parameter values passed to the function.
*/

/*
Constructor Pattern
-------------------

*/

// Each of the following options will create a new empty object:
var newObject = {};
//or 
var newObject = Object.create( null );
// or
var newObject = new Object();

// the "Object" constructor in the final example creates an object wrapper for a specific value, or where no value is passed, it will create an empty object and return it.


var AnyPerson = function() {
	this.name = "Tushar";
};
AnyPerson.prototype.getName = function() {
	return this.name;
};

var objOfAnyPerson = new AnyPerson();
console.log(objOfAnyPerson);
/*
AnyPerson {name: "Tushar", getName: function}
	name: "Tushar"
		__proto__: Object --------------- prototype is just an empty object {} at the beginning inside any Object. When you add a member to AnyObject.prototype.***, it adds it to __proto__.
			constructor: function () {.....}
			getName: function () {.....}
			__proto__: Object
				__defineGetter__: function __defineGetter__() { [native code] }
				__defineSetter__: function __defineSetter__() { [native code] }
				__lookupGetter__: function __lookupGetter__() { [native code] }
				__lookupSetter__: function __lookupSetter__() { [native code] }
				constructor: function Object() { [native code] }
				get __proto__: function __proto__() { [native code] }
				hasOwnProperty: function hasOwnProperty() { [native code] }
				isPrototypeOf: function isPrototypeOf() { [native code] }
				propertyIsEnumerable: function propertyIsEnumerable() { [native code] }
				set __proto__: function __proto__() { [native code] }
				toLocaleString: function toLocaleString() { [native code] }
				toString: function toString() { [native code] }
				valueOf: function valueOf() { [native code] }
*/


// This just creates a wrapper of AnyPerson
var CloneOfAnyPerson = new Object(AnyPerson);
var objOfCloneOfAnyPerson = new CloneOfAnyPerson();

console.log(objOfCloneOfAnyPerson);
/*
AnyPerson {name: "Tushar", getName: function}
	name: "Tushar"
		__proto__: Object
			constructor: function () {.....}
			getName: function () {.....}
			__proto__: Object
				__defineGetter__: function __defineGetter__() { [native code] }
				__defineSetter__: function __defineSetter__() { [native code] }
				__lookupGetter__: function __lookupGetter__() { [native code] }
				__lookupSetter__: function __lookupSetter__() { [native code] }
				constructor: function Object() { [native code] }
				get __proto__: function __proto__() { [native code] }
				hasOwnProperty: function hasOwnProperty() { [native code] }
				isPrototypeOf: function isPrototypeOf() { [native code] }
				propertyIsEnumerable: function propertyIsEnumerable() { [native code] }
				set __proto__: function __proto__() { [native code] }
				toLocaleString: function toLocaleString() { [native code] }
				toString: function toString() { [native code] }
				valueOf: function valueOf() { [native code] }
*/

console.log(CloneOfAnyPerson === AnyPerson); // true


/****** Now let's take a look at function becoming a constructor ******/

function IAmPerson() {
  this.name = "Tushar";
  // By default it return 'this'
};
IAmPerson.prototype.getName = function() {
	return this.name;
};

var objOfIAmPerson = new IAmPerson();
console.log(objOfIAmPerson);
/*
IAmPerson {name: "Tushar", getName: function}
	name: "Tushar"
	__proto__: IAmPerson ------- Here objOfIAmPerson is not a clone of IAmPerson. It is an instance of it. So, objOfIAmPerson's prototype(__proto__) will be IAmPerson.prototype.   
		constructor: function IAmPerson() {...}
		getName: function () {...}
		__proto__: Object`
			__defineGetter__: function __defineGetter__() { [native code] }
			__defineSetter__: function __defineSetter__() { [native code] }
			__lookupGetter__: function __lookupGetter__() { [native code] }
			__lookupSetter__: function __lookupSetter__() { [native code] }
			constructor: function Object() { [native code] }
			get __proto__: function __proto__() { [native code] }
			hasOwnProperty: function hasOwnProperty() { [native code] }
			isPrototypeOf: function isPrototypeOf() { [native code] }
			propertyIsEnumerable: function propertyIsEnumerable() { [native code] }
			set __proto__: function __proto__() { [native code] }
			toLocaleString: function toLocaleString() { [native code] }
			toString: function toString() { [native code] }
			valueOf: function valueOf() { [native code] }

*/

// In case of Inheritance, as you can see in Inheritance document, instance of subclass will have 
// __proto__ defined as entire Parent class