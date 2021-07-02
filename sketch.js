var box;
function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 30, 30);
  box.shapeColor = "white";
}

function draw() {
  background(30);
  if (keyDown("down")) {
    background("red");
  }

  if (keyDown("up")) {
    background("yellow");
  }

  if (keyDown("right")) {
    background("green");
  }

  if (keyDown("left")) {
    background("pink");
  }
  drawSprites();
}
