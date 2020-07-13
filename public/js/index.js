$(document).ready(function () {
  $("#splashPage-header").animate(
    {
      "letter-spacing": ".1em",
    },
    1000
  );

  $("#cueboom-demos").delay(500).animate(
    {
      paddingTop: "0",
    },
    2000
  );

  // Expanding Mobile Nav Menu after 'hamburger' is clicked
  $("#nav-hamburger").click(() => {
    $("header").toggleClass("header-expanded");
    $("#nav-links-mobile").toggleClass("nav-links-mobile-display");
  });

  // Collapsing Mobile Nav Menu after a link is clicked
  $("#nav-links-mobile").click(() => {
    $("header").toggleClass("header-expanded");
    $("#nav-links-mobile").toggleClass("nav-links-mobile-display");
  });


  // Smooth Scroll
  $('a[href*="#"]').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        event.preventDefault();

        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          2000,
          () => {
            let $target = $(target);

            $target.focus();
          }
        );
      }
    }
  });



  // Animations on scroll

  const $animatedElements = $(".animate-on-scroll");

  const $window = $(window);

  elementInView = (element) => {

    let docTop = $window.scrollTop();

    let docBottom = docTop + $window.height();

    let elementTop = $(element).offset().top;
    let elementBottom = elementTop + $(element).height();

    return elementBottom <= docBottom && elementTop >= docTop;
  };

  $window.on("scroll", () => {
    $.each($animatedElements, (index) => {
      const animationType = $animatedElements[index].getAttribute(
        "data-animationType"
      );

      if (elementInView($animatedElements[index])) {
        $animatedElements[index].classList.remove("hidden");
        $animatedElements[index].classList.add(animationType);
      }
    });
  });
});
