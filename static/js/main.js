$(document).ready(function () {
  /*****    Section for navbar    *****/

  //toggle the menu to open and close
  $("#targetOpenCloseNav").click(function () {
    $(".navIcon").toggleClass("close");
    $(".nav-item").toggleClass("openNavbar");
    $(".navbar-nav").toggleClass("add-margin");
    $(".navbar").toggleClass("open");
  });
});
