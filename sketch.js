function setup() {

    createCanvas(400, 400);
    background(100);

    for(var y=0;y <= height; y += 40){
    for(var x=0;x <= width; x += 40) {
        
        fill(500)
        ellipse(x,y, 30, 30);
        fill(0)
        ellipse(x,y, 25, 25);
        fill(500)
        ellipse(x,y, 20, 20);
        fill(0)
        ellipse(x,y, 15, 15);
        fill(500)
        ellipse(x,y, 10, 10);
        noStroke()
        rect(x,y, 15, 2);

    }   
}
}

function draw() {

}