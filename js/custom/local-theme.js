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
  
  $(".deactivate-link").removeAttr("href");
});