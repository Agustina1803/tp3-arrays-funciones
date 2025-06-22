function parOImpar(numero){
    if(numero % 2 === 0){
        document.writeln(`El numero ${numero} es par`);
    }else{
        document.writeln(`El numero ${numero} es impar`);
    }
}

const numero = parseInt(prompt(`Ingrese un numero: `));

parOImpar(numero);