document.addEventListener('DOMContentLoaded',()=>{
    const numero1=document.getElementById('numero1');
    const numero2=document.getElementById('numero2');
    const resultado=document.getElementById('resultado');
    const botonSuma=document.getElementById('boton-suma');
    const botonResta=document.getElementById('boton-resta');
    const botonMultiplicacion=document.getElementById('boton-multiplicacion');
    const botonDivision=document.getElementById('boton-division');
    const sumar=(a,b)=>a+b;
    const restar=(a,b)=>a-b;
    const multiplicar=(a,b)=>a*b;
    const dividir=(a,b)=>b!==0?a/b:'Error: División por cero';
    botonSuma.addEventListener('click',()=>calcularOperacion('suma'));
    botonResta.addEventListener('click',()=>calcularOperacion('resta'));
    botonMultiplicacion.addEventListener('click',()=>calcularOperacion('multiplicacion'));
    botonDivision.addEventListener('click',()=>calcularOperacion('division'));
    function calcularOperacion(operacion){
        const valor1=numero1.value.trim();
        const valor2=numero2.value.trim();
        if(valor1==='' || valor2==='' || isNaN(valor1) || isNaN(valor2)){
            Swal.fire({icon:'error',title:'Datos incorrectos',text:'Por favor ingresa dos números válidos.'
            });
            resultado.value='';
            return;
        }
        const a=parseFloat(valor1);
        const b=parseFloat(valor2);
        let resultadoOperacion;
        if(operacion==='suma'){
            resultadoOperacion=sumar(a,b);
        }
        if(operacion==='resta'){
            resultadoOperacion=restar(a,b);
        }
        if(operacion==='multiplicacion'){
            resultadoOperacion=multiplicar(a,b);
        }
        if(operacion==='division'){
            if(b===0){
                Swal.fire({ icon:'error',title:'No se puede dividir',text:'No es posible dividir entre cero.'
                });
                resultado.value='';
                return;
            }
            resultadoOperacion=dividir(a,b);
        }
        resultado.value=resultadoOperacion;
    }

});