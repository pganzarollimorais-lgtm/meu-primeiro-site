let cliques = 0;

// MUDAR TEXTO
function mudarTexto() {
    cliques++;

    document.querySelector("#contador").innerText = "Cliques: " + cliques;

    let nome = document.querySelector("#nome").value.trim();

    if (nome === "") {
        alert("Digite seu nome! 😄");
        return;
    }

    if (nome.toLowerCase() === "gm") {
        document.querySelector("h1").innerText = "Bem-vindo, GM! 👑";
        document.querySelector("p").innerText = "Olá chefe! 😎";
    } else {
        document.querySelector("p").innerText = "Olá, " + nome + "! 😎";
    }

    document.body.style.backgroundColor = "purple";
    document.querySelector("button").style.backgroundColor = "pink";
    document.querySelector("#mensagem").style.display = "none";
    document.querySelector("h1").style.fontSize = "50px";
    document.querySelector("h1").style.color = "black";
    document.querySelector("#imagem").style.fontSize = "150px";
    document.querySelector("#imagem").innerText = "🐶";

    document.querySelectorAll("button")[0].innerText = "Você clicou 😎";
    document.querySelectorAll("button")[0].style.backgroundColor = "purple";
}

// MENSAGENS
function mostrarMensagem() {
    if (document.querySelector("#mensagem").style.display === "none") {
        document.querySelector("#mensagem").style.display = "block";
    } else {
        document.querySelector("#mensagem").style.display = "none";
    }

    document.querySelector("#imagem").innerText = "🐸";
    document.querySelectorAll("button")[1].innerText = "mensagem aberta";
    document.querySelectorAll("button")[1].style.backgroundColor = "blue";
}

// CONTADOR
function zerarContador() {
    if (document.querySelectorAll("button")[2].innerText === "Clique novamente!") {
        document.querySelectorAll("button")[2].innerText = "Zerar contador";
        document.querySelectorAll("button")[2].style.backgroundColor = "red";
    } else {
        document.querySelectorAll("button")[2].innerText = "Clique novamente!";
        document.querySelectorAll("button")[2].style.backgroundColor = "pink";
    }

    cliques = 0;
    document.querySelector("#contador").innerText = "Cliques: 0";
    document.querySelector("#imagem").innerText = "🦊";
}

// OUTRAS FUNÇÕES
function darOi() {
    alert("Olá! 😎");
}

darOi();

function mudarMensagem() {
    document.querySelector("#mensagem").innerText = "Estou aprendendo Javascript! 💻";
}