function calculeazaCredit() {
  let suma = parseFloat(document.getElementById("suma").value);
  let perioada = parseInt(document.getElementById("perioada").value);
  let dobanda = 4.6;
  let rata = ((suma * dobanda) / 100) / (12 * (1 - Math.pow(1 + ((dobanda / 100) / 12), -perioada)));
  let totalPlata = perioada * rata;
  document.getElementById("rata").innerHTML = + rata.toFixed(2) + " lei";
  document.getElementById("totalPlata").innerHTML =+ totalPlata.toFixed(2) + " lei";
}



