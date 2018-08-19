let myVar = setInterval(myTimer, 1000);
function myTimer() {
  let d = new Date();

  let timer = d.toTimeString().replace(/[^a-z0-9+]/g, "");

  let converter = timer.slice(0, 6);

  document.body.style.backgroundColor = "#" + converter;
}
