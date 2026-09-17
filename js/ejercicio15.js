document.addEventListener('DOMContentLoaded',()=>{
    const botonAgregar=document.getElementById('boton-agregar');
    const botonCalcular=document.getElementById('boton-calcular');
    const inputNombre=document.getElementById('nombre');
    const inputCalificacion=document.getElementById('calificacion');
    const inputPromedio=document.getElementById('promedio');
    const inputMayor=document.getElementById('mayor');
    const inputMenor=document.getElementById('menor');
    const mensajeError=document.getElementById('error');
    const lista=document.getElementById('lista');
    let estudiantes=[];
    botonAgregar.addEventListener('click',agregarEstudiante);
    botonCalcular.addEventListener('click',calcularResultados);
    function agregarEstudiante(){
        const nombre=inputNombre.value.trim();
        const calificacion=inputCalificacion.value.trim();
        if(nombre==='' || calificacion==='' || isNaN(calificacion)){
            mensajeError.style.display='block';
        }else{
            mensajeError.style.display='none';
            const estudiante={
                nombre:nombre,
                calificacion:parseFloat(calificacion)
            };
            estudiantes.push(estudiante);
            mostrarEstudiantes();
            inputNombre.value='';
            inputCalificacion.value='';
        }
    }
    function mostrarEstudiantes(){
        lista.innerHTML='';
        estudiantes.forEach(estudiante=>{lista.innerHTML+=`<div class="estudiante"><span>${estudiante.nombre}</span><span>${estudiante.calificacion}</span></div> `;
        });
    }
    function calcularResultados(){
        if(estudiantes.length===0){
            mensajeError.style.display='block';
            return;
        }
        mensajeError.style.display='none';
        const promedio=estudiantes.reduce((total,estudiante)=>total+estudiante.calificacion,0)/estudiantes.length;
        const calificacionMaxima=Math.max(...estudiantes.map(estudiante=>estudiante.calificacion));
        const calificacionMinima=Math.min(...estudiantes.map(estudiante=>estudiante.calificacion));
        const estudianteMayor=estudiantes.find(estudiante=>estudiante.calificacion===calificacionMaxima);
        const estudianteMenor=estudiantes.find(estudiante=>estudiante.calificacion===calificacionMinima);
        inputPromedio.value=promedio.toFixed(2);
        inputMayor.value=estudianteMayor.nombre;
        inputMenor.value=estudianteMenor.nombre;
    }

});