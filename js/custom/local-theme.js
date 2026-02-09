(function ($, Drupal, drupalSettings, once) {


  Drupal.behaviors.portcullis = {
    attach: function (context, settings) {
      //$('a.display-advanced-search', context).once('toggle-search-form').each(function () {
      $(once('toggle-search-form', 'a.display-advanced-search', context)).each(function () {
        var toggleLink = $('a.display-advanced-search');

        toggleLink.on('click', function () {
          $(".form-item-search-api-fulltext-1").toggle();
          $(".form-item-search-api-fulltext-2").toggle();

          var searchType = $('a.display-advanced-search').text();

          if (searchType === 'Go to Advanced Search') {
            $('a.display-advanced-search').text('Go to Simple Search');
          } else {
            $('a.display-advanced-search').text('Go to Advanced Search');
          }
        });

      });

      // after advanced search, show advanced fields and change link to new search
      if ($("input[name=search_api_fulltext_1]").val() || $("input[name=search_api_fulltext_2]").val()) {
        var newSearchUrl = "/search?search_api_fulltext=";
        var toggleLink = $("a.display-advanced-search");
        $(".form-item-search-api-fulltext-1").show();
        $(".form-item-search-api-fulltext-2").show();
        toggleLink.text('Start New Search');
        toggleLink.attr('href', newSearchUrl);
        toggleLink.off('click');
      }
    }
  };

  $(".deactivate-link").removeAttr("href");

  // Change http to https in production
  var ldbase_download_url = document.getElementsByClassName("ldbase-file-download")[0];
  if(typeof ldbase_download_url === 'undefined' ) {
    return;
  } else {
    var parsed_url = new URL(ldbase_download_url.href);
    if (parsed_url.hostname === 'ldbase.org' || parsed_url.hostname === 'test.ldbase.org') {
      parsed_url.protocol = 'https';
      $(".ldbase-file-download").attr('href', parsed_url.href);
    }
  }


})(jQuery, Drupal, drupalSettings, once);
