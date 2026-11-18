//Ex 9
function calcularMensalidade(valor) {
    let desconto = valor * 0.10
    let resultado = valor - desconto
    return resultado
}

let valorFinal = calcularMensalidade(500)
console.log(valorFinal)


//Ex10
function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2
    return media
}

function avaliarAluno(nome, nota1, nota2) {
    let media = calcularMedia(nota1, nota2)

    console.log("Aluno:" + nome)
    console.log("Média:" + media)

    if (media >= 60) {
        console.log("Situação: Aprovado")
    } else {
        console.log("Situação: Reprovado")
    }
}

avaliarAluno("Lucas", 80, 70)
