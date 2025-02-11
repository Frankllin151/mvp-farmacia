
const relatorioDados = [
  { data: "2024-07-01", produto: "Produto A", quantidade: 10, valor: 500, lucro: 200 },
  { data: "2024-07-02", produto: "Produto B", quantidade: 5, valor: 250, lucro: 100 },
  { data: "2024-07-03", produto: "Produto C", quantidade: 8, valor: 400, lucro: 160 },
];

const tabela = document.getElementById("relatorio-tabela") as HTMLTableSectionElement;
relatorioDados.forEach((item) => {
  const row = document.createElement("tr");
  row.className = "border-b border-gray-100";
  row.innerHTML = `
    <td class="py-2 px-4 text-gray-600">${item.data}</td>
    <td class="py-2 px-4 text-gray-800">${item.produto}</td>
    <td class="py-2 px-4 text-gray-600">${item.quantidade}</td>
    <td class="py-2 px-4 text-gray-600">R$ ${item.valor.toFixed(2)}</td>
    <td class="py-2 px-4 text-gray-600">R$ ${item.lucro.toFixed(2)}</td>
  `;
  tabela.appendChild(row);
  

});

const exportToCSV = () => {
  const data = relatorioDados;

  // Converte os dados em CSV
  const csvContent = convertToCSV(data);

  // Função para salvar o arquivo gerado no navegador
  const saveCSVFile = (csv: string) => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dados.csv';
    link.click();
  };

  saveCSVFile(csvContent);
};

// Função para converter dados JSON para CSV
const convertToCSV = (data: any[]) => {
  const headers = Object.keys(data[0]);
  const csvRows = [];

  // Adiciona o cabeçalho
  csvRows.push(headers.join(','));

  // Adiciona os dados
  for (const row of data) {
    const values = headers.map(header => {
      const value = row[header];
      return value === undefined || value === null ? '' : `"${value}"`;
    });
    csvRows.push(values.join(','));
  }

  return csvRows.join('\n');
};

const Excel = document.getElementById("exportar-excel");
Excel?.addEventListener("click", exportToCSV)


