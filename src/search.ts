interface SearchData{
  nome:string , 
  email:string , 
  cpf: string , 
  contato:string
}



const data: SearchData[] = [
  { nome: "João Silva", email: "joao40@gmail.com", cpf: "123.456.789-00", contato: "(11) 98765-4321" },
  { nome: "Maria Oliveira", email: "maria50@gmail.com", cpf: "987.654.321-00", contato: "(21) 97654-3210" },
  { nome: "Carlos Santos", email: "carlos60@gmail.com", cpf: "456.123.789-00", contato: "(31) 99876-5432" },
]

const searchInput = document.getElementById("searchInput") as HTMLInputElement
const searchResultsContainer = document.getElementById("searchResults") as HTMLDivElement 

searchInput.addEventListener("input" , (event) =>{
 const query = (event.target as HTMLInputElement).value.toLowerCase()

 if(query === ""){
  searchResultsContainer.classList.add("invisible" , "opacity-0")
  searchResultsContainer.innerHTML = "";
  return;
 }

 const  filteredResults = data.filter(item =>
  item.nome.toLowerCase().includes(query) || 
  item.email.toLowerCase().includes(query) || 
  item.cpf.includes(query) ||
  item.contato.includes(query) 
)





if (filteredResults.length > 0) {
  searchResultsContainer.classList.remove("invisible", "opacity-0");
  searchResultsContainer.innerHTML = filteredResults.map(item => `
    <div class="px-4 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
      <p class="text-sm font-medium text-[#101828]">${item.nome}</p>
      <p class="text-sm text-[#667085]">${item.email}</p>
      <p class="text-sm text-[#667085]">${item.cpf}</p>
      <p class="text-sm text-[#667085]">${item.contato}</p>
    </div>
  `).join('');
} else {
  searchResultsContainer.classList.remove("invisible", "opacity-0");
  searchResultsContainer.innerHTML = "<p class='px-4 py-2 text-gray-500'>Nenhum resultado encontrado</p>";
}
})