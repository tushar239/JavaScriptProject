/* Class can be created in 3 ways

http://www.phpied.com/3-ways-to-define-a-javascript-class/

It's important to note that there are no classes in JavaScript. Functions can be used to somewhat simulate classes, but in general JavaScript is a class-less language. 
Everything is an object. And when it comes to inheritance, objects inherit from objects, not classes from classes.

 1. Using function
 2. Using object literal (singleton)
 3. Singleton using function
 
Default return type of any constructor function in javascript is 'this'. 
You can modify it to return some other object using 'return {.....}'. This is a very powerful approach described more in detail in moduler pattern document.  
*/

// 1. Using function

// Difference between this.member... and PersonSample.prototype.member... is described in Inheritance document.
function PersonSample(gender) { // constructor function
	this.gender = gender;
	this.getGender = function() {
		return this.gender;
	};
	this.getInfo = getMyInfo;
}

//anti-pattern! function is defined a global level and used inside PersonSample. 
function getMyInfo() {
    return this.gender+"   :   "+this.address;
}

PersonSample.prototype.address = "address";
PersonSample.prototype.getAddress = function() {
	return this.address;
};

var personSample = new PersonSample("Male");
console.log("Gender : "+personSample.getGender());
console.log("Address :"+personSample.getAddress());
console.log("Info : "+personSample.getInfo());




// 2. Using object literal (Also called singleton)
// You can skip the class-like stuff and create an instance (object) immediately.
// In this case you don't need to (and cannot) create an instance of the class, it already exists. So you simply start using this instance.
/*
	var o = {};
	instead of the "normal" way:
	var o = new Object();
	
	For arrays you can do:
	var a = [];
	instead of:
	var a = new Array();
*/
var apple = {
	color : "red",
	style : "round",
	getInfo: function () {
        return this.color + ' ' + this.style;
    }
};

apple.color =  "blue";
console.log(apple.getInfo());

// 3. Singleton using function
// new function() creates an anonymous function and its return value 'this' is assigned to a variable circle. 
var circle = new function() { // an anonymous constructor function. It's not too common
	this.shape = "round";
	this.getShape = function() {
		return this.shape;
	};
}; 
circle.shape = "not square";
console.log(circle.getShape());