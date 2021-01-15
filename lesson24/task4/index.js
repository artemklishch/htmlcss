const canvasElem = document.querySelector("#canvas_elem");

const ctx = canvasElem.getContext("2d");
// // ctx.fillRect(x,y,xSize,eSize)  прямоугольник
// ctx.fillRect(0, 0, 100, 100);
// ctx.fillStyle = "#0000ff";
// ctx.fillRect(100, 100, 200, 200);

// //линии
// ctx.beginPath();
// ctx.moveTo(300, 300);
// ctx.lineTo(400, 400);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.strokeStyle = "#ff0000";
// ctx.moveTo(320, 300);
// ctx.lineTo(400, 400);
// ctx.stroke();
// ctx.closePath();

// // текст
// ctx.font = "30px Arial";
// ctx.textAlign = "right";
// ctx.textBaseline = "top";
// ctx.fillText("Text", 300, 400);
// ctx.fillRect(300, 400, 2, 2);

const cancasPlotWidth = canvasElem.clientWidth;
const cancasPlotHeight = canvasElem.clientHeight;
const scaleX = 30;
const scaleY = 30;
const xAxis = Math.round(cancasPlotWidth / scaleX / 2) * scaleX;
const yAxis = Math.round(cancasPlotHeight / scaleY / 2) * scaleY;

ctx.beginPath();
ctx.strokeStyle = "#f5f0e8";
for (let i = 0; i <= cancasPlotWidth; i += scaleX) {
  ctx.moveTo(i, 0);
  ctx.lineTo(i, cancasPlotHeight);
  ctx.fillText((i - xAxis) / scaleX, i, yAxis);
}
for (let i = 0; i <= cancasPlotHeight; i += scaleY) {
  ctx.moveTo(0, i);
  ctx.lineTo(cancasPlotWidth, i);
  ctx.fillText((yAxis - i) / scaleY, xAxis, i);
}
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "#000";
ctx.moveTo(xAxis, 0);
ctx.lineTo(xAxis, cancasPlotHeight);
ctx.moveTo(0, yAxis);
ctx.lineTo(cancasPlotWidth, yAxis);
ctx.stroke();
ctx.closePath();
