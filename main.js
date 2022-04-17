var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        blockImg = Img;
        blockImg.scaleToWidth(700);
        blockImg.scaleToHeight(510);
        blockImg.set({
            top:0, 
            left:0
        });
        canvas.add(blockImg);
    })
	
}

function playSound(){
	x.play();
}
