let apariciones = [0,0,0,0,0,0,0,0,0,0,0];


for(let i=0; i< 50; i++){
let dado1 = Math.floor(Math.random() *6) +1;
let dado2 =Math.floor(Math.random()*6)+1;
let suma = dado1 + dado2;
let indice = suma - 2; 
apariciones[indice]++;
}

document.writeln(`<table class='table table-bordered text-center'><thead><tr><th>Suma🎲🎲</th><th>Apariciones</th></tr></thead><tbody>`)
for (let i = 0; i < apariciones.length; i++) {
let suma = i + 2; 
  document.writeln(`<tr><td>${suma}</td><td>${apariciones[i]}</td></tr>`);
}
document.writeln(`</tbody></table>`);

