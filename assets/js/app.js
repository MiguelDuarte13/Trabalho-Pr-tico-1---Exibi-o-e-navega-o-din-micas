const dados = {
  filmes: [
    {
      id: 1,
      nome: "Rush",
      descricao: "Fórmula 1 e rivalidade",
      conteudo: "História real da disputa entre James Hunt e Niki Lauda.",
      diretor: "Ron Howard",
      ano: 2013,
      genero: "F1",
      duracao: "123 min",
      destaque: true,
      imagem_principal: "assets/img/rush.jpg",
      fotos: [
        { titulo: "F1 na pista", imagem: "assets/img/f1_1.jpg" }
      ]
    },

    {
      id: 2,
      nome: "Ford vs Ferrari",
      descricao: "Le Mans 24h",
      conteudo: "Disputa histórica em Le Mans.",
      diretor: "James Mangold",
      ano: 2019,
      genero: "Endurance",
      duracao: "152 min",
      destaque: true,
      imagem_principal: "assets/img/fordvsferrari.jpg",
      fotos: [
        { titulo: "Le Mans", imagem: "assets/img/le_mans_1.jpg" }
      ]
    },

    {
      id: 3,
      nome: "Senna",
      descricao: "Lenda da F1",
      conteudo: "A vida de Ayrton Senna na Fórmula 1.",
      diretor: "Asif Kapadia",
      ano: 2010,
      genero: "Documentário",
      duracao: "106 min",
      destaque: true,
      imagem_principal: "assets/img/senna.jpg",
      fotos: [
        { titulo: "Senna pista", imagem: "assets/img/senna.jpg" }
      ]
    },

    {
      id: 4,
      nome: "Gran Turismo",
      descricao: "Do game para pista",
      conteudo: "Jogador vira piloto profissional.",
      diretor: "Neill Blomkamp",
      ano: 2023,
      genero: "Corrida",
      duracao: "134 min",
      destaque: false,
      imagem_principal: "assets/img/gran_turismo.jpg",
      fotos: [
        { titulo: "GT corrida", imagem: "assets/img/gran_turismo.jpg" }
      ]
    },

    {
      id: 5,
      nome: "Need for Speed",
      descricao: "Corridas ilegais",
      conteudo: "Corridas clandestinas e vingança.",
      diretor: "Scott Waugh",
      ano: 2014,
      genero: "Street Racing",
      duracao: "132 min",
      destaque: false,
      imagem_principal: "assets/img/nfs.jpg",
      fotos: [
        { titulo: "Mustang", imagem: "assets/img/nfs.jpg" }
      ]
    }
  ]
};

/* HOME */
function carregarHome() {

  const slider = document.getElementById("slider");

  if (slider) {
    const destaques = dados.filmes.filter(f => f.destaque);

    slider.innerHTML = destaques.map((f, i) => `
      <div class="carousel-item ${i === 0 ? "active" : ""}">
        <img src="${f.imagem_principal}" class="d-block w-100">
        <div class="carousel-caption bg-dark bg-opacity-75">
          <h3>${f.nome}</h3>
          <p>${f.descricao}</p>
        </div>
      </div>
    `).join("");
  }

  const lista = document.getElementById("lista-filmes");

  if (lista) {
    lista.innerHTML = dados.filmes.map(f => `
      <div class="col-md-4 mb-4">
        <div class="card filme-card">
          <img src="${f.imagem_principal}" class="card-img-top">
          <div class="card-body">
            <h5>${f.nome}</h5>
            <p>${f.descricao}</p>
            <a href="detalhes.html?id=${f.id}" class="btn btn-danger">Ver detalhes</a>
          </div>
        </div>
      </div>
    `).join("");
  }
}

/* DETALHES */
function carregarDetalhes() {

  const id = Number(new URLSearchParams(window.location.search).get("id"));
  const filme = dados.filmes.find(f => f.id === id);

  if (!filme) return;

  document.getElementById("detalhes").innerHTML = `
    <div class="detalhe-box">
      <h2>${filme.nome}</h2>
      <p>${filme.conteudo}</p>

      <ul class="list-group">
        <li class="list-group-item">Diretor: ${filme.diretor}</li>
        <li class="list-group-item">Ano: ${filme.ano}</li>
        <li class="list-group-item">Gênero: ${filme.genero}</li>
        <li class="list-group-item">Duração: ${filme.duracao}</li>
      </ul>
    </div>
  `;

  document.getElementById("fotos").innerHTML = filme.fotos.map(f => `
    <div class="col-md-4 mb-3">
      <div class="card">
        <img src="${f.imagem}" class="card-img-top">
        <div class="card-body">
          <h5>${f.titulo}</h5>
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  carregarHome();
  carregarDetalhes();
});