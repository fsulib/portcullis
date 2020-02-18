(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.pcToolTip = {
    attach: function (context, settings) {
      if(typeof($.fn.tooltip) != 'undefined') {
        var fixTooltip = $.fn.tooltip.noConflict();
        $.fn.tlp = fixTooltip;
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
