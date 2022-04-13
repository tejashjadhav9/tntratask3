document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
}

const fnamere = /^[A-Za-z]{3,30}$/;
const emailre = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const add = /^[A-Za-z0-9'\.\-\s\,]{7,45}$/;
const pin = /^[0-9]{6}$/;
const num = /^[6-9][0-9]{9}$/;
const sevenChars = /^[A-Za-z0-9'\.\-\s\,]{7,}$/;

function firstname(userVal) {
  return fnamere.test(userVal);
}
function email(userVal) {
  return emailre.test(userVal);
}
function address(userVal) {
  return add.test(userVal);
}
function pincode(userVal) {
  return pin.test(userVal);
}
function contactNo(userVal) {
  return num.test(userVal);
}

function textareaValidate(userVal) {
  return sevenChars.test(userVal);
}

function checkbox() {
  return document.querySelectorAll('input[type="checkbox"]:checked').length > 0;
}

function gender() {
  return document.querySelectorAll('input[type="radio"]:checked').length > 0;
}

document.getElementById("submit").onclick = function () {
  document.getElementById("table").style.display = "block";

  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var fn = row.insertCell(0);
  var ln = row.insertCell(1);
  var stt1 = row.insertCell(2);
  var stt2 = row.insertCell(3);
  var cty = row.insertCell(4);
  var stat = row.insertCell(5);
  var pinc = row.insertCell(6);
  var phno = row.insertCell(7);
  var ema = row.insertCell(8);
  var fed = row.insertCell(9);
  var sugg = row.insertCell(10);
  var drp = row.insertCell(11);
  var gen = row.insertCell(12);
  var checkvalue = row.insertCell(13);
  var dlt = row.insertCell(14);


  fn.innerHTML = document.getElementById("fname").value;
  ln.innerHTML = document.getElementById("lname").value;
  stt1.innerHTML = document.getElementById("st1").value;
  stt2.innerHTML = document.getElementById("st2").value;
  cty.innerHTML = document.getElementById("city").value;
  stat.innerHTML = document.getElementById("state").value;
  pinc.innerHTML = document.getElementById("postalcode").value;
  phno.innerHTML = document.getElementById("Phone").value;
  ema.innerHTML = document.getElementById("email").value;
  fed.innerHTML = document.getElementById("Feedback").value;
  sugg.innerHTML = document.getElementById("Suggestions").value;
  drp.innerHTML = document.getElementById("cars").value;
  dlt.innerHTML = "<img src='images/icons8-delete-30.png' onclick='myDeleteFunction(this)'><img src='images/icons8-edit-30.png'onclick='onedit(this)'>";


  var markedcheckbox = document.getElementsByName('eee');
  for (let checkbox of markedcheckbox) {
    if (checkbox.checked) {
      checkvalue.innerHTML += checkbox.value + '';

    }
  }

  if (document.getElementById("male").checked) {
    gen.innerHTML = document.getElementById("male").value

  }
  else if (document.getElementById("female").checked) {
    gen.innerHTML = document.getElementById("female").value

  }
  else if (document.getElementById("others").checked) {
    gen.innerHTML = document.getElementById("others").value

  }

}

function myDeleteFunction(td) {
  row = td.parentElement.parentElement;
  document.getElementById("table").deleteRow(row.rowIndex);
}

function onedit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("st1").value = selectedRow.cells[2].innerHTML;
  document.getElementById("st2").value = selectedRow.cells[3].innerHTML;
  document.getElementById("city").value = selectedRow.cells[4].innerHTML;
  document.getElementById("state").value = selectedRow.cells[5].innerHTML;
  document.getElementById("postalcode").value = selectedRow.cells[6].innerHTML;
  document.getElementById("Phone").value = selectedRow.cells[7].innerHTML;
  document.getElementById("email").value = selectedRow.cells[8].innerHTML;
  document.getElementById("Feedback").value = selectedRow.cells[9].innerHTML;
  document.getElementById("Suggestions").value = selectedRow.cells[10].innerHTML;
  document.querySelector("select").value = selectedRow.cells[11].innerHTML;

  var temp = "input[type=radio][value=" + selectedRow.cells[12].innerHTML + "]";
  document.querySelector(temp).checked = true;

  myDeleteFunction(td);
}
