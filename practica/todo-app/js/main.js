const tareas = [
  new Tarea("La tarea de hoy", "Una descripción", "2019/09/17"),
  new Tarea("La tarea de mañana", "Una descripción", "2019/09/18"),
  new Tarea("Otra tarea de mañana", "Una descripción", "2019/09/18"),
  new Tarea("Una tarea para hacer más tarde", "Una descripción", "2019/09/19"),
  new Tarea("Una tarea para hacer más tarde", "Una descripción", "2019/09/21")
];

window.onload = init;

function cargar_tareas_hoy(tareas) {
  for (const tarea of tareas) {
    if (esHoy(tarea.fecha)) {
      agregar_tarea_hoy(tarea);
    }
  }
}

function cargar_tareas_maniana(tareas) {
  // Esto sería lo que tienen que completar los alumnos
  for (const tarea of tareas) {
    if (esManiana(tarea.fecha)) {
      agregar_tarea_maniana(tarea);
    }
  }
}

function cargar_tareas_mas_tarde(tareas) {
  // Esto sería lo que tienen que completar los alumnos
  for (const tarea of tareas) {
    if (esMasTarde(tarea.fecha)) {
      agregar_tarea_mas_tarde(tarea);
    }
  }
}

function agregar_tarea_hoy(tarea) {
  agregar_tarea(tarea, "#tasks-hoy");
}
function agregar_tarea_maniana(tarea) {
  agregar_tarea(tarea, "#tasks-maniana");
}
function agregar_tarea_mas_tarde(tarea) {
  agregar_tarea(tarea, "#tasks-mas-tarde");
}

function agregar_tarea(tarea, list_id) {
  // body...
  // Tomar el elemento al que queremos agregar el nuevo elemento
  const target = document.querySelector(list_id);

  const nueva_tarea = crear_div_tarea(tarea);
  // Insertamos:
  target.insertBefore(nueva_tarea, target.firstChild);
}

function crear_div_tarea(tarea) {
  // Creamos el nuevo elemento div
  const div = document.createElement("div");
  // con la clase info:
  div.className = "task-info";
  // Rellenamos el contenido:
  div.innerHTML = tarea.getHTML();
  div.onclick = event => {
    if (!div.classList.contains("strikethrough")) {
      div.classList.add("strikethrough");
      agregar_tarea_completada(tarea);
    }
  };
  return div;
}

function agregar_tarea_completada(tarea) {
  // Esto también lo podrían hacer los alumnos, para la última clase (eventos)
  const tareas_completadas_list = document.querySelector(
    "#todos-completados .content ul"
  );
  const nueva_tarea_completada = document.createElement("li");
  nueva_tarea_completada.innerHTML = tarea.titulo;
  tareas_completadas_list.appendChild(nueva_tarea_completada);
}
