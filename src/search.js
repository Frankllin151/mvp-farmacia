var data = [
    { nome: "João Silva", email: "joao40@gmail.com", cpf: "123.456.789-00", contato: "(11) 98765-4321" },
    { nome: "Maria Oliveira", email: "maria50@gmail.com", cpf: "987.654.321-00", contato: "(21) 97654-3210" },
    { nome: "Carlos Santos", email: "carlos60@gmail.com", cpf: "456.123.789-00", contato: "(31) 99876-5432" },
];
var searchInput = document.getElementById("searchInput");
var searchResultsContainer = document.getElementById("searchResults");
searchInput.addEventListener("input", function (event) {
    var query = event.target.value.toLowerCase();
    if (query === "") {
        searchResultsContainer.classList.add("invisible", "opacity-0");
        searchResultsContainer.innerHTML = "";
        return;
    }
    var filteredResults = data.filter(function (item) {
        return item.nome.toLowerCase().includes(query) ||
            item.email.toLowerCase().includes(query) ||
            item.cpf.includes(query) ||
            item.contato.includes(query);
    });
    if (filteredResults.length > 0) {
        searchResultsContainer.classList.remove("invisible", "opacity-0");
        searchResultsContainer.innerHTML = filteredResults.map(function (item) { return "\n    <div class=\"px-4 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex gap-4\"  onclick=\"ShowModalDetalhes()\">\n      <p class=\"text-sm font-medium text-[#101828]\">Nome:".concat(item.nome, "</p>\n      <p class=\"text-sm text-[#667085]\">Email:").concat(item.email, "</p>\n      <p class=\"text-sm text-[#667085]\">CPF:").concat(item.cpf, "</p>\n      <p class=\"text-sm text-[#667085]\">Contato:").concat(item.contato, "</p>\n    </div>\n  "); }).join('');
    }
    else {
        searchResultsContainer.classList.remove("invisible", "opacity-0");
        searchResultsContainer.innerHTML = "<p class='px-4 py-2 text-gray-500'>Nenhum resultado encontrado</p>";
    }
});
function ShowModalDetalhes() {
    var modalDetalhes = document.getElementById("modal-detalhes");
    if (modalDetalhes) {
        modalDetalhes.classList.add("block");
        modalDetalhes.classList.remove("hidden");
    }
    else {
        console.log(modalDetalhes, "não encontrado");
    }
}
