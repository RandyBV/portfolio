/* Selector de categorias */

filterSelection("all")

/* Filtra categorias */
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("project");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

/* Agrega categorias */
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

/* Quita categorias */
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

/* Agrega calse active al boton en uso */
var btnContainer = document.getElementById("categories");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



function myFunction() {
  /* Selecciona el elemento */
  var copyText = document.getElementById("myInput");

  /* Selecciona el texto dentro elemento */
  copyText.select();
  
  /* Copia el texto dentro elemento */
  document.execCommand("copy");

  /* Aviso*/
  alert("Copied the text: " + copyText.value);
}



