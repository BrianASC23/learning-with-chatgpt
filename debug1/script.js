let xPos = 0;
let yPos = 0;
let xSpeed = 1;
let ySpeed = 4.5;

function setup() {
    createCanvas(500, 500);
    background(0);
    noStroke();

}
function draw() {
    background(0, 0, 0, 5);

    fill(255, 0, 255);
    ellipse(xPos, yPos, 30, 30);

    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos < 0 || xPos > 485) {
        xSpeed *= -1;
    }
    if (yPos < 0 || yPos > 485) {
        ySpeed *= -1;
    }
}
