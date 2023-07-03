/*
	First read Constructor Pattern to understand the concept of Javascript constructor.

	- Similarity and Difference between members defined in this and prototype : 
	Members inside both this and prototype can be inherited. 
	For every instance of Person, a new instance of ownMethod1() will be created because it is inside 'this'
	For all instances of Person, only one instance of sayHello() will be created because sayHello() method is inside Person.prototype.  
 	
 	So, all methods ideally should be defined inside Person.prototype only. This saves memory.
 	
 	http://stackoverflow.com/questions/5912497/what-is-difference-between-define-function-by-prototype-and-class-property
 	
 	- A prototype chain ---- VERY IMPORTANT CONCEPT
 	http://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript
 	http://dmitrysoshnikov.com/ecmascript/javascript-the-core/
 	
 	Prototype objects are also just simple objects and may have their own prototypes. If a prototype has a non-null reference to its prototype, and so on, this is called the prototype chain.
 	A prototype chain is a finite chain of objects which is used to implement inheritance and shared properties.
 	
 	The rule is simple: if a property or a method is not found in the object itself (i.e. the object has no such an own property), then there is an attempt to find this property/method in the prototype chain. 
 	If the property is not found in the prototype, then a prototype of the prototype is considered, and so on, i.e. the whole prototype chain (absolutely the same is made in class-based inheritance, when resolving an inherited method � there we go through the class chain). 
 	The first found property/method with the same name is used. Thus, a found property is called inherited property. If the property is not found after the whole prototype chain lookup, then undefined value is returned.
 	
 	- When you print person1 (object of Person), all Person.prototype goes into person1's __proto__.
 	So, console.log(person1.__proto__ === Person.prototype) will print true
 	
 	
 	Person {gender: "Male", ownMethod1: function, sayHello: function, b: 10}
		b: 30
		gender: "Male"
		ownMethod1: function () {...}
		__proto__: Person
					b: 10
					constructor: function Person(gender) {
					sayHello: function ()
					__proto__: Object
					
 	- Student inherits Person. Every Student instance will have a property "_proto_", which points to Person. 
 	
 	When you print the student1 object:
 	
 	Student {gender: "Male", ownMethod1: function, gender: "Male", ownMethod1: function, constructor: function�}
		gender: "Male"
		ownMethod1: function () {...}
		__proto__: Person
				constructor: function Student(gender) {...}
				gender: undefined
				ownMethod1: function () {...}
				__proto__: Person
							b: 10
							constructor: function Person(gender) {...}
							sayHello: function () {...}
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

function Person(gender) {
  this.gender = gender;
  // Can be inherited
  this.ownMethod1 = function() {
	  console.log("Inside Person's ownMethod1()");
  };
  // Method or variable which is not inside 'this' becomes a private method
  var ownMethod3 = function() {
	  console.log("Inside Person's ownMethod3()");
  };
  console.log('Person instantiated');
}

Person.staticVariable = 20;

// static method : Can't be inherited
Person.staticMethod = function() {
	console.log("Inside Person's ownMethod2()");
};

// prototype method can be inherited
Person.prototype.sayHello = function()
{
  console.log ('Inside sayHello()');
};

Person.prototype.b = 10;


var person1 = new Person('Male');
var person2 = new Person('Female');

console.log("person1 : ");
console.log(person1); // Person {gender: "Male", ownMethod1: function, sayHello: function, b: 10}
// call the Person sayHello method.
person1.sayHello(); // Inside sayHello()
person1.ownMethod1();
//person1.ownMethod2(); // Error: Uncaught TypeError: Object #<Person> has no method 'ownMethod2'
console.log("Calling Person's static method staticMethod()");
Person.staticMethod(); // Inside Person's ownMethod2()
//person1.ownMethod3(); // Error --- Can't call private method through object reference
console.log("Has own variable gender:"+person1.hasOwnProperty("gender")); // true
console.log("Has own method ownMethod1():"+person1.hasOwnProperty("ownMethod1")); // true
console.log("Has own method staticMethod():"+person1.hasOwnProperty("staticMethod")); // false
console.log("Has own method ownMethod3():"+person1.hasOwnProperty("ownMethod3")); // false
console.log("Has own method sayHello():"+person1.hasOwnProperty("sayHello")); // false

//person1.b=30;
console.log("person1's b before change:"+person1.b);// 10
person1.b=30;
console.log("person1's b after change:"+person1.b);// 30
console.log("person2's b:"+person2.b);// 10
console.log("Person.staticVariable:"+Person.staticVariable);

console.log("person1.staticVariable:"+person1.staticVariable);// undefined
console.log("person2.staticVariable:"+person2.staticVariable);// undefined

// Inheritance

function Student(gender) {
	// Call the parent constructor
	Person.call(this, gender);
}
//inherit Person : it will set Person inside Student's __proto__
Student.prototype = new Person();
//correct the constructor pointer because it points to Person
Student.prototype.constructor = Student;


var student1 = new Student("Male");
console.log("Inherited property gender:"+student1.gender);
console.log("Calling Inherited Method sayHello() from Student object:");
student1.sayHello(); // Inherited from Person

console.log("Calling Inherited Method ownMethod1() from Student object:");
student1.ownMethod1();
// student1.staticMethod(); //Uncaught TypeError: Object #<Student> has no method 'staticMethod'
// Student.staticMethod();// static method can't be inherited
console.log("Person.prototype:");
console.log(Person.prototype); // {sayHello: function, b: 10}

console.log("student1:");
console.log(student1);// {gender: Male, ownMethod1: function, gender: undefined, ownMethod1: function, constructor: function�}

console.log("student1.__proto__:");
console.log(student1.__proto__); // Person{gender: "Male", ownMethod1: function, constructor: function, sayHello: function, b: 10}

console.log("Calling student1.__proto__.sayHello() : ");
// This is same as student1.sayHello(); 
student1.__proto__.sayHello(); // Inside sayHello()

