function calculeazaDepozit() {
  let suma = parseFloat(document.getElementById("suma").value);
  let perioada = parseInt(document.getElementById("perioada").value);
  let dobanda = 1;
  let totalPlata = suma * (1 + (dobanda / 100) * perioada);
  document.getElementById("totalPlata").innerHTML = + totalPlata.toFixed(2) + " lei";
}