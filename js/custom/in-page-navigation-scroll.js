(function ($, Drupal, drupalSettings, once) {
  Drupal.behaviors.inPageNav = {
    attach: function (context, settings) {
      //$(context).find('.link--smooth-scroll').once('inPageNavInit').click(function(e) {
      $(once('inPageNavInit', '.link--smooth-scroll', context)).click(function(e) {
        var adminHeight = parseInt($('body').css('paddingTop')) || 0;
        var anchorDestination = this.hash;
        e.preventDefault();
        $('html, body').animate({
          //scrollTop: $($(this).attr("href")).offset().top
          scrollTop: $(anchorDestination).offset().top - drupalSettings.portcullis.inPageNavigation.inPageNavigationOffset - adminHeight
        }, 1000);
        if (history.pushState) {
          history.pushState(null, null, anchorDestination);
        } else {
          location.hash = anchorDestination;
        }
      });

    }
  };
})(jQuery, Drupal, drupalSettings, once);
