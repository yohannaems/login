(()=>{
const abas = document.querySelectorAll('[data-aba]')

esconderConteudo = () => {
    const conteudos = document.querySelectorAll('[data-conteudo]')

    conteudos.forEach(conteudo => conteudo.classList.add('hide'))
}

inativarAba =() => {
    abas.forEach(aba => aba.classList.remove('ativa'))
}
ativarAba = (aba) => {
    aba.classList.add('ativa')
}
mostrarConteudo = (valor) => {
    const conteudos = document.querySelector(`[data-conteudo="${valor}"]`)

    conteudos.classList.remove('hide')
}
abas.forEach(aba => aba.addEventListener('click',() => {
    const valor = aba.dataset.aba

    esconderConteudo()
    inativarAba()
    ativarAba(aba)
    mostrarConteudo(valor)
}))
})()