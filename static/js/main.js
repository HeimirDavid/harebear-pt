$(document).ready(function () {
  /*****    Section for navbar    *****/

  //toggle the menu to open and close
  $("#targetOpenCloseNav").click(function () {
    $(".navIcon").toggleClass("close");
    $(".nav-item").toggleClass("openNavbar");
    $(".navbar-nav").toggleClass("add-margin");
    $(".navbar").toggleClass("open");
  });

  // Intersection Observers to change the background color of the navbar when scrolled beyond the intro video
  const navbar = document.querySelector("#mainNavbar");
  const sectionOne = document.querySelector(".fullscreen-video-wrap");

  const sectionOneOptions = {
    rootMargin: "-130px 0px 0px 0px",
  };

  const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navbar.classList.add("nav-scrolled");
      } else {
        navbar.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions);

  sectionOneObserver.observe(sectionOne);
});
