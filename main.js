var leftWristX,leftWristY,rightWristX,rightWristY,song1,song2;
function preload(){
    song1=loadSound('dj-nate-TOE 3.mp3');
    song2=loadSound('Press Start(Dex Arson Remix).mp3');
}
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
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log(leftWristX+'----------'+leftWristY+'----------'+rightWristX+'----------'+rightWristY);
    }
}