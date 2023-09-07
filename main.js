let mybutton = document.getElementById("tBtn");
window.onscroll = function () {
  scroll();
};
function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function toTop() {
  var a=document.createElement("a");
  a.href="#list";
  a.click();
}
function toCode(){
    window.open("https://www.google.com");
    console.log("hi");
}
