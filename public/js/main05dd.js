window.addEventListener("load", function () {
  animatedEffect();
});

window.addEventListener("resize", function () {});

window.addEventListener("scroll", function () {
  head_1_sticky();
  animatedEffect();
});

function register() {
  head_1_sticky();
  head_1_hamburger();
  footerMenuToggle();
}
register();

function head_1_hamburger() {
  let hamb = document.querySelector(".hamburger");

  if (hamb == null) {
    return;
  }

  let body = document.querySelector("body");
  let html = document.querySelector("html");
  hamb.addEventListener("click", function () {
    body.classList.toggle("menu_opened");
    html.classList.toggle("no_overflow");
  });
}

function head_1_sticky() {
  let scrollpos = window.scrollY;
  let body = document.querySelector("body");

  let add_class_on_scroll = () => body.classList.add("sticky_h");
  let remove_class_on_scroll = () => body.classList.remove("sticky_h");

  scrollpos = window.scrollY;

  if (scrollpos >= 1) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
}

(function ($) {
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function (partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

function animatedEffect() {
  $(".animated").each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("a_active");
    }
  });

  $(".count").each(function (i, el) {
    var el = $(el);
    if (el.visible(true) && !el.hasClass("c_active")) {
      el.addClass("c_active");
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    }
  });
}

function footerMenuToggle() {
  let faqItems = document.querySelectorAll(".foot_1 .menus .menu .heading");
  if (faqItems == null) {
    return;
  }
  faqItems.forEach(function (userItem) {
    userItem.addEventListener("click", function () {
      this.parentElement.classList.toggle("active");
    });
  });
}

function phoneMask() {
  $(".phone_mask")
    .keydown(function (e) {
      var key = e.which || e.charCode || e.keyCode || 0;
      $phone = $(this);

      // Don't let them remove the starting '('
      if ($phone.val().length === 1 && (key === 8 || key === 46)) {
        $phone.val("(");
        return false;
      }
      // Reset if they highlight and type over first char.
      else if ($phone.val().charAt(0) !== "(") {
        $phone.val("(" + String.fromCharCode(e.keyCode) + "");
      }

      // Auto-format- do not expose the mask as the user begins to type
      if (key !== 8 && key !== 9) {
        if ($phone.val().length === 4) {
          $phone.val($phone.val() + ")");
        }
        if ($phone.val().length === 5) {
          $phone.val($phone.val() + " ");
        }
        if ($phone.val().length === 9) {
          $phone.val($phone.val() + "-");
        }
      }

      // Allow numeric (and tab, backspace, delete) keys only
      return (
        key == 8 ||
        key == 9 ||
        key == 46 ||
        (key >= 48 && key <= 57) ||
        (key >= 96 && key <= 105)
      );
    })

    .bind("focus click", function () {
      $phone = $(this);

      if ($phone.val().length === 0) {
        $phone.val("(");
      } else {
        var val = $phone.val();
        $phone.val("").val(val); // Ensure cursor remains at the end
      }
    })

    .blur(function () {
      $phone = $(this);

      if ($phone.val() === "(") {
        $phone.val("");
      }
    });
}
phoneMask();
