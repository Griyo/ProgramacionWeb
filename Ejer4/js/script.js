window.calculadora = {
    suma: function(a,b){
        return a+b;
    },
    resta: function(a,b){
        return a-b;
    },
    mult: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    }
}

var select = document.getElementById('num1');  
var resultado = document.getElementById('miclase');
console.log(resultado);

var operaciones = function(e){
    
      var valor=select.options[select.selectedIndex].value;
      console.log(valor);
     switch(select.selectedIndex){
            case 0:
                resultado.innerHTML=calculadora.suma(10,20);
                console.log(resultado.innerHTML);
            break;
            case 1:
                resultado.innerHTML=calculadora.resta(10,20);
                console.log(resultado.innerHTML);            
             break;
            case 2:
                resultado.innerHTML=calculadora.mult(10,20);
                console.log(resultado.innerHTML);
            break;
            case 3:
                resultado.innerHTML=calculadora.div(10,20);
                console.log(resultado.innerHTML);
            break;
    }
}

if(select.addEventListener){
 select.addEventListener('change', operaciones);
}else{
 select.attachEvent('onchange', operaciones); 
}
    
   


