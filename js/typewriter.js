var messageArray = [" Hi! I'm  John Patrick Pahunang your Junior Front End Developer "];
var textPosition = 0;
var speed = 45;





typewriter = () => {
  document.querySelector("#message").innerHTML = messageArray[0].substring(0,textPosition) + "<span>\u25ae</span>";

  if (textPosition++ != messageArray[0].length)
    setTimeout(typewriter, speed);

}

window.addEventListener("load", typewriter)