
// filter using jQuery
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show(1000);
    } else {
      $(".post").not(`.${value}`).hide(1000);
      $(".post").filter(`.${value}`).show(1000);
    }
  });
});

// sticky navbar on scroll
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const nav = document.getElementById("navbar-top"),
      navbarHeight = nav.offsetHeight;
    if (window.scrollY > 50) {
      nav.classList.add("fixed-top");
      document.body.style.paddingTop = `${navbarHeight}px`;
    } else {
      nav.classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  });
});
