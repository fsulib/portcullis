(function ($, Drupal, drupalSettings, once) {
  Drupal.behaviors.mtSliderRevolutionFullScreen = {
    attach: function (context, settings) {
      if (drupalSettings.catalogplus.sliderRevolutionFullScreenInit.slideshowFullScreenNavigationStyle == "bullets") {
        var bulletsEnable = true,
        tabsEnable = false;
      } else {
        var tabsEnable = true,
        bulletsEnable = false;
      }
      if ($(".transparent-header-active").length>0) {
        //$(context).find('.slideshow-fullscreen .rev_slider').once('mtSliderRevolutionFullScreenInit').show().revolution({
        $(once('mtSliderRevolutionFullScreenInit', '.slideshow-fullscreen .rev_slider', context)).show().revolution({
          sliderType:"standard",
          sliderLayout:"fullscreen",
          gridwidth: [1170,970,750,450],
          autoHeight: "on",
          fullScreenOffsetContainer: ".toolbar-tray-horizontal, .mt-count-down",
          delay: drupalSettings.catalogplus.sliderRevolutionFullScreenInit.slideshowFullScreenEffectTime,
          disableProgressBar:'off',
          responsiveLevels:[1199,991,767,480],
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
              enable:bulletsEnable,
              direction:"horizontal",
              space: 5,
              h_align:  drupalSettings.catalogplus.sliderRevolutionFullScreenInit.slideshowFullScreenBulletsPosition,
              v_align:"bottom",
              h_offset: 0,
              v_offset: 20,
              tmp:"",
            },
            tabs: {
              style:"",
              enable:tabsEnable,
              width:410,
              height:95,
              min_width:240,
              wrapper_padding: 0,
              wrapper_opacity:"1",
              tmp:'<div class="tp-tab-content"><span class="tp-tab-title">{{title}}</span></div>',
              visibleAmount: 6,
              hide_onmobile: false,
              hide_onleave: false,
              direction:"horizontal",
              span: true,
              position:"outer-bottom",
              space:0,
              h_align:"left",
              v_align:"bottom",
              h_offset:0,
              v_offset:0
            },
            touch:{
              touchenabled: drupalSettings.catalogplus.sliderRevolutionFullScreenInit.slideshowFullScreenTouchSwipe,
              swipe_treshold:75,
              swipe_min_touches:1,
              drag_block_vertical:false,
              swipe_direction:"horizontal"
            }
          }
        });
      } else {
        //$(context).find('.slideshow-fullscreen .rev_slider').once('mtSliderRevolutionFullScreenInit').show().revolution({
        $(once('mtSliderRevolutionFullScreenInit', '.slideshow-fullscreen .rev_slider', context)).show().revolution({
          sliderType:"standard",
          sliderLayout:"fullscreen",
          gridwidth: [1170,970,750,450],
          autoHeight: "on",
          fullScreenOffsetContainer: ".header-container, .toolbar-tray-horizontal, .mt-count-down",
          delay: drupalSettings.catalogplus.sliderRevolutionFullScreenInit.slideshowFullScreenEffectTime,
          disableProgressBar:'off',
          responsiveLevels:[1199,991,767,480],
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
              enable:bulletsEnable,
              direction:"horizontal",
              space: 5,
              h_align:  drupalSettings.catalogplus.sliderRevolutionFullScreenInit.slideshowFullScreenBulletsPosition,
              v_align:"bottom",
              h_offset: 20,
              v_offset: 20,
              tmp:"",
            },
            tabs: {
              style:"",
              enable:tabsEnable,
              width:410,
              height:95,
              min_width:240,
              wrapper_padding: 0,
              wrapper_opacity:"1",
              tmp:'<div class="tp-tab-content"><span class="tp-tab-title">{{title}}</span></div>',
              visibleAmount: 6,
              hide_onmobile: false,
              hide_onleave: false,
              direction:"horizontal",
              span: true,
              position:"outer-bottom",
              space:0,
              h_align:"left",
              v_align:"bottom",
              h_offset:0,
              v_offset:0
            },
            touch:{
              touchenabled: drupalSettings.catalogplus.sliderRevolutionFullScreenInit.slideshowFullScreenTouchSwipe,
              swipe_treshold:75,
              swipe_min_touches:1,
              drag_block_vertical:false,
              swipe_direction:"horizontal"
            }
          }
        });
      }

      //$(context).find('.transparent-background').once('mtSliderRevolutionFullScreenBG').css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowBackgroundOpacity + ")");
      $(once('mtSliderRevolutionFullScreenBG', '.transparent-background', context)).css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowBackgroundOpacity + ")");
      //$(context).find('.banner').once('mtSliderRevolutionFullScreenBanner').css("padding", "0");
      $(once('mtSliderRevolutionFullScreenBanner', '.banner', context)).css("padding", "0");
      //$(context).find('.tp-caption--transparent-background .tp-caption__title').once('mtSliderRevolutionFullScreenCaptionBG').css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowCaptionOpacity + ")");
      $(once('mtSliderRevolutionFullScreenCaptionBG', '.tp-caption--transparent-background .tp-caption__title', context)).css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowCaptionOpacity + ")");
      //$(context).find('.tp-caption--transparent-background .tp-caption__text').once('mtSliderRevolutionFullScreenCaptionBG').css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowCaptionOpacity + ")");
      $(once('mtSliderRevolutionFullScreenCaptionBG', '.tp-caption--transparent-background .tp-caption__text', context)).css("backgroundColor", "rgba(0,0,0," + drupalSettings.catalogplus.slideshowCaptionOpacity + ")");

    }
  };
})(jQuery, Drupal, drupalSettings, once);
