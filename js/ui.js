class UI {
  constructor() {
    this.init();
  }

  init() {
    this.construirSelect();
  }

  construirSelect() {
    api.obtenerMonedasApi().then(monedas => {
      const select = document.querySelector("#criptomoneda");
      //console.log(monedas.dataJSON.Data);
      //Object.entries() toma los objetos y los convierte en arreglos
      //Un objeto literal no se puede recorrer con forEach, por eso se utiliza ObjectEntries
      for (const [key, value] of Object.entries(monedas.dataJSON.Data)) {
        //Añadir el symbol y el Nombre como opciones

        const opcion = document.createElement("option");
        opcion.value = value.Symbol;
        opcion.appendChild(document.createTextNode(value.CoinName));
        select.appendChild(opcion);
      }
    });
  }

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

  //imprime el resultado de la cotizacion
  mostrarResultado(resultado, moneda, crypto) {
    //En caso de un resultado anterior, ocultarlo
    const resultadoAnterior = document.querySelector("#resultado > div");
    if (resultadoAnterior) {
      resultadoAnterior.remove();
    }

    const datosMoneda = resultado[crypto][moneda];

    //recortar digitos de precio
    // el 2 son dos digitos despues del punto
    let precio = datosMoneda.PRICE.toFixed(2);

    //convertir timeStamp a fecha
    let actualizado = new Date(
      datosMoneda.LASTUPDATE * 1000
    ).toLocaleDateString("es-Mx");

    //construir el template
    let templateHTML = `
      <div class="card bg-warning">
        <div class="card-body text-light">
          <h2 class="card-title">Resultado:<h2>
          <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${
      datosMoneda.TOSYMBOL
    } es de: $ ${precio}</p>
          <p>Variación último día: % ${datosMoneda.CHANGEPCTDAY}</p>
          <p>Última Actualización: ${actualizado}</p>
        </div>
      </div>
    `;

    this.mostrarOcultar("block");

    setTimeout(() => {
      document.querySelector("#resultado").innerHTML = templateHTML;

      this.mostrarOcultar("none");
    }, 3000);
  }

  mostrarOcultar(show) {
    const spinner = document.querySelector(".contenido-spinner");
    spinner.style.display = show;
  }
}
