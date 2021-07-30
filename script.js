function compute() {
  var amount = document.getElementById("amount").value;

  // If the amount rate is less than 1, a confirmation message displayed
  if (amount < 1) {
    var res = confirm("Enter a positive number");

    // if user click the 'ok' button, the amount input focused
    if (res) {
      document.getElementById("amount").focus();
      return
    } else {
      return
    }
  }
  //getting rate and years and assign them to further uses
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (amount * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  // this html will be displayed according to inputs
  document.getElementById("result").innerHTML =
    "If you deposit <mark>" +
    amount +
    "</mark>,<br>at an interest rate of <mark>" +
    rate +
    "%</mark><br>You will receive an amount of <mark>" +
    interest +
    "</mark>,<br>in the year <mark>" +
    year +
    "</mark><br>";
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
