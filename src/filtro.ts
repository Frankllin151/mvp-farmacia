interface Medicamento {
  nomeMedicamento: string;
  quantidadeVendidas: number;
  dataVenda: Date;
}

const medicamentos: Medicamento[] = [
  { nomeMedicamento: "Paracetamol", quantidadeVendidas: 3, dataVenda: new Date() },
  { nomeMedicamento: "Ibuprofeno", quantidadeVendidas: 5, dataVenda: new Date("2025-01-15") },
  { nomeMedicamento: "Dipirona", quantidadeVendidas: 8, dataVenda: new Date("2024-12-01") },
  { nomeMedicamento: "Omeprazol", quantidadeVendidas: 2, dataVenda: new Date("2024-11-20") },
  { nomeMedicamento: "Aspirina", quantidadeVendidas: 4, dataVenda: new Date("2025-01-01") },
];

const calcularDiferencaDias = (data: Date): number => {
  const hoje = new Date();
  return Math.floor((hoje.getTime() - data.getTime()) / (1000 * 60 * 60 * 24));
};

const filtrarMedicamentos = (filtro: string): Medicamento[] => {
  console.log(filtro);
  
  const hoje = new Date();

  switch (filtro) {
    case "Mês Atual":
      return medicamentos.filter((med) => med.dataVenda.getMonth() === hoje.getMonth());
    case "Há 1 mês":
      return medicamentos.filter((med) => med.dataVenda.getMonth() === hoje.getMonth() - 1);
    case "Há 2 meses":
      return medicamentos.filter((med) => med.dataVenda.getMonth() === hoje.getMonth() - 2);
    case "Há 3 meses":
      return medicamentos.filter((med) => med.dataVenda.getMonth() === hoje.getMonth() - 3);
    case "Há 1 semana":
      return medicamentos.filter((med) => calcularDiferencaDias(med.dataVenda) <= 7);
    case "Há 2 semanas":
      return medicamentos.filter((med) => calcularDiferencaDias(med.dataVenda) > 7 && calcularDiferencaDias(med.dataVenda) <= 14);
    case "Há 3 semanas":
      return medicamentos.filter((med) => calcularDiferencaDias(med.dataVenda) > 14 && calcularDiferencaDias(med.dataVenda) <= 21);
    case "Há 3 dias":
      return medicamentos.filter((med) => calcularDiferencaDias(med.dataVenda) <= 3);
    default:
      return medicamentos;
  }
};

// Controle do modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-fitro") as HTMLElement;
  const openBtn = document.getElementById("open-modal-filtro-vd") as HTMLElement;
  const closeBtn = document.getElementById("closed-filtro") as HTMLElement;
  const filterButtons = document.querySelectorAll(".filter-btn");

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });


  const renderizarTabela = (dados:Medicamento[]) =>{
    const tabelaBody = document.getElementById("medicamentos-tabela") as HTMLTableSectionElement
    tabelaBody.innerHTML = ""; // Limpa a tabela antes de atualizar os dados
 dados.forEach((med) =>{
  const row = document.createElement("tr");
  row.className = "border-b border-gray-100";

    row.innerHTML = `
      <td class="py-2 px-4 text-sm text-gray-600">
        <div class="flex flex-col">
          <h6 class="text-sm text-gray-500">Data da venda</h6>
          <span>${med.dataVenda.toLocaleDateString()}</span>
        </div>
      </td>
      <td class="py-2 px-4 text-sm text-gray-800">
        <p>${med.nomeMedicamento}</p>
      </td>
      <td class="py-2 px-4 text-sm text-gray-600">
        <p><span class="font-semibold">${med.quantidadeVendidas}</span></p>
      </td>
    `;
    tabelaBody.appendChild(row);
 }) }
 renderizarTabela(medicamentos);



  filterButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const filtro = target.innerText;
      const dadosFiltrados = filtrarMedicamentos(filtro);
      console.log(`Filtrando por: ${filtro}`);
      renderizarTabela(dadosFiltrados);

      modal.classList.add('hidden')
      modal.classList.remove("block")
    });
  });
});



