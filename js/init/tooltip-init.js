(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.pcToolTip = {
    attach: function (context, settings) {
      var fixTooltip = $.fn.tooltip.noConflict();
      $.fn.tlp = fixTooltip;
    }
  };
})(jQuery, Drupal, drupalSettings);
