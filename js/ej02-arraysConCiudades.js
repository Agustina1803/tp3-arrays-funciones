const ciudades = [];
let ciudad;

do {
  ciudad = prompt(
    "Ingrese ciudades y sus paises Ej: Nueva York, Estados unidos ; Barcelona, España:   "
  );
  //trim -> elimina espacion en blancos a ambos lados de la cadena
  if (ciudad !== null && ciudad.trim !== ``) {
  //split -> convierte una cadena en matriz 
    let listaCiudades = ciudad.split(`;`);
    ciudades.push(...listaCiudades);
  }
} while (confirm("¿Desea ingresar otra ciudad?"));

if (ciudades.length > 0) {
  document.writeln(
    `<p>El arreglo de cuidades tiene ${ciudades.length} elementos</p>`
  );

  document.writeln(`<ul>`);
  if (ciudades[0]) {
    document.writeln(`<li> Elemento 1er posicion: ${ciudades[0]} </li>`);
  }
  if (ciudades[2]) {
    document.writeln(`<li>Elemento 3er posicion: ${ciudades[2]} </li>`);
  }
  document.writeln(
    `<li> Elemento ultima posicion: ${ciudades[ciudades.length - 1]} </li>`
  );
  document.writeln(`</ul>`);
}

ciudades.push("Paris");
document.writeln("<ul>");
document.writeln(
  `<li> Elemento ultima posicion: ${ciudades[ciudades.length - 1]} </li>`
);
document.writeln(`</ul>`);
document.writeln("<ul>");
document.writeln(
  `<li> Elemento que ocupa la segunda posicion: ${ciudades[1]} </li>`
);
document.writeln(`</ul>`);


document.writeln(`<h2>Arreglos de ciudades</h2>`);
ciudades.splice(1, 0, "Barcelona");
document.writeln(`<ul>`);
for (i = 0; i < ciudades.length; i++) {
  document.writeln(`<li>Elemento: ${ciudades[i]}</li>`);
}
document.writeln(`</ul>`);


