(function ($, Drupal, drupalSettings, once) {
  Drupal.behaviors.mtSliderRevolutionInternalBanner = {
    attach: function (context, settings, once) {
      //$(context).find('.slideshow-internal .rev_slider').once('mtSliderRevolutionInternalBannerInit').each(function() {
      $(once('mtSliderRevolutionInternalBannerInit', '.slideshow-internal .rev_slider', context)).each(function() {
        if (drupalSettings.catalogplus.sliderRevolutionInternalBannerInit.slideshowInternalBannerNavigationStyle == "bullets") {
          var bulletsEnable = true,
          tabsEnable = false;
        } else {
          var tabsEnable = true,
          bulletsEnable = false;
        }
        var settings = {
          sliderType: "standard",
          sliderLayout: "auto",
          gridheight: parseInt(drupalSettings.catalogplus.sliderRevolutionInternalBannerInit.slideshowInternalBannerInitialHeight),
          delay: drupalSettings.catalogplus.sliderRevolutionInternalBannerInit.slideshowInternalBannerEffectTime,
          disableProgressBar: 'off',
          navigation: {
            onHoverStop: "off",
            arrows: {
              enable: true,
              tmp: "<div class='tp-title-wrap'><span class='tp-arr-titleholder'>{{title}}</span></div>",
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 0,
                v_offset: 0
              },
              right:{
                h_align: "right",
                v_align: "center",
                h_offset: 0,
                v_offset: 0
              }
            },
            bullets: {
              style: "",
              enable: bulletsEnable,
              direction: "horizontal",
              space: 5,
              h_align: drupalSettings.catalogplus.sliderRevolutionInternalBannerInit.slideshowInternalBannerBulletsPosition,
              v_align: "bottom",
              h_offset: 0,
              v_offset: 20,
              tmp: "",
            },
            tabs: {
              style: "",
              enable: tabsEnable,
              width: 410,
              height: 95,
              min_width: 240,
              wrapper_padding: 0,
              wrapper_opacity: "1",
              tmp: '<div class="tp-tab-content"><span class="tp-tab-title">{{title}}</span></div>',
              visibleAmount: 6,
              hide_onmobile: false,
              hide_onleave: false,
              direction: "horizontal",
              span: true,
              position: "outer-bottom",
              space: 0,
              h_align: "left",
              v_align: "bottom",
              h_offset: 0,
              v_offset: 0
            },
            touch: {
              touchenabled: drupalSettings.catalogplus.sliderRevolutionInternalBannerInit.slideshowInternalBannerTouchSwipe,
              swipe_treshold: 75,
              swipe_min_touches: 1,
              drag_block_vertical: false,
              swipe_direction: "horizontal"
            }
          }
        };
        if ( drupalSettings.catalogplus.sliderRevolutionInternalBannerInit.slideshowInternalBannerAutoHeight ) {
          autoHeightSettings = {
            autoHeight: 'on',
          }
          $.extend(settings, autoHeightSettings);
        } else {
          autoHeightSettings = {
            autoHeight: 'off',
            responsiveLevels: [1199,991,767,480],
            gridwidth: [1170,970,750,450],
          };
          $.extend(settings, autoHeightSettings);
        }
        $(this).show().revolution(settings);
      });

      //$(context).find('.transparent-background').once('mtSliderRevolutionInternalBannerBG').css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowBackgroundOpacity + ")");
      $(once('mtSliderRevolutionInternalBannerBG', '.transparent-background', context)).css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowBackgroundOpacity + ")");
      //$(context).find('.tp-caption--transparent-background .tp-caption__title').once('mtSliderRevolutionInternalBannerCaptionBG').css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowCaptionOpacity + ")");
      $(once('mtSliderRevolutionInternalBannerCaptionBG', '.tp-caption--transparent-background .tp-caption__title', context)).css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowCaptionOpacity + ")");
      //$(context).find('.tp-caption--transparent-background .tp-caption__text').once('mtSliderRevolutionInternalBannerCaptionBG').css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowCaptionOpacity + ")");
      $(once('mtSliderRevolutionInternalBannerCaptionBG', '.tp-caption--transparent-background .tp-caption__text', context)).css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowCaptionOpacity + ")");

    }
  };
})(jQuery, Drupal, drupalSettings, once);
