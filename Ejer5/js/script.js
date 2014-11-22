



var form=document.getElementById('form');

var divData=document.getElementById('datosGenerales');
var divAddress=document.getElementById('direccion');
var divUser=document.getElementById('usuario');

var inputName=document.getElementById('inputName');
var inputLast=document.getElementById('inputLast');
var inputSexo=document.getElementById('inputSexo');
var inputEdad=document.getElementById('inputEdad');
var inputTelefono=document.getElementById('inputTelefono');
var btn1=document.getElementById('btn1');

var inputCalle1=document.getElementById('inputCalle1');
var inputCalle2=document.getElementById('inputCalle2');
var inputNumExt=document.getElementById('inputNumExt');
var inputColonia=document.getElementById('inputColonia');
var inputCP=document.getElementById('inputCP');
var inputCiudad=document.getElementById('inputCiudad');
var inputEstado=document.getElementById('inputEstado');
var inputPais=document.getElementById('inputPais');
var btn2=document.getElementById('btn2');

var inputUser=document.getElementById('inputUser');
var inputPass=document.getElementById('inputPass');
var inputCheckPass=document.getElementById('inputCheckPass');
var inputEmail=document.getElementById('inputEmail');
var butSub=document.getElementById('butSub');


divAddress.style.display='none';
divUser.style.display='none';

    btn1.addEventListener('click',function(){       
        
        if(validador.validarString(inputName.value) && validador.validarString(inputLast.value) && validador.validarString(inputSexo.value) 
           && validador.validarNumber(inputEdad.value) && validador.validarNumber(inputTelefono.value)){
            
            divData.style.display='none';        
            divAddress.style.display='inline-block';
        }
        else{
                if(validador.validarString(inputName.value)===false){
                    inputName.style.borderColor='red';
                }
                if(validador.validarString(inputLast.value)===false){
                    inputLast.style.borderColor='red';
                }
                if(validador.validarString(inputSexo.value)===false){
                    inputSexo.style.borderColor='red';
                }        
                if(validador.validarNumber(inputEdad.value)===false){
                    inputEdad.style.borderColor='red';
                }
                if(validador.validarNumber(inputTelefono.value)===false){
                    inputTelefono.style.borderColor='red';
                }
                return false;
           }  
    });

    btn2.addEventListener('click',function(){
        
        if(validador.validarAlpha(inputCalle1.value) && validador.validarAlpha(inputCalle2.value) &&                                                           validador.validarNumber(inputNumExt.value) && validador.validarString(inputColonia.value) && 
                validador.validarNumber(inputCP.value) && validador.validarString(inputCiudad.value) && 
                validador.validarString(inputEstado.value) && validador.validarString(inputPais.value)){
            
        divAddress.style.display='none';
        divUser.style.display='inline-block';
        }
        else{
            if(validador.validarAlpha(inputCalle1.value)===false){
                    inputCalle1.style.borderColor='red';
                }
                if(validador.validarAlpha(inputCalle2.value)===false){
                    inputCalle2.style.borderColor='red';
                }
                if(validador.validarNumber(inputNumExt.value)===false){
                    inputNumExt.style.borderColor='red';
                }        
                if(validador.validarString(inputColonia.value)===false){
                    inputColonia.style.borderColor='red';
                }
                if(validador.validarNumber(inputCP.value)===false){
                    inputCP.style.borderColor='red';
                }
                if(validador.validarString(inputCiudad.value)===false){
                    inputCiudad.style.borderColor='red';
                }                
                if(validador.validarString(inputEstado.value)===false){
                    inputEstado.style.borderColor='red';
                }                
                if(validador.validarString(inputPais.value)===false){
                    inputPais.style.borderColor='red';
                }
                return false;
            }
        });

    butSub.addEventListener('click', function(){
        
                if(validador.validarAlpha(inputUser.value)===false){
                    inputUser.style.borderColor='red';
                }
                if(validador.compararString(inputPass.value,inputCheckPass.value)===false){
                    inputPass.style.borderColor='red';
                    inputCheckPass.style.borderColor='red';
                }
                if(validador.validarEmail(inputEmail.value)===false){
                    inputEmail.style.borderColor='red';
                }    
    });


    form.addEventListener('submit', function(e){
        e.preventDefault();        
        
        
        if(validador.validarAlpha(inputUser.value) && validador.compararString(inputPass.value,inputCheckPass.value) &&                                  validador.validarEmail(inputEmail.value)){
           this.submit();
        }
           else{
                return false;
           }
    }); 