function _get_fecha(fecha) {
  /* Devuelve un objeto Date en base a `fecha` */
  if (!(fecha instanceof Date)) {
    return new Date(fecha);
  } else {
    return fecha;
  }
}

function esHoy(fecha) {
  /*Indica si una fecha corresponde al día actual */
  const _f = _get_fecha(fecha);
  const hoy = new Date();
  return (
    hoy.getFullYear() === _f.getFullYear() &&
    hoy.getMonth() === _f.getMonth() &&
    hoy.getDate() === _f.getDate()
  );
}

function esManiana(fecha) {
  /* Indica si una fecha corresponde al día de mañana */
  const _f = _get_fecha(fecha);
  const hoy = new Date();
  return (
    hoy.getFullYear() === _f.getFullYear() &&
    hoy.getMonth() === _f.getMonth() &&
    hoy.getDate() + 1 === _f.getDate()
  );
}

function esMasTarde(fecha) {
  /* Indica si una fecha es más tarde que hoy y mañana, por lo menos */
  const _f = _get_fecha(fecha);
  const hoy = new Date();
  return (
    hoy.getFullYear() > _f.getFullYear() ||
    hoy.getMonth() > _f.getMonth() ||
    _f.getDate() - hoy.getDate() >= 2
  );
}
