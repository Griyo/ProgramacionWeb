

var validador=(function (){
    
    var expregString = /^[a-zA-Z]{1,25}$/;
    var expregNumber = /^[0-9]{1,10}$/;
    var expregAlpha = /^[a-zA-Z0-9]{1,30}$/;
    var expregEmail=/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/;
    
    
    return{
        
        validarString:function(cadena){
            return(expregString.test(cadena));
        },
        
        validarNumber:function(cadena){
            return(expregNumber.test(cadena));
        },
        
        validarAlpha:function(cadena){
            return(expregAlpha.test(cadena));
        },
        
        validarEmail:function(cadena){
            return(expregEmail.test(cadena));
        },
        compararString:function(cadena, string){
            return(cadena==string);
        }
    }
      
    
    
})();