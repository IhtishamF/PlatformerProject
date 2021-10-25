var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;



//create empty array
var images = [];
images.length = 8;


for(var i = 1 ; i < images.length ; i++){
    images[i] = new Image();
    images[i].src = 'sprite/Walk (' + i.toString() + ').png';
    b-=20;
}


var i = 1;
var x = 150;
var b = 90;
document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

if(b<=50){
	b=90;

}
    
    function keyDownHandler(e) {
        if(e.code  == "KeyD" && x<canvas.width-100) {
            rightPressed = true;
           x+=10;
            
            
        }
        else if(e.code == 'KeyA' && x>0) {
            leftPressed = true;
        	x-= 10;
        	
        }
    }
    function keyUpHandler(e) {
        if(e.code  == "KeyD") {
            rightPressed = false;
        }
        else if(e.code == 'KeyA') {
            leftPressed = false;
        }
    }

function draw(){
    c.clearRect(0,0, canvas.width, canvas.height);
    c.beginPath();
    i++;
    if( i >= 8){
      i = 1;
    }
    if(leftPressed==true || rightPressed==true){
    c.drawImage(images[i],x,350,100,100);
}
    else {
    	c.drawImage(images[3],x,350,100,100);
    }
    c.closePath();
}

setInterval(draw, b)



