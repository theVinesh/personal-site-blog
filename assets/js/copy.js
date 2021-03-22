function copyURI(event) {
    event.preventDefault();
    navigator.clipboard.writeText(event.target.getAttribute('href'))
    .then(() => showTooltip("Copied!"), () => showTooltip("Couldn't copy"));
}

function showTooltip(message){
  var tooltip = document.getElementById("copy-tooltip");
  tooltip.innerHTML = message;
  tooltip.style.visibility = "visible";
  setTimeout(() => tooltip.style.visibility = "hidden", 800);
}