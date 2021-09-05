// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling

$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $(".scroll-animations .animated").each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass("fadeInLeft");
      }
    });
  });

  // Click Animations
  $("button").on("click", function() {
    /*
    If any input is empty make it's border red and shake it. After the animation is complete, remove the shake and animated classes so that the animation can repeat.
    */

    // Check name input
    if ($("#name").val() === "") {
      $("#name")
        .addClass("form-error animated shake")
        .one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function() {
            $(this).removeClass("animated shake");
          }
        );
    } else {
      $("#name").removeClass("form-error");
    }

    // Check email input
    if ($("#email").val() === "") {
      $("#email")
        .addClass("form-error animated shake")
        .one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function() {
            $(this).removeClass("animated shake");
          }
        );
    } else {
      $("#email").removeClass("form-error");
    }

    // Check message textarea
    if ($("#message").val() === "") {
      $("#message")
        .addClass("form-error animated shake")
        .one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function() {
            $(this).removeClass("animated shake");
          }
        );
    } else {
      $("#message").removeClass("form-error");
    }
  });
});
