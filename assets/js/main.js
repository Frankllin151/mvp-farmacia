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


const GetinputAll = document.querySelectorAll("input");

GetinputAll.forEach((event) =>{
  event.addEventListener("click", ()=>{
    event.classList.remove("custom-border")
    event.classList.add("custo-click-border")
  })

  event.addEventListener("blur" , () =>{
    event.classList.remove("custo-click-border")
    event.classList.add("custom-border")
  })
})