class UI {
  mostrarMensaje(mensaje, clases) {
    const div = document.createElement("div");
    div.className = clases;
    div.appendChild(document.createTextNode(mensaje));

    const divMensaje = document.querySelector(".mensajes");
    divMensaje.appendChild(div);

    setTimeout(() => {
      document.querySelector(".mensajes div").remove();
    }, 3000);
  }
}
