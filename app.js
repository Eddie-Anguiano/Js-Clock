var document, console;

window.setInterval(function () {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var secondHand = document.querySelector(".second");
  var minuteHand = document.querySelector(".minute");
  var hourHand = document.querySelector(".hour");

  secondHand.style.transform = `rotate(${seconds * 6 - 90}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6 - 90}deg)`;
  hourHand.style.transform = `rotate(${hours * 30 - 90}deg)`;

  console.log("actual time:", hours, minutes, seconds, "clock time:", hours);
}, 1000);

//commit two
//commit three
//commit four
//commit six
