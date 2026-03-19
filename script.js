const links = [
  {
    nome: "🔥 Produto TOP Mercado Livre",
    url: "https://SEU-LINK-AQUI.com"
  },
  {
    nome: "💰 Oferta imperdível",
    url: "https://SEU-LINK-AQUI.com"
  },
  {
    nome: "🛒 Minha loja recomendada",
    url: "https://SEU-LINK-AQUI.com"
  }
];

const container = document.getElementById("links");

links.forEach(link => {
  const a = document.createElement("a");
  a.href = link.url;
  a.textContent = link.nome;
  a.target = "_blank";
  a.className = "botao";
  container.appendChild(a);
});
