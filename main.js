function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(300,300);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,170,120,300,260);

    

    fill("blue");
    stroke("blue");
    rect(120,50,400,20);

    fill("blue");
    stroke("blue");
    rect(100,50,20,350);

    fill("blue");
    stroke("blue");
    rect(540,50,20,350);


    fill("blue");
    stroke("blue");
    rect(120,410,400,20);
    
    fill("red");
    stroke("red");
    circle(550,70,100);

    fill("red");
    stroke("red");
    circle(100,70,100);

    fill("red");
    stroke("red");
    circle(100,410,100);

    fill("red");
    stroke("red");
    circle(550,410,100);
}
function take_snapshot(){
    save("p5.png");
}