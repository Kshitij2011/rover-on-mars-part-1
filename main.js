canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_x = 20 ;
rover_y = 20;

background_img = "mars.jpg";
rover_img = "rover.png";

function show_everything(){
     background_Img_Tag = new Image();
     background_Img_Tag.onload = upload_background;
     background_Img_Tag.src = background_img;
     
     rover_Img_Tag = new Image();
     rover_Img_Tag.onload = upload_rover;
     rover_Img_Tag.src = rover_img;
}

function upload_background(){
    ctx.drawImage(background_Img_Tag, 0, 0, canvas.width, canvas.height );
}

function upload_rover(){
    ctx.drawImage(rover_Img_Tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", rover_down);

function rover_down(e){
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed=='37'){
    console.log("left");
}

if(keyPressed=='38'){
    console.log("up");
}

if(keyPressed=='39'){
    console.log("right");
}

if(keyPressed=='40'){
    console.log("down");
}
}

