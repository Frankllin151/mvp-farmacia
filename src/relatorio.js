var relatorioDados = [
    { data: "2024-07-01", produto: "Produto A", quantidade: 10, valor: 500, lucro: 200 },
    { data: "2024-07-02", produto: "Produto B", quantidade: 5, valor: 250, lucro: 100 },
    { data: "2024-07-03", produto: "Produto C", quantidade: 8, valor: 400, lucro: 160 },
];
var tabela = document.getElementById("relatorio-tabela");
relatorioDados.forEach(function (item) {
    var row = document.createElement("tr");
    row.className = "border-b border-gray-100";
    row.innerHTML = "\n    <td class=\"py-2 px-4 text-gray-600\">".concat(item.data, "</td>\n    <td class=\"py-2 px-4 text-gray-800\">").concat(item.produto, "</td>\n    <td class=\"py-2 px-4 text-gray-600\">").concat(item.quantidade, "</td>\n    <td class=\"py-2 px-4 text-gray-600\">R$ ").concat(item.valor.toFixed(2), "</td>\n    <td class=\"py-2 px-4 text-gray-600\">R$ ").concat(item.lucro.toFixed(2), "</td>\n  ");
    tabela.appendChild(row);
});
var exportToCSV = function () {
    var data = relatorioDados;
    // Converte os dados em CSV
    var csvContent = convertToCSV(data);
    // Função para salvar o arquivo gerado no navegador
    var saveCSVFile = function (csv) {
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'dados.csv';
        link.click();
    };
    saveCSVFile(csvContent);
};
// Função para converter dados JSON para CSV
var convertToCSV = function (data) {
    var headers = Object.keys(data[0]);
    var csvRows = [];
    // Adiciona o cabeçalho
    csvRows.push(headers.join(','));
    var _loop_1 = function (row) {
        var values = headers.map(function (header) {
            var value = row[header];
            return value === undefined || value === null ? '' : "\"".concat(value, "\"");
        });
        csvRows.push(values.join(','));
    };
    // Adiciona os dados
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var row = data_1[_i];
        _loop_1(row);
    }
    return csvRows.join('\n');
};
var Excel = document.getElementById("exportar-excel");
Excel === null || Excel === void 0 ? void 0 : Excel.addEventListener("click", exportToCSV);
