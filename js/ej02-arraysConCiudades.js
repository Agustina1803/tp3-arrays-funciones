const ciudades = [];
let ciudad;

do{
ciudad = prompt('Ingrese una ciudad y su pais:  ');
if(ciudad !== null){
ciudades.push(ciudad);
}
}while(confirm('¿Desea ingresar otra ciudad?'));

if(ciudades.length > 0){
document.writeln(`<p>El arreglo de cuidades tiene ${ciudades.length} elementos</p>`);
console.log(`${ciudades.length}`)
document.writeln(`<ul>`);
if(ciudades.length>= 1 ){
document.writeln(`<li> Elemento 1ra posicion: ${ciudades[0]} </li>`);
}
if(ciudades.length >= 3){
document.writeln(`<li>Elemento 3er posicion: ${ciudades[2]} </li>`)
}
if(ciudades.length >= 1){
document.writeln(`<li> Elemento ultima posicion: ${ciudades[ciudades.length - 1]} <li>`);
}
document.writeln(`</ul>`);
document.writeln(`<h2>Arreglos de ciudades</h2>`);
document.writeln(`<ul>`);
for(i=0; i< ciudades.length; i++){
    document.writeln(`<li> ${ciudades[i]}</li>`);
}
document.writeln(`</ul>`);
}

