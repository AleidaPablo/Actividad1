document.addEventListener('DOMContentLoaded',()=>{
    const botonconvertir=document.getElementById('boton-convertir');
    const inputMexicanos=document.getElementById('mexicanos');
    const inputEstadounidences=document.getElementById('estadounidences');
    const mensajeError=document.getElementById('error');
    const tasaCambio=0.55;
    
    botonconvertir.addEventListener('click',realizarConversion);
    function realizarConversion() {
        const valor1=inputMexicanos.value.trim();//Lee el valor introducido en el campo de pesos mexicanos 
        if(valor1===''|| isNaN(valor1)){//Valida si el campo esta vacio
            mensajeError.style.display='block';//Si el campo esta vacio va a mostrar el mensaje de error
            inputEstadounidences.value='';
        }else{
            mensajeError.style.display='none';
            const mexicanos=parseFloat(valor1);
            const estadounidences=mexicanos*tasaCambio;//realiza la operacion para convertir los pesos mexicanos a estadounidences
            inputEstadounidences.value=estadounidences.toFixed(2) + " " + "USD";
        }

        }
        
    });
    