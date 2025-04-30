// Area Of A Trapezoid Calculator

// Event Listeners
document.getElementById("calc-btn").addEventListener("click", calc);

// Functions
function calc() {
  // INPUT
  var in1 = +document.getElementById("b1").value;
  var in2 = +document.getElementById("b2").value;
  var h = +document.getElementById("h").value;
  // PROCESS
  answer = (1 / 2) * (in1 + in2) * h;
  finalAnswer = answer.toFixed(2);
  document.getElementById("finalOutput").innerHTML = finalAnswer + "m²";
  // OUTPUT
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("h").value = "";
  document.getElementById("finalOutput").style.border = "2px solid green";
  document.getElementById("img").src = "Images/checkmark.png";
}
