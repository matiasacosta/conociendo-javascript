class Tarea {
    constructor(titulo, descripcion, fecha, hora) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.hora = hora;
    }
    speak(urgente) {
        console.log(`Tarea ${this.title} es '${urgente}'`);
    }
}

let form = document.querySelector("form");
form.addEventListener(
    "submit",
    event => {
        let tarea = new Tarea(
            form.elements.titulo.value,
            form.elements.descripcion.value,
            form.elements.fecha.value,
            form.elements.hora.value,
        );

        console.log("Tarea: ", tarea);
        console.log("Tarea (tipo):", typeof(tarea));
        agregar_tarea_hoy(tarea);
        event.preventDefault();
    });

function agregar_tarea_hoy(tarea) {
    // body...
    // Tomar el elemento al que queremos agregar el nuevo elemento
    let target = document.querySelector('#task-container-01-fin');

    // Creamos el nuevo elemento div
    let div = document.createElement('div');

    // Rellenamos el contenido:
    div.innerHTML = `
    <h4>${tarea.titulo}</h4>
    <p>${tarea.descripcion}</p>
    <p>${tarea.fecha} ${tarea.hora}</p>`;
    
    // con la clase info:
    div.className = 'task-info';

    // Insertamos:
    target.parentNode.insertBefore( div, target );

    // Para que vaya insertando arriba tipo pila
    target.parentNode.insertBefore( div, target.nextSibling );
}
