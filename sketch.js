function setup() {
createCanvas(500, 500);
  line(width/2,0,width/2,height);
  line(0, height/2, width, height/2);
};
function draw() {
    stroke(127);
    strokeWeight(10);
    for (let posX=0; posX < 10; posX++) {
      line(posX * 25 + 10, 0, posX * 25 + 10, height/2);
    }
    noStroke();
    fill(255, 215, 0);
    for(let positionX = 0; positionX < 10; positionX++) {
        for(let positionY = 0; positionY  < 10; positionY ++) {
            if(positionX % 2 === 0) {
                circle(width/2 + positionX*25 + 10, positionY *25, 10);
            } else if(positionX % 2 === 1) {
                circle(width/2 + positionX*25 + 10, positionY *25 + 10, 10);
            }
  }
}
};