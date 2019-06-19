const api = new API(
  "eadfa28f00ede439d0f069ace4e697882e1251b8b65eb1bb9bc9a61ae564898e"
);
const ui = new UI();

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", e => {
  e.preventDefault();

  const monedaSelect = document.querySelector("#moneda");
  const monedaSelecionada =
    monedaSelect.options[monedaSelect.selectedIndex].value;

  const criptoMonedaSelect = document.querySelector("#criptomoneda");
  const criptoMonedaSelecionada =
    criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

  if (monedaSelecionada === "" || criptoMonedaSelecionada === "") {
    ui.mostrarMensaje(
      "Ambos campos son obligatorios",
      "alert bg-danger text-center"
    );
  } else {
  }
});

// const otherdiv = document.createElement("p");
// const divMessage = document.querySelector("#resultado");
// divMessage.textContent = "Hola como estas";
// divMessage.appendChild(otherdiv);
