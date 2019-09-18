const tareas = [
  new Tarea("Programar en JS", "Realizar la práctica 2", "2019/09/18", '15:00'),
  new Tarea("Continuar programando en JS", "Realizar la práctica 3", "2019/09/19", '16:30'),
  new Tarea("Ir al supermercado", "Lista de compras", "2019/09/19", "9:00"),
  new Tarea("Día de la primavera", "---", "2019/09/21"),
  new Tarea("Una tarea para hacer más tarde", "Su correspondiente descripción", "2019/09/23")
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
  nueva_tarea_completada.innerHTML = tarea.getHTML_completada();
  tareas_completadas_list.appendChild(nueva_tarea_completada);
}
