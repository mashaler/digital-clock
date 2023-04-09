"use strict";

var hourEl = document.getElementById("hour");
var minutesEl = document.getElementById("minutes");
var secondEl = document.getElementById("seconds");
var ampmEl = document.getElementById("ampm");

function updateClock() {
  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondEl.innerText = s;
  ampmEl, innerText = ampm;
  setTimeout(function () {
    updateClock();
  }, 1000);
}

updateClock();
//# sourceMappingURL=index.dev.js.map
