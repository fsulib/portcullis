jQuery(document).ready(function($) {
  $(".display-advanced-search").click(function() {
    $(".form-item-search-api-fulltext-1").toggle();
    $(".form-item-search-api-fulltext-2").toggle();
    
    var searchType = $(".display-advanced-search").text();
    
    if(searchType === 'Go to Advanced Search') {
      $(".display-advanced-search").text('Go to Simple Search');
    } else {
      $(".display-advanced-search").text('Go to Advanced Search');
    }
  });

  if($("input[name=search_api_fulltext_1]").val() || $("input[name=search_api_fulltext_2]").val()) {
    $(".form-item-search-api-fulltext-1").show();
    $(".form-item-search-api-fulltext-2").show();
  }

  $(".deactivate-link").removeAttr("href");
  
  // Change http to https in production
  var ldbase_download_url = $(".ldbase-file-download").attr('href');
  const parsed_url = new URL(ldbase_download_url);
  if(parsed_url.hostname === 'ldbase.org') {
    parsed_url.protocol = 'https';
    $(".ldbase-file-download").attr('href', parsed_url.href);
  }

});