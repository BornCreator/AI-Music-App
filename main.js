function setup(){
    canvas=createCanvas(500,450);
    canvas.position(425,300);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,500,450);
}
function modelLoaded(){
    console.log("MODEL HAS BEEN LOADED!!!");
}
function gotPoses(results){
    console.log(results);
}