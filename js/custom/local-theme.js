jQuery(document).ready(function($) {
  $("#display-advanced-search").click(function() {
    $(".form-item-search-api-fulltext-1").toggle();
    $(".form-item-search-api-fulltext-2").toggle();
    
    var searchType = $("#display-advanced-search").text();
    
    if(searchType === 'Advanced Search') {
      $("#display-advanced-search").text('Simple Search');
    } else {
      $("#display-advanced-search").text('Advanced Search');
    }
  });
});