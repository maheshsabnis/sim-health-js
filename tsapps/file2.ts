// file2 is importing an exported MyClass
// the {} brackets means the imported type is used as 'Expression'
// for execution
// WHen file2.ts is transpiled the file1.js will also be transpiled
// a tsconfig.json default settings
import {MyClass} from './file1';
// CReate an instance
let obj = new MyClass();
obj.printMessage('I am an Another Module File'); 