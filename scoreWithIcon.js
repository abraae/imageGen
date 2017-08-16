function draw(req) {
  var Canvas = require('canvas'),
	  Image = Canvas.Image,
	  canvas = new Canvas(104, 64), // Aotal assessment image is half this size, we're high res. for retina display
	  ctx = canvas.getContext('2d');

//  var canvas = document.getElementById('canvas');
//  var ctx = canvas.getContext('2d');

  // grab details from query parameters
  var score = req.query.score;
  if (score == null || score < 0 || score > 100)
	  score = 0;
  else
	  score = Math.round(score);
  var label = req.query.label != null ? req.query.label  : '??';
  
  var iconBlockWidth = 30;
  var fontSize = 20;
  
  // draw the green and red bars, to the right of the icon block, with green == score
  var width = canvas.width - iconBlockWidth;
  var midPoint = width * score / 100;
  ctx.fillStyle = 'rgb(102, 255, 102)';
  ctx.fillRect(iconBlockWidth, 0, midPoint, canvas.height);
  ctx.fillStyle = 'rgb(255, 153, 153)';
  ctx.fillRect(iconBlockWidth + midPoint, 0, width - midPoint, canvas.height);

  ctx.textBaseline = 'middle';  // vertically center text

  // render the score as text
  ctx.textAlign = 'center'; 
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.font = fontSize + 'px Courier New';
  ctx.fillText(score + '%', canvas.width / 2, canvas.height / 2);

  // render label as text within the icon block
  ctx.textAlign = 'left'; 
  ctx.fillStyle = 'rgb(20, 90, 160)';
  ctx.fillText(label, 0, canvas.height / 2);
  
  return canvas;
}

module.exports = draw;
