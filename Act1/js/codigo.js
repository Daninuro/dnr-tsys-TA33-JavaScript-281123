function main() {
    // Números aleatorios para los dados
    var primerRng, segundoRng;

    // Array de resultados, la combinación máxima es 6 por 6
    var resultados = new Array((6 + 6) + 1);

    // Inicializar a 0 
    for (var i = 0; i < resultados.length; i++) {
        resultados[i] = 0;
    }
    //Se realizan 36000 tiradas
    for (var i = 0; i < 36000; i++) {
        // 2 números aleatorios entre 1 y 6
        primerRng = Math.floor(Math.random() * (6) + 1);
        segundoRng = Math.floor(Math.random() * (6) + 1);

        // Incrementar el índice en el array de resultados
        resultados[primerRng + segundoRng]++;
    }

    // Imprimir los resultados, excluyendo 0 y 1 ya que no se pueden obtener
    for (var i = 2; i < resultados.length; i++) {
        console.log("El numero " + i + " ha salido: " + resultados[i]+ " veces.");
    }
}
