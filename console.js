var waitTime = 950;
var goBack = function() {
    history.back();
    setTimeout(clickLink, waitTime);
}
var clickLink = function() {
  var $unReadItem = jQuery('.yj-inbox-unread-list .yj-inbox-list--messages li:first a');
  if ($unReadItem.length) {
    $unReadItem.click();
    setTimeout(goBack, waitTime);
  }
  else 
  {
    var $moreBtn = jQuery('#moreButton button');
    if ($moreBtn.length) {
      $moreBtn.click();
      setTimeout(clickLink, waitTime);
    }
  }
}
clickLink();