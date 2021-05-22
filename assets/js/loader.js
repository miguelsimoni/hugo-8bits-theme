function loaderHandler(baseURL, pageNumber) {
  document.querySelectorAll("#loader span").forEach(function (item) {
    item.classList.toggle("visually-hidden");
  });

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("#loader").remove();

      var re = document.createElement('div');
      re.innerHTML = this.responseText;
      var nextPageContent = re.querySelector("#posts").innerHTML;
      document.querySelector("#posts").insertAdjacentHTML("beforeend", nextPageContent);
    }
  };

  xhttp.open("GET", baseURL + "page/" + pageNumber, true);
  xhttp.send();
}
