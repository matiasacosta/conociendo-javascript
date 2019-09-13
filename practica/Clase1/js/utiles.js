function cargar_alojamiento(alojamiento_i) {
	// body...
	// Dibujador de la informacion:
	// Para el propósito del ejercicio, ignorar esta parte
	let informacion = document.createElement("div");
	let propiedades = Object.keys(alojamiento_i);
	for (var i = 0; i <= propiedades.length - 1; i++) {
		if (propiedades[i] == 'imagen') {
			let img = document.createElement("IMG");
			img.src = alojamiento_i[propiedades[i]];
			img.width=150;
			img.height=120;
			informacion.appendChild(img);

		} else {
			let text_item_title = document
				.createTextNode(
					`${propiedades[i][0].toUpperCase()}${propiedades[i].slice(1).replace('_', ' ')}: `
				);
			let text_item_value = document
				.createTextNode(
					`${alojamiento_i[propiedades[i]]}`
				);
			
			let item_title = document.createElement("span");
			item_title.className = 'item-title';
			item_title.appendChild(text_item_title);
			
			let item = document.createElement("P");
			item.appendChild(item_title);
			item.appendChild(text_item_value);
			informacion.appendChild(item);
		}

		informacion.className = "info-list-item";
		document.getElementById("informacion_alojamiento").appendChild(informacion);

	}

}

// Práctica 2:
function cargar_alojamientos(alojamientos) {
	// Dibujador de la informacion:
	// Para el propósito del ejercicio, ignorar esta parte
	for (var i = 0; i < alojamientos.length; i++) {
		cargar_alojamiento(alojamientos[i]);
	}

}
