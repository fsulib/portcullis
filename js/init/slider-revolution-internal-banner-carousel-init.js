(function ($, Drupal, drupalSettings, once) {
  Drupal.behaviors.mtSliderRevolutionInternalBannerCarousel = {
    attach: function (context, settings) {
      //$(context).find('.carousel-internal .rev_slider').once('mtSliderRevolutionInternalBannerCarouselInit').show().revolution({
      $(once('mtSliderRevolutionInternalBannerCarouselInit', '.carousel-internal .rev_slider', context)).show().revolution({
        sliderType:"carousel",
        sliderLayout:"auto",
        gridwidth: [1170,970,750,450],
        gridheight:drupalSettings.catalogplus.sliderRevolutionInternalBannerCarouselInit.carouselInternalBannerInitialHeight,
        disableProgressBar:"on",
        navigation: {
          onHoverStop:"off",
          arrows:{
            enable:true,
            tmp: "<div class='tp-title-wrap'><span class='tp-arr-titleholder'>{{title}}</span></div>",
            left:{
              h_align:"left",
              v_align:"center",
              h_offset:0,
              v_offset:0
            },
            right:{
              h_align:"right",
              v_align:"center",
              h_offset:0,
              v_offset:0
            }
          },
          bullets:{
            style:"",
            enable: true,
            direction:"horizontal",
            space: 20,
            h_align: drupalSettings.catalogplus.sliderRevolutionInternalBannerCarouselInit.carouselInternalBannerBulletsPosition,
            v_align:"bottom",
            h_offset: 0,
            v_offset: 30,
            tmp:"<span></span>",
            hide_onleave: false,
            hide_onmobile: false
          },
        },
        carousel: {
          padding_top: "0",
          padding_bottom: "50",
          maxRotation: 0,
          vary_rotation: "off",
          minScale: 60,
          vary_scale: "on",
          horizontal_align: "center",
          vertical_align: "center",
          fadeout: "on",
          vary_fade: "on",
          maxVisibleItems: 7,
          infinity: "on",
          space: -120,
          stretch: "off"
        },
        touch:{
          touchenabled: drupalSettings.catalogplus.sliderRevolutionInternalBannerCarouselInit.carouselInternalBannerTouchSwipe,
          swipe_treshold:75,
          swipe_min_touches:1,
          drag_block_vertical:false,
          swipe_direction:"horizontal"
        },
        stopLoop:"on",
        stopAfterLoops:0,
        stopAtSlide:1,
        autoHeight:"off"
      });

      //$(context).find('.transparent-background').once('mtSliderRevolutionInternalBannerCarouselBG').css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowBackgroundOpacity + ")");
      $(once('mtSliderRevolutionInternalBannerCarouselBG', '.transparent-background', context)).css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowBackgroundOpacity + ")");
      //$(context).find('.tp-caption--transparent-background .tp-caption__title').once('mtSliderRevolutionInternalBannerCarouselCaptionBG').css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowCaptionOpacity + ")");
      $(once('mtSliderRevolutionInternalBannerCarouselCaptionBG', '.tp-caption--transparent-background .tp-caption__title', context)).css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowCaptionOpacity + ")");
      //$(context).find('.tp-caption--transparent-background .tp-caption__text').once('mtSliderRevolutionInternalBannerCarouselCaptionBG').css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowCaptionOpacity + ")");
      $(once('mtSliderRevolutionInternalBannerCarouselCaptionBG', '.tp-caption--transparent-background .tp-caption__text', context)).css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowCaptionOpacity + ")");

    }
  };
})(jQuery, Drupal, drupalSettings, once);
