
const Alerta = document.getElementById("alert-red")
setTimeout(() => {
 Alerta.classList.add("hidden")
 Alerta.classList.remove("flex")
 Alerta.classList.remove("inline-block")
}, 1000)



const GerenciarButton = document.querySelectorAll(".gerenciar");
GerenciarButton.forEach((button) =>{
 button.addEventListener("click" , () =>{
    let GereModal = document.getElementById("modal-gerenciar")
    GereModal.classList.add("block")
    GereModal.classList.remove("hidden")
   })
})



// Função para alternar exibição do dropdown
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden');
}


 // Função para alternar a visibilidade dos dropdowns
 function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden');
}

// Fecha os dropdowns ao clicar fora
document.addEventListener('click', (e) => {
  const dropdowns = document.querySelectorAll('.drop-add > div:not(.hidden)');
  dropdowns.forEach((dropdown) => {
    // Verifica se o clique foi fora do dropdown
    if (!dropdown.contains(e.target) && !e.target.closest('button')) {
      dropdown.classList.add('hidden');
    }
  });
});



const Pesquisar = document.getElementById("pesquisar-modal")

Pesquisar.addEventListener("click" , () =>{
 let ModalPS = document.getElementById("modal-pesquisar");
 ModalPS.classList.add("block")
 ModalPS.classList.remove("hidden")
})

function toggleModal(triggerId, modalId, addClass, removeClass) {
  const triggerElement = document.getElementById(triggerId);
  triggerElement.addEventListener("click", () => {
    const modalElement = document.getElementById(modalId);
    modalElement.classList.add(addClass);
    modalElement.classList.remove(removeClass);
  });
}
// Usando a função para cada caso
toggleModal("close-modal", "modal-medicamento", "hidden", "block");
toggleModal("closed-gere", "modal-gerenciar", "hidden", "block");
toggleModal("btn-pesquisar-closed", "modal-pesquisar", "hidden", "block");


