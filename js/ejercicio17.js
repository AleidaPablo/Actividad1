document.addEventListener('DOMContentLoaded',()=>{
    const inputTarea=document.getElementById('tarea');
    const botonAgregar=document.getElementById('boton-agregar');
    const lista=document.getElementById('lista');
    const manejarTareas=()=>{
        let tareas=JSON.parse(localStorage.getItem('tareas')) || [];
        const agregarTarea=()=>{
            const texto=inputTarea.value.trim();
            if(texto===''){Swal.fire({ icon:'error',title:'Tarea vacía',text:'Por favor escribe una tarea.' });
                return;
            }
            tareas.push({tarea:texto,completada:false });
            localStorage.setItem('tareas',JSON.stringify(tareas));
            inputTarea.value='';
            renderizarTareas();
        };
        const eliminarTarea=(indice)=>{
            Swal.fire({title:'¿Eliminar tarea?', text:'Esta tarea será eliminada.',icon:'warning',showCancelButton:true,confirmButtonText:'Sí, eliminar',cancelButtonText:'Cancelar'  }).then((resultado)=>{
                if(resultado.isConfirmed){
                    tareas.splice(indice,1);
                    localStorage.setItem('tareas',JSON.stringify(tareas));
                    renderizarTareas();
                }
            });
        };
        const renderizarTareas=()=>{
            lista.innerHTML='';
            if(tareas.length===0){
                lista.innerHTML='<div class="vacio">No hay tareas pendientes</div>';
                return;
            }
            tareas.forEach((tarea,indice)=>{
                lista.innerHTML+=`
                    <div class="tarea"> <span>${tarea.tarea}</span>
                        <button class="boton-eliminar" onclick="eliminar(${indice})"> Eliminar</button>
                    </div> `;
            });
        };
        window.eliminar=eliminarTarea;
        botonAgregar.addEventListener('click',agregarTarea);
        renderizarTareas();
    };
    manejarTareas();
});