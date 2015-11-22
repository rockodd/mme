window.onload = function () {
"use strict";
var secCounter = new CycleCounter();
var minCounter = new CycleCounter();
var hCounter = new CycleCounter();
var onTimeChange = function(){
var hours = hCounter.getValue();
var minutes = minCounter.getValue();
var seconds = secCounter.getValue();
drawAnalogTime(hours, minutes, seconds);
drawDigitalTime(hours, minutes, seconds);
}
try {
secCounter.init(0, 59, 0, onTimeChange, minCounter.addOne);
minCounter.init(0, 59, 0, null, hCounter.addOne);
hCounter.init(0, 24, 0, null, null);
} catch(e){
console.error(e.name + " " + e.message);
}
setInterval(secCounter.addOne,100);
};
function drawDigitalTime(hrs, min, sec) {
var cInput = document.getElementById("clockinput");
hrs = (hrs<10)? ("0"+hrs.toString()) : hrs;
min = (min<10)? ("0"+min.toString()) : min;
sec = (sec<10)? ("0"+sec.toString()) : sec;
cInput.value = hrs + ":" + min + ":" + sec;
}
function drawAnalogTime(hrs, min, sec) {
"use strict";
var canvas = document.getElementById('clockcanvas');
if (canvas.getContext) {
var ctx2d=canvas.getContext('2d');
ctx2d.clearRect(0,0,300,300);
ctx2d.save();
ctx2d.translate(150,150);
var angle,
sinAngle,
cosAngle,
xStart,
yStart,
xEnd,
yEnd;
for (var i=1;i<=60;i++) {
angle=Math.PI/30*i;
sinAngle=Math.sin(angle);
cosAngle=Math.cos(angle);
//If modulus of divide by 5 is zero then draw an hour marker/numeral
if (i % 5 == 0) {
ctx2d.lineWidth=5;
xStart=sinAngle*100;
yStart=cosAngle*-100;
xEnd=sinAngle*120;
yEnd=cosAngle*-120;
} else {
ctx2d.lineWidth=2;
xStart=sinAngle*110;
yStart=cosAngle*110;
xEnd=sinAngle*120;
yEnd=cosAngle*120;
}
ctx2d.beginPath();
ctx2d.moveTo(xStart,yStart);
ctx2d.lineTo(xEnd,yEnd);
ctx2d.stroke();
}
ctx2d.lineWidth=6;
ctx2d.save();
//Draw hour hand by rotating the canvas
ctx2d.rotate(Math.PI/6*(hrs+(min/60)+(sec/3600)));
ctx2d.beginPath();
ctx2d.moveTo(0,10);
ctx2d.lineTo(0,-60);
ctx2d.stroke();
ctx2d.restore();
ctx2d.save();
//Draw minute hand by rotating the canvas
ctx2d.rotate(Math.PI/30*(min+(sec/60)));
ctx2d.beginPath();
ctx2d.moveTo(0,20);
ctx2d.lineTo(0,-110);
ctx2d.stroke();
ctx2d.restore();
ctx2d.save();
//Draw second hand by rotating the canvas
ctx2d.rotate(Math.PI/30*sec);
ctx2d.strokeStyle="#33E";
ctx2d.beginPath();
ctx2d.moveTo(0,20);
ctx2d.lineTo(0,-110);
ctx2d.stroke();
ctx2d.restore();
ctx2d.restore(); // go to the state before tranlation
}
}