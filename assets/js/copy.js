function copyURI(event) {
    event.preventDefault();
    navigator.clipboard.writeText(event.target.getAttribute('href')).then(() => {
      var tooltip = document.getElementById("copy-tooltip");
      tooltip.innerHTML = "Copied!";
    }, () => {
      /* clipboard write failed */
    });
}

function resetTooltip(event) {
  var tooltip = document.getElementById("copy-tooltip");
  tooltip.innerHTML = "Copy";
}