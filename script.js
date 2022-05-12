const keybord = document.addEventListener('keydown', (event) => {
    if(event.key === "ArrowDown" ){
        boxTop +=8
    }else if(event.key === "ArrowUp"){
        boxTop -=8
    }else if(event.key === "ArrowRight"){
        boxLeft +=8
    }else if(event.key === "ArrowLeft"){
        boxLeft -=8
    }
    document.getElementById("box").style.top = boxTop + "px"
    document.getElementById("box").style.left = boxLeft + "px"});

const key = document.addEventListener('keydown', (event) =>{
        if(event.key === "ArrowDown" ){
            rotate =  90;
        }else if(event.key === "ArrowUp"){
            rotate =  270;
        }else if(event.key === "ArrowRight"){
            rotate =  360;
        }else if(event.key === "ArrowLeft"){
            rotate = 180 ;
        }								
	document.getElementById("box").style.transform = "rotate("+rotate+"deg)"});   

const body = document.querySelector("body")

const div = document.createElement("div")
div.id = "box"
body.appendChild(div)

const img1 = document.createElement("img")
img1.src = "https://i.pinimg.com/originals/4d/34/4e/4d344e9cf5f72ee3da9e1cc87a92d3f3.gif"
body.appendChild(img1)
img1.id = "img1"

const img2 = document.createElement("img")
img2.src = "https://i.pinimg.com/originals/52/a3/3c/52a33c10ae0c117156dd2807a4f324da.png"
body.appendChild(img2)
img2.id = "img2"

let boxTop = 440;
let boxLeft = 290;
let rotate = 0; 
				
	
		

