var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClsBase = /** @class */ (function () {
    function ClsBase(msg, info, val) {
        this.msg = msg;
        this.info = info;
        this.val = val;
        console.log('Base class Constructor');
    }
    ClsBase.prototype.showInfo = function () {
        console.log("Base Class, Private message = ".concat(this.msg, ", Public Info = ").concat(this.info, " \n\n          Proteted val = ").concat(this.val));
    };
    ClsBase.prototype.changeCase = function (c) {
        if (c === "u" || c === 'U')
            return "".concat(this.msg, " ").concat(this.info).toUpperCase();
        if (c === "l" || c === 'L')
            return "".concat(this.msg, " ").concat(this.info).toLowerCase();
        return "".concat(this.msg, " ").concat(this.info);
    };
    ClsBase.prototype.protectedMethod = function () {
        console.log('I am Proteted');
    };
    return ClsBase;
}());
// extends: This will provide an access of the publie members of the base class to DErive class 
var ClsDerive = /** @class */ (function (_super) {
    __extends(ClsDerive, _super);
    function ClsDerive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClsDerive.prototype.display = function () {
        console.log("The Derive Class , and public value from Base = ".concat(this.info, " \n\n            and protected value from Base is = ").concat(this.val));
    };
    return ClsDerive;
}(ClsBase));
var o1 = new ClsDerive("A", "B", "C");
o1.showInfo();
o1.display();
console.log('====================================');
console.log("Upper = ".concat(o1.changeCase('u')));
console.log('====================================');
console.log('====================================');
console.log("Lower = ".concat(o1.changeCase('l')));
console.log('====================================');
o1.protectedMethod();
