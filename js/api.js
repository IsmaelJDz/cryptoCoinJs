//https://www.cryptocompare.com/cryptopian/api-keys
//api key
//eadfa28f00ede439d0f069ace4e697882e1251b8b65eb1bb9bc9a61ae564898e

class API {
  constructor(apikey) {
    this.apikey = apikey;
  }

  async obtenerMonedasApi() {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${
      this.apikey
    }`;

    const datos = await fetch(url);
    const dataJSON = await datos.json();

    return {
      dataJSON
    };
  }

  async obtenerValores(moneda, criptomoneda) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${
      this.apikey
    }`;

    //consultar en rest api
    const urlConvertir = await fetch(url);

    const resultado = await urlConvertir.json();

    return {
      resultado
    };
  }
}
