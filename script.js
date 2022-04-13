function Validate(e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var city1 = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var st1 = document.getElementById("st1").value;
  var st2 = document.getElementById("st2").value;
  var pstcode = document.getElementById("postalcode").value;
  var phone1 = document.getElementById("Phone").value;
  var feed = document.getElementById("Feedback").value;
  var suggest = document.getElementById("Suggestions").value;

  var emailre = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var fnamere = /^[A-Za-z]{3,30}$/;
  var add = /^[A-Za-z0-9'\.\-\s\,]{7,45}$/;
  var pin = /^[0-9]{6}$/;
  var num = /^[6-9][0-9]{9}$/;
  var empty = /^[A-Za-z0-9'\.\-\s\,]{7,}$/;


  if (fnamere.test(fname)) {
    document.getElementById('fnamewrong').innerHTML = " ";
  }
  else {
    document.getElementById('fnamewrong').innerHTML = "use alpabets ";
    return false;
  }




  if (fnamere.test(lname)) {
    document.getElementById('lnamewrong').innerHTML = " ";
  }
  else {
    document.getElementById('lnamewrong').innerHTML = "use alpabets ";
    return false;
  }


  if (add.test(st1)) {
    document.getElementById('addwrong').innerHTML = " ";
  }
  else {
    document.getElementById('addwrong').innerHTML = "Invalid ";
    return false;
  }


  if (add.test(st2)) {
    document.getElementById('add2wrong').innerHTML = " ";
  }
  else {
    document.getElementById('add2wrong').innerHTML = "Invalid ";
    return false;
  }


  if (fnamere.test(city1)) {
    document.getElementById('citywrong').innerHTML = " ";
  }
  else {
    document.getElementById('citywrong').innerHTML = "Use alphabets";
    return false;
  }


  if (fnamere.test(state)) {
    document.getElementById('provwrong').innerHTML = " ";
  }
  else {
    document.getElementById('provwrong').innerHTML = "Use Alpabets ";
    return false;
  }

  if (pin.test(pstcode)) {
    document.getElementById('pinwrong').innerHTML = " ";
  }
  else {
    document.getElementById('pinwrong').innerHTML = "Use Numbers";
    return false;
  }

  if (num.test(phone1)) {
    document.getElementById('phwrong').innerHTML = " ";
  }
  else {
    document.getElementById('phwrong').innerHTML = "Use Numbers";
    return false;
  }


  if (emailre.test(email)) {
    document.getElementById('emailwrong').innerHTML = " ";
  }
  else {
    document.getElementById('emailwrong').innerHTML = "use format alpha.xmail.com";
    return false;
  }

  if (empty.test(feed)) {
    document.getElementById('feedwrong').innerHTML = " ";
  }
  else {
    document.getElementById('feedwrong').innerHTML = "7 Characters required";
    return false;
  }


  if (empty.test(suggest)) {
    document.getElementById('suggestwrong').innerHTML = " ";
  }
  else {
    document.getElementById('suggestwrong').innerHTML = "7 Characters required";
    return false;

  }



}



document.querySelector("form").onsubmit = Validate;









