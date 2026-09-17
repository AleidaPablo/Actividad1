document.addEventListener('DOMContentLoaded',()=>{
    const botonconvertir=document.getElementById('boton-convertir');
    const inputKilometros=document.getElementById('kilometros');
    const inputMillas=document.getElementById('millas');
    const mensajeError=document.getElementById('error');
    
    botonconvertir.addEventListener('click',realizarConversion);
    function realizarConversion() {
        const valor1=inputKilometros.value.trim();//Lee el valor introducido por el ususario
        if(valor1===''|| isNaN(valor1)){//Valida que el campo no este vacio
            mensajeError.style.display='block';
            inputMillas.value='';
        }else{
            mensajeError.style.display='none';
            const kilometros=parseFloat(valor1);//Convierte el numero que se obtuvo por el usuario a decimales
            const millas=kilometros*0.621371;//realiza la operacion para convertir kilometros a millas
            inputMillas.value=millas.toFixed(2);
        }

        }
        
    });
    