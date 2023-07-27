var sideA = document.getElementById("side-A");
var sideB = document.getElementById("side-B");
var sideC = document.getElementById("side-C");
var calcBtn = document.querySelector("#calcBtn");
var answer = document.querySelector("#answer");
var typeTri = document.querySelector("#typeTri");

function calcularTri() {
  var numSideA = parseFloat(sideA.value);
  var numSideB = parseFloat(sideB.value);
  var numSideC = parseFloat(sideC.value);
  if (
    sideA.value == "" ||
    isNaN(sideA.value) ||
    sideB.value == "" ||
    isNaN(sideB.value) ||
    sideC.value == "" ||
    isNaN(sideC.value)
  ) {
    alert("Insira Valores Válidos");
    sideA.focus();
  } else {
    if (
      numSideA > numSideB + numSideC ||
      numSideB > numSideA + numSideC ||
      numSideC > numSideB + numSideA
    ) {
      answer.textContent = "Lados não podem formar um triângulo ";
      typeTri.textContent = "";
    } else {
      if (
        numSideA != numSideB &&
        numSideA != numSideC &&
        numSideB != numSideC
      ) {
        answer.textContent = "Lados podem formar um triângulo";
        typeTri.textContent = "Tipo: Escaleno";
      }
      if (
        numSideA == numSideB ||
        numSideA == numSideC ||
        numSideB == numSideC
      ) {
        answer.textContent = "Lados podem formar um triângulo";
        typeTri.textContent = "Tipo: Isósceles";
      }
      if (
        numSideA == numSideB &&
        numSideA == numSideC &&
        numSideB == numSideC
      ) {
        answer.textContent = "Lados podem formar um triângulo";
        typeTri.textContent = "Tipo: Equilátero";
      }
    }
  }
}
calcBtn.addEventListener("click", calcularTri);
