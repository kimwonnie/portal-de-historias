const avatar = document.getElementById("avatar");
const dropdown = document.getElementById("dropdown");

avatar.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!avatar.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});

function abrirMenu(tipo) {
  const menu = document.getElementById("menu-edicao");
  const opcoes = document.getElementById("opcoes-edicao");

  opcoes.innerHTML = `
    <li><button onclick="trocarImagem('${tipo}')">Trocar Imagem</button></li>
    <li><button onclick="removerImagem('${tipo}')">Remover Imagem</button></li>
  `;

  menu.style.display = "block";
}

function trocarImagem(tipo) {
  const novaURL = prompt("Digite a URL da nova imagem:");
  if (novaURL) {
    document.getElementById(`preview-${tipo}`).src = novaURL;
  }
  document.getElementById("menu-edicao").style.display = "none";
}

function removerImagem(tipo) {
  document.getElementById(`preview-${tipo}`).src = "";
  document.getElementById("menu-edicao").style.display = "none";
}
