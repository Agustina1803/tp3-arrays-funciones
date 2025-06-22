function cadenaTexto(cadena) {
  if (cadena === cadena.toUpperCase()) {
    document.writeln(`<p> El texto "${cadena}" esta todo en MAYUSCULAS </p>`);
  } else if (cadena === cadena.toLowerCase()) {
    document.writeln(`<p> El texto "${cadena}" esta todo en minusculas </p>`);
  } else {
    document.writeln(
      `<p> El texto "${cadena}" es una mezcla de MAYUSCULAS y minusculas </p>`
    );
  }
}

const cadena = prompt(`Ingrese un texto: `);

cadenaTexto(cadena);
