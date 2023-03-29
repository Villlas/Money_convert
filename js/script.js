const button = document.getElementById("convert");
const span = document.querySelector("span");
const url = "https://economia.awesomeapi.com.br/last/USD-BRL";

fetch(url)
  .then(function (response) {
    return response.json(); //Converter para jason
  })
  .then(function (data) {
    const dolarReal = data.USDBRL.bid;

    button.addEventListener("click", function convert() {
      const real = parseFloat(document.getElementById("real").value);
      let realConvert = (dolarReal * real).toFixed(2); 
      let str = (!isNaN(real)) ? "$" + realConvert : "Valor inválido"
      span.textContent = str;
    });
  });
