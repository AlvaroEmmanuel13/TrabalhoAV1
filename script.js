const botao=document.querySelector(".botao");
const mensagem=document.querySelector(".mensagem");
const mensagemPersonalizada="Josué 1:9 Lembre da minha ordem: Seja forte e corajoso! Não fique desanimado, nem tenha medo, porque eu, o Senhor, seu Deus, estarei com você em qualquer lugar para onde você for!";

botao.addEventListener("click", mensagemBotao);

function mensagemBotao(){
    mensagem.innerHTML=mensagemPersonalizada;
    setTimeout(() => {
        mensagem.innerHTML="";
    },3000);
}
        