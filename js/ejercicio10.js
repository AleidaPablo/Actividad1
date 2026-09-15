document.addEventListener('DOMContentLoaded',()=>{
    const botonconvertir=document.getElementById('boton-convertir');
    const inputCelsius=document.getElementById('celsius');
    const inputFahrenheit=document.getElementById('fahrenheit');
    const mensajeError=document.getElementById('error');
    
    botonconvertir.addEventListener('click',realizarConversion);
    function realizarConversion() {
        const valor1=inputCelsius.value.trim();
        if(valor1===''|| isNaN(valor1)){
            mensajeError.style.display='block';
            inputFahrenheit.value='';
        }else{
            mensajeError.style.display='none';
            const celsius=parseFloat(valor1);
            const fahrenheit=(celsius * 9/5)+32;;
            inputFahrenheit.value=fahrenheit
        }

        }
        
    });
    
