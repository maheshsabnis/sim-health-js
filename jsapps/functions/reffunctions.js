// the function(){}, will invoke 'constructor()' method on Object
// all public members will be prefixed using 'this.'   otherwise they are 'private'
// No Explicit return type
// For Numeric Operations all Operands MUST be number else
    // + will perform String Concatination
    // -,*,/ will generate NaN (Not-a-Number)
var MyObject = function(){
     
    this.add = function(x,y){
        privateDisplay();
        return x + y;
    };
    this.multi = function(x,y){
        return x * y;
    };
    this.power = function(x,y){
        return Math.pow(x,y);
    };
    function privateDisplay(){
        console.log('I am Private');
    }
}; 


