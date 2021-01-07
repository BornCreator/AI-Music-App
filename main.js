var leftWristX,leftWristY,rightWristX,rightWristY,song1,song2,leftWristScore,rightWristScore,songStatus;
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
    fill('red');
    stroke('black');
    if(leftWristScore>0.05){
        square(leftWristX-200,leftWristY-200,10,10);
        song2.stop();
        if(song1.isPlaying()==true){
            console.log('SONG1 IS PLAYING');
            song1PlayStatus=true;
        }
        if(song1.isPlaying==false){
            console.log("SONG1 ISN'T PLAYING");
            song1PlayStatus=false;
            document.getElementById('song_name').innerHTML='Song: MDK - Press Start (Dex Arson Remix)';
        }
    }
    if(rightWristScore>0.05){
        square(rightWristX-200,rightWristY-200,10,10);
        song1.stop();
        if(song2.isPlaying()==true){
            console.log('SONG2 IS PLAYING');
            song2PlayStatus=true;
        }
        if(song2.isPlaying==false){
            console.log("SONG2 ISN'T PLAYING");
            song2PlayStatus=false;
            document.getElementById('song_name').innerHTML='Song: F-777 Theory Of Everything 3';
        }
    }
    if(song1.isPlaying()==true){
        console.log('SONG1 IS PLAYING');
        song1PlayStatus=true;
    }
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
        leftWristScore=results[0].pose.keypoints[9].score;
        rightWristScore=results[0].pose.keypoints[10].score;
        console.log(leftWristX+'----------'+leftWristY+'----------'+rightWristX+'----------'+rightWristY+' Left wrist score is: '+leftWristScore);
    }
}