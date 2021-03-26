function copyURI(event) {
  event.preventDefault();
  
  var clipboard = new ClipboardJS('.copy-button', {
    text: function(trigger) {
        return trigger.getAttribute('href');
    }
});

  clipboard.on('success', function (e) {
    showCopyTooltip('Copied!')
  });

  clipboard.on('error', function(e) {
    showCopyTooltip('Couldn\'t copy')
});
}

function showCopyTooltip(message) {
  var tooltip = document.getElementById("copy-tooltip");
  tooltip.innerHTML = message;
  tooltip.style.visibility = "visible";
}

function hideCopyToolTip() {
  var tooltip = document.getElementById("copy-tooltip");
  tooltip.style.visibility = "hidden";
}