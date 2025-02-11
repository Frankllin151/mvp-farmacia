"use strict";
const data = [
    { nome: "João Silva", email: "joao40@gmail.com", cpf: "123.456.789-00", contato: "(11) 98765-4321" },
    { nome: "Maria Oliveira", email: "maria50@gmail.com", cpf: "987.654.321-00", contato: "(21) 97654-3210" },
    { nome: "Carlos Santos", email: "carlos60@gmail.com", cpf: "456.123.789-00", contato: "(31) 99876-5432" },
];
const searchInput = document.getElementById("searchInput");
const searchResultsContainer = document.getElementById("searchResults");
searchInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    if (query === "") {
        searchResultsContainer.classList.add("invisible", "opacity-0");
        searchResultsContainer.innerHTML = "";
        return;
    }
    const filteredResults = data.filter(item => item.nome.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.cpf.includes(query) ||
        item.contato.includes(query));
    if (filteredResults.length > 0) {
        searchResultsContainer.classList.remove("invisible", "opacity-0");
        searchResultsContainer.innerHTML = filteredResults.map(item => `
    <div class="px-4 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex gap-4"  onclick="ShowModalDetalhes()">
      <p class="text-sm font-medium text-[#101828]">Nome:${item.nome}</p>
      <p class="text-sm text-[#667085]">Email:${item.email}</p>
      <p class="text-sm text-[#667085]">CPF:${item.cpf}</p>
      <p class="text-sm text-[#667085]">Contato:${item.contato}</p>
    </div>
  `).join('');
    }
    else {
        searchResultsContainer.classList.remove("invisible", "opacity-0");
        searchResultsContainer.innerHTML = "<p class='px-4 py-2 text-gray-500'>Nenhum resultado encontrado</p>";
    }
});
function ShowModalDetalhes() {
    const modalDetalhes = document.getElementById("modal-detalhes");
    if (modalDetalhes) {
        modalDetalhes.classList.add("block");
        modalDetalhes.classList.remove("hidden");
    }
    else {
        console.log(modalDetalhes, "não encontrado");
    }
}
