$(document).ready(function () {
  /*****    Section for navbar    *****/

  if ($(window).width() <= 600) {
    $("#header-bg-video").remove();
  }

  //toggle the menu to open and close
  $("#targetOpenCloseNav").click(function () {
    $(".navIcon").toggleClass("close");
    $(".nav-item").toggleClass("openNavbar");
    $(".navbar-nav").toggleClass("add-margin");
    $(".navbar").toggleClass("open");
  });

  //Close the hamburger menu by clicking anywhere on the page
  $(document).click(function (event) {
    var click = $(event.target);
    var _open = $(".navbar-collapse").hasClass("show");
    if (_open === true && !click.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  });

  //collapse the text, and expand it to it's original. Code from these sources:
  // http://jsfiddle.net/sLaapxff/1/
  // https://stackoverflow.com/questions/33175833/shortening-long-blocks-of-text-based-on-words-not-characters-to-display-a-read-m

  function collapseText(mobileX) {
    if (mobileX.matches) {
      $("#about_text").each(function () {
        var text = $(this).text();
        var word = "";
        var count = 0;
        var index = 0;

        for (var i = 0; i < text.length; i++) {
          // we count the Real words and store the index of last word
          if (text[i] == " " || text[i] == "," || text[i] == ".") {
            if (word != "") {
              // if we actually have a word (this avoids multiple white spaces)
              count++;
              word = "";
              index = i;
              if (count == 100) break; // we reached 100 real words, stop
            }
          } else {
            word += text[i];
          }
        }

        if (count == 100 && index + 1 != text.length) {
          // we found 100 words and there is extra text
          html =
            "<span>" +
            text.substring(0, index) +
            "</span>" +
            '<span class="more_text" style="display:none;"> ' +
            text.substring(index, text.length) +
            "</span>" +
            '<a href="#" class="read_more">...<br/><span class="glow about-tx-btn">Read More <i class="fas fa-caret-down"></i></span></a>';

          $(this).html(html);

          $(this)
            .find("a.read_more")
            .click(function (event) {
              $(this).toggleClass("less");
              event.preventDefault();
              if ($(this).hasClass("less")) {
                $(this).html(
                  "<br/><span class='glow about-tx-btn'>Read Less <i class='fas fa-caret-up'></i></span>"
                );
                $(this).parent().find(".more_text").show();
              } else {
                $(this).html(
                  "...<br/><span class='glow about-tx-btn'>Read More <i class='fas fa-caret-down'></i></span>"
                );
                $(this).parent().find(".more_text").hide();
              }
            });
        }
      });
    }
  }
  var mobileX = window.matchMedia("(max-width: 600px)");
  collapseText(mobileX);
  mobileX.addListener(collapseText);

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
