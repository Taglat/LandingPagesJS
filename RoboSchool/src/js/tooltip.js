export function toggleTooltip() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.classList.toggle("visible");
}

document.addEventListener("click", function(event) {
  var tooltip = document.getElementById("myTooltip");
  var tooltipButton = document.querySelector('.profits-card__tooltip');
  if (!tooltipButton.contains(event.target) && !tooltip.contains(event.target)) {
    tooltip.classList.remove("visible");
  }
});
