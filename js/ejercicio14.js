document.addEventListener('DOMContentLoaded',()=>{

    const botoncalcular=document.getElementById('boton-calcular');
    const inputNumeros=document.getElementById('numeros');
    const inputMayor=document.getElementById('mayor');
    const inputMenor=document.getElementById('menor');
    const inputPromedio=document.getElementById('promedio');
    const mensajeError=document.getElementById('error');

    botoncalcular.addEventListener('click',calcularNumeros);
    function calcularNumeros() {
        const valor1=inputNumeros.value.trim();
        if(valor1===''){
            mensajeError.style.display='block';
            inputMayor.value='';
            inputMenor.value='';
            inputPromedio.value='';
        }else{
            const arreglo=valor1.split(',');
            const numeros=arreglo.map(Number);
            if(numeros.some(isNaN)){
                mensajeError.style.display='block';
                inputMayor.value='';
                inputMenor.value='';
                inputPromedio.value='';
            }else{

                mensajeError.style.display='none';
                const mayor=Math.max(...numeros);
                const menor=Math.min(...numeros);
                const suma=numeros.reduce((acc,valor)=>acc+valor,0);
                const promedio=suma/numeros.length;
                inputMayor.value=mayor;
                inputMenor.value=menor;
                inputPromedio.value=promedio.toFixed(2);

            }
        }
    }

});