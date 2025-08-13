import entrada from "readline-sync";

let ValorDivida = Number(entrada.question("Informe o Valor devido: "));
if (isNaN(ValorDivida) || ValorDivida <= 0) {
    console.log("Erro: informe um valor de dívida válido maior que 0.");
    process.exit();
}

let DiasAtraso = Number(entrada.question("Informe quantos dias se passaram desde o vencimento do boleto: "));
if (isNaN(DiasAtraso) || DiasAtraso < 0 || !Number.isInteger(DiasAtraso)) {
    console.log("Erro: informe um número válido de dias em atraso (inteiro e não negativo).");
    process.exit();
}

let juros = DiasAtraso > 15 ? 10 : 5;

let ValorJuros = (ValorDivida / 100) * juros;
let totalDivida = Number(ValorDivida) + Number(ValorJuros);


console.log("\n");
console.log(`Valor original da dívida: ${ValorDivida}`);
console.log(`Dias atrasados: ${DiasAtraso}`);
console.log(`Taxa de juros: ${juros} %`);
console.log(`Valor total com juros: ${totalDivida}`);
