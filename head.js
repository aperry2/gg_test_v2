let cvs;

let c = [];

let buff;

let o;

function preload() {
  o = loadModel('head.obj');
}

function setup() {
  cvs = createCanvas(640, 400, WEBGL);
  cvs.parent("sketch-container");
  buff = createGraphics(640, 400);


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
  texture(buff);
  plane(width, height);

  ambientLight(60, 60, 60);


  push();
  translate(0, 0, 100);
  rotateX(frameCount/1000);
  rotateY(frameCount/100);
  rotateZ(radians(180));

  noStroke();
  normalMaterial();
  scale(5);
  model(o);
  pop();
}
