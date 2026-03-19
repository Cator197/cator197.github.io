const categorias = [
  {
    nome: "🧵 Filamentos para Impressora 3D",
    links: [
      {
        nome: "Filamento Pla Branco Velvet 1kg - Premium Voolt3d - Cole este texto no buscador do Mercado Livre: GFRK6S-4TUC",
        url: "https://meli.la/2yz3mBB"
      },
      {
        nome: "Filamento Impressora Creality Cr-petg 3d-1kg 1.75mm Laranja - Cole este texto no buscador do Mercado Livre: GFRK6S-S95Z",
        url: "https://meli.la/22JvbxC"
      },
      {
        nome: "Filamento Pla Premium 1kg Granito High Speed Impressora 3d - Cole este texto no buscador do Mercado Livre: GFRK6S-8R6B",
        url: "https://meli.la/12giZuJ"
      }
    ]
  },
  {
    nome: "🔥 Tabacaria",
    links: [
      {
        nome: "Kumbaya Lemon Blend Dreams 20g - Cole este texto no buscador do Mercado Livre: GFRK6S-MU51",
        url: "https://meli.la/1qdzUbS"
      },
      {
        nome: "Isqueiro maçarico",
        url: "https://SEU-LINK-AQUI.com"
      }
    ]
  },
  {
    nome: "🎨 Pintura",
    links: [
      {
        nome: "*Caneta Marcadora Acrílica Canetinha Pincel Artístico 12 Cores Vibrantes - Cole este texto no buscador do Mercado Livre: GFRK6S-DSKN",
        url: "https://meli.la/1qSHHdd"
      }
    ]
  },
  {
    nome: "💪 Suplementos",
    links: [
      {
        nome: "Creatina Monohidratada 500g Soldiers Nutrition 100% Pura - Cole este texto no buscador do Mercado Livre: GFRK6S-V732",
        url: "https://meli.la/2gGjS39"
      }
    ]
  }
];

const container = document.getElementById("links");

categorias.forEach(cat => {
  const div = document.createElement("div");
  div.className = "categoria";

  const titulo = document.createElement("h2");
  titulo.textContent = cat.nome;

  div.appendChild(titulo);

  cat.links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.nome;
    a.target = "_blank";
    a.className = "botao";
    div.appendChild(a);
  });

  container.appendChild(div);
});
