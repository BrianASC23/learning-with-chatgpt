// Positions of centers of circles
let xPos1 = 100;
let yPos1 = 100;
let xPos2 = 300;
let yPos2 = 300;
let r = 0;
let g = 255;
let b = 0;



function setup() {
    createCanvas(400, 400);

    stroke(0, 255, 255);
}

function draw() {
    background(0);

    // set circles' color to green
    fill(r, g, b);

    // draw circles
    ellipse(xPos1, yPos1, 100, 100);
    ellipse(xPos2, yPos2, 100, 100);
}

function mouseClicked() {
    // update circles' positions to random points
    xPos1 = random(50, 350);
    yPos1 = random(50, 350);
    xPos2 = random(50, 350);
    yPos2 = random(50, 350);

    let distance = dist(xPos1, yPos1, xPos2, yPos2);
    

    if(distance <= 100){
        r = 255;
        g = 0;
        b = 0;
    } else if(distance > 100){
        r = 0;
        g = 255;
        b = 0;
    }
}