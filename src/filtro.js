var medicamentos = [
    { nomeMedicamento: "Paracetamol", quantidadeVendidas: 3, dataVenda: new Date() },
    { nomeMedicamento: "Ibuprofeno", quantidadeVendidas: 5, dataVenda: new Date("2025-01-15") },
    { nomeMedicamento: "Dipirona", quantidadeVendidas: 8, dataVenda: new Date("2024-12-01") },
    { nomeMedicamento: "Omeprazol", quantidadeVendidas: 2, dataVenda: new Date("2024-11-20") },
    { nomeMedicamento: "Aspirina", quantidadeVendidas: 4, dataVenda: new Date("2025-01-01") },
];
var calcularDiferencaDias = function (data) {
    var hoje = new Date();
    return Math.floor((hoje.getTime() - data.getTime()) / (1000 * 60 * 60 * 24));
};
var filtrarMedicamentos = function (filtro) {
    console.log(filtro);
    var hoje = new Date();
    switch (filtro) {
        case "Mês Atual":
            return medicamentos.filter(function (med) { return med.dataVenda.getMonth() === hoje.getMonth(); });
        case "Há 1 mês":
            return medicamentos.filter(function (med) { return med.dataVenda.getMonth() === hoje.getMonth() - 1; });
        case "Há 2 meses":
            return medicamentos.filter(function (med) { return med.dataVenda.getMonth() === hoje.getMonth() - 2; });
        case "Há 3 meses":
            return medicamentos.filter(function (med) { return med.dataVenda.getMonth() === hoje.getMonth() - 3; });
        case "Há 1 semana":
            return medicamentos.filter(function (med) { return calcularDiferencaDias(med.dataVenda) <= 7; });
        case "Há 2 semanas":
            return medicamentos.filter(function (med) { return calcularDiferencaDias(med.dataVenda) > 7 && calcularDiferencaDias(med.dataVenda) <= 14; });
        case "Há 3 semanas":
            return medicamentos.filter(function (med) { return calcularDiferencaDias(med.dataVenda) > 14 && calcularDiferencaDias(med.dataVenda) <= 21; });
        case "Há 3 dias":
            return medicamentos.filter(function (med) { return calcularDiferencaDias(med.dataVenda) <= 3; });
        default:
            return medicamentos;
    }
};
// Controle do modal
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal-fitro");
    var openBtn = document.getElementById("open-modal-filtro-vd");
    var closeBtn = document.getElementById("closed-filtro");
    var filterButtons = document.querySelectorAll(".filter-btn");
    openBtn.addEventListener("click", function () {
        modal.classList.remove("hidden");
    });
    closeBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
    });
    var renderizarTabela = function (dados) {
        var tabelaBody = document.getElementById("medicamentos-tabela");
        tabelaBody.innerHTML = ""; // Limpa a tabela antes de atualizar os dados
        dados.forEach(function (med) {
            var row = document.createElement("tr");
            row.className = "border-b border-gray-100";
            row.innerHTML = "\n      <td class=\"py-2 px-4 text-sm text-gray-600\">\n        <div class=\"flex flex-col\">\n          <h6 class=\"text-sm text-gray-500\">Data da venda</h6>\n          <span>".concat(med.dataVenda.toLocaleDateString(), "</span>\n        </div>\n      </td>\n      <td class=\"py-2 px-4 text-sm text-gray-800\">\n        <p>").concat(med.nomeMedicamento, "</p>\n      </td>\n      <td class=\"py-2 px-4 text-sm text-gray-600\">\n        <p><span class=\"font-semibold\">").concat(med.quantidadeVendidas, "</span></p>\n      </td>\n    ");
            tabelaBody.appendChild(row);
        });
    };
    renderizarTabela(medicamentos);
    filterButtons.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            var target = event.target;
            var filtro = target.innerText;
            var dadosFiltrados = filtrarMedicamentos(filtro);
            console.log("Filtrando por: ".concat(filtro));
            renderizarTabela(dadosFiltrados);
            modal.classList.add('hidden');
            modal.classList.remove("block");
        });
    });
});
