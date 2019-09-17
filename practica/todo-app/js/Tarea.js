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

  getHTML() {
    return `
    <h4>${this.titulo}</h4>
    <p>${this.descripcion || ""}</p>
    <p>${this.fecha} ${this.hora || "00:00:00"}</p>`;
  }
}
