
function toggleModal(triggerId, modalId, addClass, removeClass) {
  const triggerElement = document.getElementById(triggerId);
  console.log(triggerElement);
  
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




