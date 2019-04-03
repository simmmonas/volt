$(document).ready(function() {
  let controller = new ScrollMagic.Controller();

  let phonemove = new ScrollMagic.Scene({
    triggerElement: "#phone"
  })
    .setClassToggle("#phone", "fade-right")
    .addTo(controller);
});
