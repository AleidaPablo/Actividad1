document.addEventListener('DOMContentLoaded',()=>{
    const botonverificar=document.getElementById('boton-verificar');
    const inputEdad=document.getElementById('edad');
    const inputResultado=document.getElementById('resultado');
    const mensajeError=document.getElementById('error');
    
    
    botonverificar.addEventListener('click',verificarEdad);
    function verificarEdad() {
        const valor1=inputEdad.value.trim();//Lee el valor introducido en el campo de pesos mexicanos 
        if(valor1===''|| isNaN(valor1)||parseFloat(valor1)<=0){//Valida si el campo esta vacio
            mensajeError.style.display='block';//Si el campo esta vacio va a mostrar el mensaje de error
            inputResultado.value='';
        }else{
            mensajeError.style.display='none';
            const edad=parseFloat(valor1);
            if(edad>=18){
                inputResultado.value='Puede votar';
            }else{
                inputResultado.value='No puede votar';
            }
        }

        }
        
    });