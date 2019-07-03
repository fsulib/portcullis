jQuery(document).ready(function($) {
  $(window).click(function() {
    $(".view-slideout-filters").removeClass("view-slideout-filters-open");
    $(".main-content").removeClass("slideout-filters-open");
  });
  document.querySelector('.slideout-filters-toggle').addEventListener('click', function(event) {
    event.stopPropagation();
    $(".view-slideout-filters").toggleClass("view-slideout-filters-open");
    $(".main-content").toggleClass("slideout-filters-open");
  });
  document.querySelector('.slideout-filters-close-toggle').addEventListener('click', function(event) {
    event.stopPropagation();
    $(".view-slideout-filters").toggleClass("view-slideout-filters-open");
    $(".main-content").toggleClass("slideout-filters-open");
  });
  document.querySelector('.view-slideout-filters').addEventListener('click', function(event) {
    event.stopPropagation();
  });
});
