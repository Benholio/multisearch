function loadOverlay(){
  $crxAppOverlay = $(['<div id="crx-sf-multisearch">',
    '<div id="crx-sf-multisearch-inner">',
    '<iframe src="' + chrome.runtime.getURL('src/browser_action/browser_action.html') + '"  scrolling="no" width="100%" height="100%" border="0"></iframe>',
    '</div>', 
    '</div>'].join('')).appendTo('body');
}

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.text && (msg.text == "toggle_overlay")) {
    if($('#crx-sf-multisearch').length === 0) loadOverlay();
    $('#crx-sf-multisearch-inner').toggle(); 
  }

  if (msg.text && (msg.text == "resize")) {
    var $iframe = $('#crx-sf-multisearch-inner iframe');
    $('#crx-sf-multisearch-inner').animate({ 'height': msg.height + 'px' }, 200);
  }

});