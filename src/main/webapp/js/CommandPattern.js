// Command Pattern
// http://www.godlikemouse.com/2008/09/04/javascript-command-pattern/

function ParentCommand()  {
	this.execute = function(command){
        console.log("Inside ParentCommand's execute() method");
    };	
};

function MyFirstCommand() {
	// Call the parent constructor
	ParentCommand.call(this);
	// Overridden execute() method
	this.execute = function(command){
        console.log("Inside MyFirstCommand's execute() method");
    };
};

MyFirstCommand.prototype = new ParentCommand();
MyFirstCommand.prototype.constructor = MyFirstCommand;

function MySecondCommand() {
	// Call the parent constructor
	ParentCommand.call(this);
	// Overridden execute() method
	this.execute = function(command){
        console.log("Inside MySecondCommand's execute() method");
    };
};

MySecondCommand.prototype = new ParentCommand();
MySecondCommand.prototype.constructor = MySecondCommand;

var Interpreter = {
	execute : function(command) {
		try {
			// execute the command
			command.execute();
		} catch (ex) {
			console.log("Exceptiion:" + ex.message);
		}
	}
};

Interpreter.execute(new MyFirstCommand());// Inside MyFirstCommand's execute() method
Interpreter.execute(new MySecondCommand());// Inside MySecondCommand's execute() method
