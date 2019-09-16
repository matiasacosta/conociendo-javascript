function dibujar_tarea(tarea_i) {
	// body...
	// Dibujador de la informacion:
	// Para el propósito del ejercicio, ignorar esta parte
	let informacion = document.createElement("div");
	let propiedades = Object.keys(tarea_i);
	for (var i = 0; i <= propiedades.length - 1; i++) {
		let text_item_title = document
			.createTextNode(
				`${propiedades[i][0].toUpperCase()}${propiedades[i].slice(1).replace('_', ' ')}: `
			);
		let text_item_value = document
			.createTextNode(
				`${tarea_i[propiedades[i]]}`
			);
		
		let item_title = document.createElement("h5");
		item_title.className = 'item-title';
		item_title.appendChild(text_item_title);
		
		let item = document.createElement("P");
		item.appendChild(item_title);
		item.appendChild(text_item_value);
		item.className = 'item';  // para el estilo...
		informacion.appendChild(item);

		informacion.className = "info-list-item";
		document.getElementById("listado-tareas").appendChild(informacion);

	}

}

// Práctica Tarea:
function dibujar_tareas(tareas) {
	// Dibujador de la informacion:
	// Para el propósito del ejercicio, ignorar esta parte
	for (var i = 0; i < tareas.length; i++) {
		dibujar_tarea(tareas[i]);
	}

}
