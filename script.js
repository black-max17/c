/* ==========================================
   ELEMENTOS
========================================== */

const track = document.getElementById("cardsTrack");
const botao = document.getElementById("sortear");
const mensagem = document.getElementById("mensagem");

let girando = false;
let posicaoAtual = 0;


/* ==========================================
   CARTINHAS
========================================== */

const cartinhas = [

    {
        emoji:"❤️",
        mensagem:"Você nunca vai enfrentar nada sozinha. Enquanto eu existir, você sempre terá alguém caminhando ao seu lado."
    },

    {
        emoji:"💌",
        mensagem:"Meu lugar favorito sempre será ao seu lado."
    },

    {
        emoji:"🌹",
        mensagem:"Você é muito mais forte do que imagina e muito mais amada do que consegue enxergar."
    },

    {
        emoji:"💕",
        mensagem:"Mesmo nos dias mais difíceis, eu continuo escolhendo você."
    },

    {
        emoji:"✨",
        mensagem:"Seu sorriso ainda é o lugar onde meu coração encontra paz."
    },

    {
        emoji:"💖",
        mensagem:"Você merece todo carinho, todo respeito e todo amor deste mundo."
    },

    {
        emoji:"🌸",
        mensagem:"Obrigado por existir e fazer parte da minha vida."
    },

    {
        emoji:"🤍",
        mensagem:"Não importa o dia, a distância ou o momento... eu continuo aqui por você."
    },

    {
        emoji:"💝",
        mensagem:"Se eu pudesse escolher novamente, escolheria você todas as vezes."
    },

    {
        emoji:"🥰",
        mensagem:"Você é a mulher mais incrível que eu conheço."
    },

    {
        emoji:"🌙",
        mensagem:"Espero que esta cartinha consiga te abraçar mesmo quando eu não puder."
    },

    {
        emoji:"☀️",
        mensagem:"Você ilumina meus dias muito mais do que imagina."
    }

];

/* ==========================================
   CRIAR CARTAS
========================================== */

function criarCartas(){

    track.innerHTML = "";

    for(let i=0;i<150;i++){

        const indice =
            Math.floor(
                Math.random()*cartinhas.length
            );

        const info = cartinhas[indice];

        const card = document.createElement("div");

        card.className = "card";

        card.dataset.mensagem = info.mensagem;

        card.innerHTML = `

            <div class="emoji">

                ${info.emoji}

            </div>

            <span>

                ${info.mensagem.substring(0,30)}...

            </span>

        `;

        track.appendChild(card);

    }

}

criarCartas();


/* ==========================================
   LARGURA DA CARTA
========================================== */

function larguraDaCarta(){

    const carta = document.querySelector(".card");

    const estilo = getComputedStyle(track);

    const gap =
        parseFloat(
            estilo.gap || 20
        );

    return carta.offsetWidth + gap;

}


/* ==========================================
   EFEITO DE DIGITAÇÃO
========================================== */

function escrever(texto){

    mensagem.textContent = "";

    let i = 0;

    function digitar(){

        if(i < texto.length){

            mensagem.textContent += texto.charAt(i);

            i++;

            setTimeout(digitar,25);

        }

    }

    digitar();

}


/* ==========================================
   CORAÇÕES
========================================== */

function criarCoracao(){

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        (18 + Math.random()*25) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },3500);

}


function chuvaDeCoracoes(){

    for(let i=0;i<25;i++){

        setTimeout(()=>{

            criarCoracao();

        },i*120);

    }

}

/* ==========================================
   GIRAR ROLETA
========================================== */

function girarRoleta(){

    if(girando) return;

    girando = true;

    botao.disabled = true;

    botao.textContent = "💞 Escolhendo uma cartinha...";

    document.querySelectorAll(".card").forEach(card=>{
        card.classList.remove("active");
    });

    const cards = document.querySelectorAll(".card");

    const largura = larguraDaCarta();

    const maquina = document.querySelector(".machine");

    const centro = maquina.offsetWidth / 2;

    // evita parar nas extremidades
    const indice =
        Math.floor(
            Math.random() * (cards.length - 40)
        ) + 20;

    const destino =
        (indice * largura)
        - centro
        + (cards[indice].offsetWidth / 2);

    const inicio = posicaoAtual;

    const duracao = 4500;

    const inicioTempo = performance.now();


    function easeOutQuint(x){

        return 1 - Math.pow(1 - x, 5);

    }


    function animar(tempo){

        const progresso =
            Math.min(
                (tempo - inicioTempo) / duracao,
                1
            );

        const easing =
            easeOutQuint(progresso);

        posicaoAtual =
            inicio +
            (destino - inicio) * easing;

        track.style.transform =
            `translateX(${-posicaoAtual}px)`;

        if(progresso < 1){

            requestAnimationFrame(animar);

        }else{

            cards[indice].classList.add("active");

            revelarCarta(cards[indice]);

        }

    }

    requestAnimationFrame(animar);

}


/* ==========================================
   REVELAR CARTA
========================================== */

function revelarCarta(card){

    const texto = card.dataset.mensagem;

    escrever(texto);

    chuvaDeCoracoes();

    setTimeout(()=>{

        girando = false;

        botao.disabled = false;

        botao.textContent = "💌 Abrir outra cartinha";

    },800);

}


/* ==========================================
   EVENTO
========================================== */

botao.addEventListener("click", girarRoleta);


/* ==========================================
   MENSAGEM INICIAL
========================================== */

escrever(
"Oi, meu amor. ❤️ Sempre que você quiser um abraço meu, aperte o botão acima e deixe uma cartinha encontrar você."
);


/* ==========================================
   AJUSTE AO REDIMENSIONAR
========================================== */

window.addEventListener("resize",()=>{

    track.style.transition="none";

    track.style.transform=
        `translateX(${-posicaoAtual}px)`;

});
