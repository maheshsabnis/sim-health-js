// var i = 10;
// function increment(){
//     console.log('in Increment method i = ' + i);
//     i++;
//     return i;
// }
// Module using IIFE
var MyModule = (function () {
    // available only within the Module i.e. MyModule
  var i = 10;
  function increment() {
    console.log("in Increment method i = " + i);
    i++;
    return i;
  }
  // module decides what is to be returned
  // and this will be accessible using ModuleName
  //i.e. MyMoule.fnIncrement
  return {
     fnIncrement:increment
  };
})();
