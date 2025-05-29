const elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach( (duvida) => {
  duvida.addEventListener("click", () => {
        elementosDuvida.forEach( (outraDuvida) => {
            if (outraDuvida !== duvida) {
              outraDuvida.classList.remove("ativa");
            }
        });

    duvida.classList.toggle("ativa");
  });
});