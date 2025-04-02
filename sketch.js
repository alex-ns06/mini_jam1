
  x = 200
  y = 200
  xp = 100
  yp = 100
  azul = "rgb(151,151,255)"
  laranja = "rgb(255,179,40)"


  portais =[];


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  function criarPersonagem(){ 
    fill("rgb(191,149,71)")
    circle(x,y,23)
    
    fill("rgb(231,158,26)")
    rect(x-11,y+12,23,40)
    
  }
  function criarPortal(cor,xp,yp){
    fill(cor)
    ellipse(xp,yp,50,95)
    id = portais.length
    portais.push({
      id:id,
      x:xp,
      y:yp
    })
    
  }
  criarPersonagem()
  criarPortal(azul,xp,yp)
  criarPortal(laranja,xp+200,yp+400)
  function Teleportar(){
    portais.forEach((portal)=>{
    if(x < portal.x + 15 && x> portal.x -15){
      if(y < portal.y+30 && y> portal.y-75){
        if(portal.id == 0){
          console.log("azul")
          x = portais[0].x
          y = portais[0].y
        }
        else if(portal.id == 1){
          console.log("laranja")
          x = portais[0].x
          y = portais[0].y
        }
        
        }
       }
    });
  }
  s = deltaTime / 1000;
  let vel = 250
  x = constrain(x, 25, width - 25);
  y = constrain(y, 25, height - 25);
  
  if(keyIsDown(RIGHT_ARROW)){
    x += vel * s;    
    Teleportar()
  }else if(keyIsDown(LEFT_ARROW)){
    x -= vel * s;
    Teleportar()
  }
  if(keyIsDown(UP_ARROW)){
    y -= vel * s;   
    Teleportar()
  }else if(keyIsDown(DOWN_ARROW)){
    y += vel * s;  
    Teleportar()
    
  }
  

  
  
  
  
}

