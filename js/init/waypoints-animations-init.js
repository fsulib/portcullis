(function ($, Drupal, once) {
  Drupal.behaviors.mtWaypointsAnimations = {
    attach: function (context, settings) {
      //$("body:not(.path-admin) [data-animate-effect]", context).once('mtWaypointsAnimations').each(function() {
      $(once('mtWaypointsAnimations', "body:not(.path-admin) [data-animate-effect]", context)).each(function() {
        var thisObject = $(this);
        var animation = thisObject.attr("data-animate-effect");
        if(animation != "no-animation") {
          var waypoints = thisObject.waypoint(function(direction) {
            var animatedObject = $(this.element);
            setTimeout(function() {
              animatedObject.addClass("animated " + animation);
              animatedObject.removeClass("mt-no-opacity");
            }, 100);
            this.destroy();
          },{
            offset: "90%"
          });
        }
      });
    }
  };
})(jQuery, Drupal, once);
