function calculoPerimetro (lado1,lado2){
    const p = 2* (lado1 + lado2);
    return p;
}

const lado1 = parseInt(prompt(`Ingrese el lado menor del rectangulo: `));
const lado2 = parseInt(prompt(`Ingrese el lado mayor del rectangulo: `));

const perimetro = calculoPerimetro(lado1,lado2);
document.writeln(`El perimetro del rectangulo de lados ${lado1} y ${lado2} es: ${perimetro}`);
