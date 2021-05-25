document.addEventListener("DOMContentLoaded", () => {
  var form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", sendEmail);    
  }
});

function sendEmail(e) {
  e.preventDefault();
  e.stopPropagation();

  var form = document.querySelector("form.needs-validation");
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return false;
  }

  document.querySelectorAll("button[type='submit'] > span").forEach(function (item) {
    item.classList.toggle("visually-hidden");
  });

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("#contact").classList.add("visually-hidden");
      document.querySelector("#thanks").classList.remove("visually-hidden");
    }
  };

  xhttp.open("GET", document.querySelector("form").action, true);
  xhttp.send();
}
