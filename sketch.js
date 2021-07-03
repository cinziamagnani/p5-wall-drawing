function setup() {
createCanvas(500, 500);
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

fill('red');
for (let posiX = 0; posiX < 10; posiX++) {
  for (let posiY = 0; posiY < 5; posiY++) {
    if(posiX % 2 === 0) {
      square(25 * posiX,height/2 + posiY *50,25);
    } else if (posiX % 2 === 1) {
      square(25 * posiX,height/2 + posiY *50 + 25,25);
    }
    
  }
}

stroke(0,0,255);
strokeWeight(10);
for (let i = 0; i < 10; i++) {
    line(width/2, height - i*25,width + i*25, height);
    line(width/2 + i*25, height/2, width, height - i*25);
  }

  troke(0);
 line(width/2,0,width/2,height);
  line(0, height/2, width, height/2);
  line(0,0,0,500);
  line(0,0,500,0);
  line(500,0,500,500);
  line(0,500,500,500);
};