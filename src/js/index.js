const botoesCarrossel = document.querySelectorAll('.botao');
console.log(botoesCarrossel);

const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao,indice) => {
    botao.addEventListener('click', () => {
        console.log(indice);
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        console.log(imagens);

        imagens[indice].classList.add('ativa');


        

    })

})