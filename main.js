//Variables
var leftWristX='';
var leftWristY='';
var rightWristX='';
var rightWristY='';
var song1='';
var song2='';
var leftWristScore='';
var rightWristScore='';
var song1PlayStatus='';
var song2PlayStatus='';






//Preload
function preload(){
    song1=loadSound('Press Start(Dex Arson Remix).mp3');
    song2=loadSound('dj-nate-TOE 3.mp3');
}







//Setup
function setup(){
    canvas=createCanvas(500,450);
    canvas.position(425,300);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}









//Draw function
function draw(){
    image(video,0,0,500,450);
    fill('red');
    stroke('black');
    if(leftWristScore>0.05){
        square(leftWristX-200,leftWristY-200,10,10);
        if(song1.isPlaying()==true){
            song1PlayStatus=true;
        }
        if(song1.isPlaying()==false){
            song1PlayStatus=false;
            document.getElementById('song_name').innerHTML='Song: MDK - Press Start (Dex Arson Remix)';
            song2.stop();
            song1.play();
        }
    }
    if(rightWristScore>0.05){
        square(rightWristX-200,rightWristY-200,10,10);
        if(song2.isPlaying()==true){
            song2PlayStatus=true;
        }
        if(song2.isPlaying()==false){
            song2PlayStatus=false;
            document.getElementById('song_name').innerHTML='Song: F-777 Theory Of Everything 3';
            song1.stop();
            song2.play();
        }
    }
    if(song1.isPlaying()==true){
        console.log('SONG1 IS PLAYING');
        song1PlayStatus=true;
    }
}





//ModelLoaded
function modelLoaded(){
    console.log("MODEL HAS BEEN LOADED!!!");
}



//gotPoses
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        leftWristScore=results[0].pose.keypoints[9].score;
        rightWristScore=results[0].pose.keypoints[10].score;
        console.log(leftWristX+'----------'+leftWristY+'----------'+rightWristX+'----------'+rightWristY+' Left wrist score is: '+leftWristScore);
    }
}