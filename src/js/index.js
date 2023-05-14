const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivacao = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivacao) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")

    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }


});