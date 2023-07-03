/*
Using call to invoke an anonymous function
*/

// Array of objects
var animals = [
  {species: 'Lion', name: 'King'},
  {species: 'Whale', name: 'Fail'}
];
 
for (var i = 0; i < animals.length; i++) {
  (function (i) {// Anonymous function 
    this.print = function () { 
      console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
    }; 
    this.print();
  }).call(animals[i], i);// call function is used to call an anonymous function. animals[i] is set to 'this'.
}