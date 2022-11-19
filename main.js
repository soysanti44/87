 canvas =new fabric.Canvas("Canvas")

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img){
	   dragon_ball =Img;
	   dragon_ball.scaleToWidth(block_image_width);
	   dragon_ball.scaleToHeight(block_image_height);
	   dragon_ball.set({
		top:block_y,
		left:block_x
	   });
	   canvas.add(dragon_ball);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // añade los códigos de las teclas
	{     new_image("bills.webp");
	  console.log("r")
		// sube al ranger rojo
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("Son_Goku.webp");
		console.log("g")
		// sube al ranger verde
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("vegeta_u7.webp");
		console.log("y")
		// sube al ranger amarillo
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("wiss.webp");
		console.log("p")
		// sube al ranger rosa
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("zeno_sama.webp");
		console.log("b")
	// sube al ranger azul
	}
	
}

