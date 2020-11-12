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
});