//Ex7
function verificarAprovacao(media) {
    if (media >= 60) {
        console.log("Aprovado")
    } else (media < 60)
        {
        console.log("Reprovado")
}
}
verificarAprovacao(55)

//Ex 8
function classificarAluno(nota) {
    if (nota => 90) {
        console.log("Exelente")
    } 
    else if (nota <= 89)
    {
        console.log("Bom")
    }
    else if (nota <= 69) {
        console.log("Regular")
    }
    else if (nota < 60) {
        console.log("Insuficiente")
    }
}
classificarAluno(89)