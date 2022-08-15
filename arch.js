let cvs;

let c = [];

let buff;

let column;

let font;

let x = 80;

function preload() {
  column = loadModel('column.obj');
  font = loadFont("C64.ttf");
}

function setup() {
  cvs = createCanvas(640, 400, WEBGL);
  cvs.parent("sketch-container");
  buff = createGraphics(640, 400);

  textFont(font);

  c[0] = color("#9bb0ff");
  c[1] = color("#aabfff");
  c[2] = color("#cad7ff");
  c[3] = color("#f8f7ff");
  c[4] = color("#fff4ea");
  c[5] = color("#ffd2a1");
  c[6] = color("#ffcc6f");

  for (let i = 0; i < 10000; i++) {
    buff.fill(random(c));
    buff.noStroke();
    buff.circle(random(width), random(height), random(0.1, 0.4));
  }

  for (let i = 0; i < 5000; i++) {
    buff.fill(random(c));
    buff.noStroke();
    buff.circle(random(width), random(height), random(0.6, 1));
  }

  for (let i = 0; i < 1000; i++) {
    buff.fill(random(c));
    buff.noStroke();
    buff.circle(random(width), random(height), random(1, 3));
  }

  for (let i = 0; i < 3; i++) {
    buff.fill(random(c));
    buff.noStroke();
    buff.circle(random(width), random(height), random(4, 5));
  }
}

function draw() {
  background(0);

  push();
    texture(buff);
    let factor = 5;
    translate(0, 0, -(factor * 90));
    scale(factor);
    plane(width, height);
  pop();

  x = x + 0.5;

  if (x >= 360) {
    x = 0;
  }

  let colorIndex = int(map(x, 0, 360, 0, c.length));
  console.log(colorIndex);

  push();
    fill(c[colorIndex]);
    textAlign(RIGHT, CENTER);
    textSize(20);
    text(int(x) + "deg", 60, 150);
    text("#" + hex([red(c[colorIndex], green(c[colorIndex]), blue(c[colorIndex]),)], 6), 60, 180);
  pop();

  let locX = cos(radians(x)) * 100;
  let locZ = -90 + (sin(radians(x)) * 100);

  ambientLight(30, 30, 30);
  directionalLight(c[5], locX, 0, locZ);
  noStroke();
  drawColumns();
}

function drawColumns() {
  for (let i = 0; i < 7; i++) {
    let zoff = 90 - (i * 90);
    let xoff = 160;
    push();
    translate(xoff, -130, zoff);
    scale(19);
    fill(c[i]);
    model(column);
    pop();

    push();
    translate(-xoff, -130, zoff);
    scale(19);
    fill(c[i]);
    model(column);
    pop();
  }
}
