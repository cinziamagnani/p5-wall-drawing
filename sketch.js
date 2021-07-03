function setup() {
createCanvas(500, 500);
  line(width/2,0,width/2,height);
  line(0, height/2, width, height/2);
};
function draw() {
    stroke(127);
    strokeWeight(10);
    for (let posX=0; posX < 10; posX++) {
      line(posX * 25, 0, posX * 25, height/2);
    }
};