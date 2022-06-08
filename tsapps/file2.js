"use strict";
exports.__esModule = true;
// file2 is importing an exported MyClass
// the {} brackets means the imported type is used as 'Expression'
// for execution
var file1_1 = require("./file1");
// CReate an instance
var obj = new file1_1.MyClass();
obj.printMessage('I am an Another Module File');
