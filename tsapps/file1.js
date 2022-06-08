"use strict";
exports.__esModule = true;
exports.MyClass = void 0;
// file1 is exporting the MyClass
// This will make the MyClass as a 'TypeScript ES6 Module aka ES 6 Module' 
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.printMessage = function (str) {
        console.log('====================================');
        console.log("The Message is ".concat(str));
        console.log('====================================');
    };
    return MyClass;
}());
exports.MyClass = MyClass;
