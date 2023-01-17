function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searc");
    filter = input.value.toUpperCase();
    ul = document.getElementById("content");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function click() {
  document.getElementById("content").location.href= "Contents.html";
}