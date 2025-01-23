const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });

const ButtonAddProduto = document.getElementById("button-adicionar-produto");
ButtonAddProduto.addEventListener("click", ()=>{
let Modal = document.getElementById("modal-medicamento");
Modal.classList.remove("hidden"); // Remove a classe que oculta o modal
Modal.classList.add("block");  
})

const ClosedModal = document.getElementById("close-modal");
ClosedModal.addEventListener("click", () =>{
  let Modal = document.getElementById("modal-medicamento");
  Modal.classList.add("hidden"); // Remove a classe que oculta o modal
Modal.classList.remove("block");  
})


const Alerta = document.getElementById("alert-red")
setTimeout(() => {
 Alerta.classList.add("hidden")
 Alerta.classList.remove("flex")
 Alerta.classList.remove("inline-block")
}, 5000)