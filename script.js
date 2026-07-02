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
        emoji: "❤️",
        mensagem: "Você nunca vai enfrentar nada sozinha. Enquanto eu existir, vou segurar sua mão e caminhar ao seu lado, nos dias bons e principalmente nos difíceis."
    },

    {
        emoji: "💌",
        mensagem: "Meu lugar favorito sempre será ao seu lado. Não importa onde estejamos, você sempre será o meu lar."
    },

    {
        emoji: "🌹",
        mensagem: "Você é muito mais forte do que imagina e muito mais amada do que consegue enxergar. Nunca duvide do quanto você é especial."
    },

    {
        emoji: "💕",
        mensagem: "Mesmo nos dias mais difíceis, eu continuo escolhendo você. Escolheria hoje, amanhã e em todas as versões do nosso futuro."
    },

    {
        emoji: "✨",
        mensagem: "Seu sorriso continua sendo o lugar onde meu coração encontra paz."
    },

    {
        emoji: "💖",
        mensagem: "Você merece todo carinho, todo respeito, toda felicidade e todo amor que existe neste mundo."
    },

    {
        emoji: "🌸",
        mensagem: "Obrigado por existir. Sua presença faz a minha vida ser muito mais bonita."
    },

    {
        emoji: "🤍",
        mensagem: "Não importa o dia, a distância ou o momento... eu continuo aqui por você, sempre."
    },

    {
        emoji: "💝",
        mensagem: "Se eu pudesse escolher novamente, escolheria você em todas as vidas."
    },

    {
        emoji: "🥰",
        mensagem: "Você é a mulher mais incrível que eu já conheci, e todos os dias encontro um novo motivo para admirar você."
    },

    {
        emoji: "🌙",
        mensagem: "Espero que esta cartinha consiga te abraçar quando eu não puder. Feche os olhos e lembre que meu carinho sempre encontra um jeito de chegar até você."
    },

    {
        emoji: "☀️",
        mensagem: "Você ilumina meus dias muito mais do que imagina. Sua existência torna tudo mais leve."
    },

    {
        emoji: "🌈",
        mensagem: "Depois da tempestade sempre existe um céu bonito esperando por você. E eu estarei aqui para admirá-lo ao seu lado."
    },

    {
        emoji: "🦋",
        mensagem: "Nunca deixe que um momento difícil faça você esquecer a pessoa maravilhosa que é."
    },

    {
        emoji: "💞",
        mensagem: "Cada conversa, cada sorriso e cada instante ao seu lado se transforma em uma das minhas melhores lembranças."
    },

    {
        emoji: "🍀",
        mensagem: "Ter você na minha vida é a maior sorte que eu poderia pedir."
    },

    {
        emoji: "🌻",
        mensagem: "Espero que hoje você encontre pelo menos um motivo para sorrir. Se não encontrar, eu tento ser esse motivo."
    },

    {
        emoji: "🫶",
        mensagem: "Você não precisa ser perfeita para ser incrível. Do jeitinho que você é, já conquista meu coração todos os dias."
    },

    {
        emoji: "💫",
        mensagem: "Nunca se esqueça: você é capaz de conquistar coisas muito maiores do que imagina."
    },

    {
        emoji: "🎀",
        mensagem: "Você transforma momentos simples em lembranças inesquecíveis."
    },

    {
        emoji: "🌺",
        mensagem: "Seu jeito de cuidar das pessoas faz o mundo ficar um pouco mais bonito."
    },

    {
        emoji: "🩷",
        mensagem: "Mesmo quando você acha que está sem forças, eu consigo enxergar a coragem que existe dentro de você."
    },

    {
        emoji: "📖",
        mensagem: "Minha história favorita é aquela em que você faz parte de todos os capítulos."
    },

    {
        emoji: "🎵",
        mensagem: "Você é a melodia mais bonita que já entrou na minha vida."
    },

    {
        emoji: "💐",
        mensagem: "Espero que você nunca esqueça o quanto é importante para mim."
    },

    {
        emoji: "🌌",
        mensagem: "Se cada estrela representasse um motivo para amar você, o céu ainda seria pequeno."
    },

    {
        emoji: "🕊️",
        mensagem: "Que o seu coração encontre paz hoje. E se precisar, deixa que eu divido o peso com você."
    },

    {
        emoji: "🎁",
        mensagem: "Você é o presente mais bonito que a vida colocou no meu caminho."
    },

    {
        emoji: "🍃",
        mensagem: "Respire fundo. Você já superou dias muito difíceis e também vai superar este."
    },

    {
        emoji: "🏡",
        mensagem: "Onde quer que a vida nos leve, meu coração sempre vai procurar o caminho de volta até você."
    },

    {
        emoji: "💘",
        mensagem: "Amar você nunca foi um esforço. Sempre foi a parte mais fácil e bonita dos meus dias."
    },

    {
        emoji: "🫂",
        mensagem: "Se hoje estiver pesado demais, imagina que este bilhetinho é um abraço apertado dizendo que tudo vai ficar bem."
    },

    {
        emoji: "🌠",
        mensagem: "Você é um daqueles acontecimentos raros que mudam a vida de alguém para melhor."
    },

    {
        emoji: "🪻",
        mensagem: "Nunca duvide do espaço enorme que você ocupa no meu coração."
    },

    {
        emoji: "💎",
        mensagem: "Você é preciosa, única e insubstituível. Nunca deixe ninguém fazer você acreditar no contrário."
    },

    {
        emoji: "🥹",
        mensagem: "Se algum dia você esquecer o quanto é amada, releia esta cartinha e lembre que existe alguém torcendo por você todos os dias."
    },
   
    {
    emoji:"🌷",
    mensagem:"Você faz o mundo parecer um lugar mais bonito só por existir."
},
{
    emoji:"💗",
    mensagem:"Nunca se esqueça: você é o meu pensamento favorito."
},
{
    emoji:"🫶",
    mensagem:"Mesmo quando você não percebe, você inspira as pessoas ao seu redor."
},
{
    emoji:"🌼",
    mensagem:"Seu coração é uma das coisas mais lindas que já conheci."
},
{
    emoji:"🌙",
    mensagem:"Espero que hoje você durma sabendo que é profundamente amada."
},
{
    emoji:"☁️",
    mensagem:"Se seus pensamentos ficarem pesados, deixa eu carregar um pouquinho deles com você."
},
{
    emoji:"🌺",
    mensagem:"A sua felicidade sempre será uma das minhas maiores prioridades."
},
{
    emoji:"💞",
    mensagem:"Você transforma qualquer dia comum em um dia especial."
},
{
    emoji:"⭐",
    mensagem:"Você brilha até quando acha que perdeu a luz."
},
{
    emoji:"🍂",
    mensagem:"Tudo passa. Inclusive os dias difíceis."
},
{
    emoji:"💝",
    mensagem:"Meu coração sorri sempre que lembra de você."
},
{
    emoji:"🎈",
    mensagem:"Você merece viver momentos leves, felizes e cheios de paz."
},
{
    emoji:"🩷",
    mensagem:"Nunca deixe de acreditar na pessoa incrível que você é."
},
{
    emoji:"🌹",
    mensagem:"Se eu pudesse, te lembraria todos os dias do quanto você é especial."
},
{
    emoji:"🧸",
    mensagem:"Espero que esta cartinha faça companhia para você por alguns instantes."
},
{
    emoji:"🍀",
    mensagem:"Minha maior sorte foi encontrar você."
},
{
    emoji:"🌠",
    mensagem:"Você realiza pequenos milagres sem nem perceber."
},
{
    emoji:"🎶",
    mensagem:"Seu jeito faz a vida ter uma trilha sonora mais bonita."
},
{
    emoji:"🌈",
    mensagem:"Mesmo depois das tempestades, o céu continua sabendo como sorrir."
},
{
    emoji:"💖",
    mensagem:"Você nunca precisa esconder quem realmente é perto de mim."
},
{
    emoji:"🫂",
    mensagem:"Se eu pudesse, te daria um abraço apertado exatamente agora."
},
{
    emoji:"📚",
    mensagem:"Cada dia ao seu lado é mais um capítulo da minha história favorita."
},
{
    emoji:"🦋",
    mensagem:"Você cresceu muito mais do que imagina."
},
{
    emoji:"🎀",
    mensagem:"Você fica linda até quando diz que não está."
},
{
    emoji:"🌻",
    mensagem:"Seu sorriso ainda é meu raio de sol preferido."
},
{
    emoji:"💌",
    mensagem:"Espero que esta mensagem encontre você exatamente quando mais precisar."
},
{
    emoji:"🤍",
    mensagem:"Você nunca está sozinha enquanto existir alguém pensando em você com carinho."
},
{
    emoji:"✨",
    mensagem:"Seu brilho não depende da opinião de ninguém."
},
{
    emoji:"🌊",
    mensagem:"Assim como o mar, você também tem dias calmos e dias intensos. Todos fazem parte de quem você é."
},
{
    emoji:"🏡",
    mensagem:"Meu coração sempre encontra paz quando pensa em você."
},
{
    emoji:"🪷",
    mensagem:"Você merece descansar sem culpa."
},
{
    emoji:"💫",
    mensagem:"Tenho orgulho da mulher que você está se tornando."
},
{
    emoji:"🌸",
    mensagem:"Você faz florescer o melhor das pessoas."
},
{
    emoji:"🥹",
    mensagem:"Obrigado por permitir que eu faça parte da sua vida."
},
{
    emoji:"🎁",
    mensagem:"A melhor surpresa que a vida me deu foi conhecer você."
},
{
    emoji:"🕊️",
    mensagem:"Que hoje seu coração encontre a paz que tanto merece."
},
{
    emoji:"☀️",
    mensagem:"Espero que seu dia seja tão bonito quanto o seu sorriso."
},
{
    emoji:"💎",
    mensagem:"Você vale muito mais do que qualquer insegurança faz acreditar."
},
{
    emoji:"🌌",
    mensagem:"Você é o meu pedacinho favorito do universo."
},
{
    emoji:"🩵",
    mensagem:"Sempre haverá um lugar seguro para você no meu coração."
},
{
    emoji:"❤️",
    mensagem:"Meu amor por você cresce nas pequenas coisas do dia a dia."
},
{
    emoji:"🌺",
    mensagem:"Você merece alguém que escolha você todos os dias. E eu escolho."
},
{
    emoji:"💐",
    mensagem:"Que nunca faltem motivos para você acreditar em dias melhores."
},
{
    emoji:"🎨",
    mensagem:"Você colore minha vida de um jeito que ninguém mais consegue."
},
{
    emoji:"🪐",
    mensagem:"Entre bilhões de pessoas, meu coração encontrou justamente você."
},
{
    emoji:"🍁",
    mensagem:"Até os dias cinzentos ficam mais leves quando penso em você."
},
{
    emoji:"🌼",
    mensagem:"Você merece ser tratada com toda delicadeza que oferece ao mundo."
},
{
    emoji:"🥰",
    mensagem:"Você é meu lugar favorito para descansar a alma."
},
{
    emoji:"🕯️",
    mensagem:"Mesmo uma pequena luz vence a escuridão. Você também consegue."
},
{
    emoji:"🧡",
    mensagem:"Nunca deixe que um momento ruim defina quem você é."
},
{
    emoji:"🐻",
    mensagem:"Se eu pudesse, enviaria um abraço quentinho junto desta cartinha."
},
{
    emoji:"🌙",
    mensagem:"Boa noite, meu amor. Que seus sonhos cuidem de você até amanhecer."
},
{
    emoji:"🌞",
    mensagem:"Bom dia! Espero que hoje aconteça algo que faça você sorrir de verdade."
},
{
    emoji:"💝",
    mensagem:"Você é uma das melhores partes da minha vida."
},
{
    emoji:"🫶",
    mensagem:"Enquanto eu puder, sempre farei questão de lembrar o quanto você é importante."
},
{
    emoji:"🌹",
    mensagem:"Você é a prova de que as pessoas mais bonitas existem por dentro e por fora."
},
{
    emoji:"💘",
    mensagem:"Meu coração sempre acelera quando o assunto é você."
},
{
    emoji:"🪄",
    mensagem:"Você tem o dom de transformar momentos simples em lembranças inesquecíveis."
},
{
    emoji:"🎆",
    mensagem:"Espero que seu futuro seja tão lindo quanto os sonhos que você merece viver."
},
{
    emoji:"🕰️",
    mensagem:"Se pudesse voltar no tempo, ainda escolheria conhecer você."
},
{
    emoji:"🌍",
    mensagem:"O mundo ficou um pouquinho melhor no dia em que você nasceu."
},
{
    emoji:"🩷",
    mensagem:"Independentemente do que aconteça hoje, lembre-se: você é muito amada."
},
{
    emoji:"💓",
    mensagem:"Obrigado por ser exatamente quem você é. Nunca deixe de ser essa pessoa maravilhosa."
},
{
    emoji:"🌺",
    mensagem:"Sempre que abrir uma cartinha, imagine que ela veio acompanhada de um beijo e de um abraço apertado."
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
