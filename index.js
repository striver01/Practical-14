function sub() {
  var x = document.getElementById("minus");
  var y = document.getElementById("content");
  if (parseInt(y.innerHTML) > 0) {
    y.innerHTML = parseInt(y.innerHTML) - 1;
  } else {
    document.getElementById("minus").disabled = true;
  }
}
function add() {
  var x = document.getElementById("minus");
  var y = document.getElementById("content");
  y.innerHTML = parseInt(y.innerHTML) + 1;
  document.getElementById("minus").disabled = false;
}
