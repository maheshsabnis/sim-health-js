// Close function is like regular JS function, but it returns a JSON object that contains
// the public schema to be exposed
// If any member of the close function object is not in return block then it is private  

function StringUtilities(){
    return {
        getStringLength:function(str){
            return str.length;
        },
        reverse:function(str){
            var reverse='';
            for(var i = str.length-1; i>=0;i--){
                reverse+=str[i];
            }    
            return reverse;
        }
    }
}
