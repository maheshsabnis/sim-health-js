var EmployeeObj = /** @class */ (function () {
    // and 'any' will be any data type for the property i.e. number, string, boolean, date, etc.
    function EmployeeObj(EmpNo, //--> Index 0
    EmpName, // --> Index 1
    Salary) {
        this.EmpNo = EmpNo;
        this.EmpName = EmpName;
        this.Salary = Salary;
    }
    return EmployeeObj;
}());
var Employees = new Array();
Employees.push(new EmployeeObj(1, 'A', 100));
Employees.push(new EmployeeObj(2, 'B', 200));
// List all properties
var obj = new EmployeeObj(0, '', 0);
var keys = Object.keys(obj);
console.log("List of Properties = ".concat(JSON.stringify(obj)));
// Lets print data from Array of MyCLass (Employees) for each REcord an its properties
// Here e is each employee record
for (var _i = 0, Employees_1 = Employees; _i < Employees_1.length; _i++) {
    var e = Employees_1[_i];
    // here c is each property of the EmployeeObj Object
    for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
        var c = keys_1[_a];
        // e[c] will product compiler error because 'e' is object and 'c' is string
        // so from TypeScript 4.0+ string indexes for reading data from object is not 
        // allowed 
        // To remove the Error, modify the EmployeeObj to define an 'indexer' property
        // to read values for the properties of the EMployeeObj dynamically 
        // w/o Hard-Coding
        console.log("Record is = ".concat(JSON.stringify(e[c])));
    }
}
