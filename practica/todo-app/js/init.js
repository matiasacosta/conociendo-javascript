function init() {
  const form = document.querySelector("form");
  form.addEventListener("submit", onFormSubmit);
  cargar_tareas_hoy(tareas);
  cargar_tareas_maniana(tareas);
  cargar_tareas_mas_tarde(tareas);
}

function onFormSubmit(event) {
  event.preventDefault();

  const fecha = new Date(this.elements.fecha.value);
  // Creamos la tarea formateando la fecha correctamente
  const tarea = new Tarea(
    this.elements.titulo.value,
    this.elements.descripcion.value,
    `${fecha.getFullYear()}/${fecha.getMonth() + 1}/${fecha.getDate() + 1}`,
    this.elements.hora.value
  );
  console.log({ tarea });
  agregar_tarea_segun_fecha(tarea);
  this.reset();
}

function agregar_tarea_segun_fecha(tarea) {
  if (esHoy(tarea.fecha)) {
    agregar_tarea_hoy(tarea);
  } else if (esManiana(tarea.fecha)) {
    agregar_tarea_maniana(tarea);
  } else {
    agregar_tarea_mas_tarde(tarea);
  }
}
