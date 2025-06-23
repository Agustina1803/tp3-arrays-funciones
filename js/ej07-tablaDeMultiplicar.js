function tablaMultiplicar(numero) {
  document.writeln(
    `<table class='table table-bordered text-center'><thead><tr><th>Tabla de muultiplicar del ${numero}</th></tr></thead><tbody>`
  );
  for (let i = 1; i <= 10; i++) {
    let multiplicacion = i * numero;
    console.log(multiplicacion);
    document.writeln(`<tr><td>${numero} x ${i} =</td><td>${multiplicacion}</td></tr>`);
  }
  document.writeln(`</tbody></table>`);
}

const numero = parseInt(
  prompt(`Ingrese un numero para ver la tabla de multiplicacion: `)
);

tablaMultiplicar(numero);

/*document.writeln(`<table class='table table-bordered text-center'><thead><tr><th>Suma🎲🎲</th><th>Apariciones</th></tr></thead><tbody>`)
for (let i = 0; i < apariciones.length; i++) {
let suma = i + 2; 
  document.writeln(`<tr><td>${suma}</td><td>${apariciones[i]}</td></tr>`);
}
document.writeln(`</tbody></table>`); */
