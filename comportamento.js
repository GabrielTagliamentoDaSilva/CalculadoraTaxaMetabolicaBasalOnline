function calcularTMB() {
    // Obter os valores dos campos
    var peso = parseFloat(document.getElementById("peso").value);
    var idade = parseInt(document.getElementById("idade").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var sexo = document.getElementById("seletor1").value;
    var nivelAtividade = parseFloat(document.getElementById("seletor2").value);

    // Realizar o cálculo da TMB
    var resultado = 0;

    if (sexo === "F") {
        resultado = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    } else if (sexo === "M") {
        resultado = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
    }

    // Levar em consideração o nível de atividade
    // Multiplicadores ajustados para serem mais realistas
    switch (nivelAtividade) {
        case 1:
            resultado *= 1.2; // Sedentário
            break;
        case 2:
            resultado *= 1.375; // Levemente Ativo
            break;
        case 3:
            resultado *= 1.55; // Moderadamente Ativo
            break;
        case 4:
            resultado *= 1.725; // Muito Ativo
            break;
    }

    // Atualizar o campo de resultado
    document.getElementById("resultado").value = resultado.toFixed(2);
}
