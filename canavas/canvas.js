const canvas  = document.getElementById('canvas');
const ctx     = canvas.getContext('2d');
const width   = window.innerWidth;
const height  = window.innerHeight;
canvas.width  = width -10;
canvas.height = height -10;
var circle = [];

function Circle (x,y,dx,dy,radius,color){
  this.x      = x;
  this.y      = y;
  this.dx     = dx;
  this.dy     = dy;
  this.radius = radius;
  this.color  = color;
  this.state  = Math.floor(Math.random() * 2) + 1;
  
  this.draw = ()=>{
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);  
    if (this.state == 1) {
      ctx.fillStyle = this.color;
      ctx.fill();
    }else{
      ctx.strokeStyle = this.color;
      ctx.stroke();
    }
      
  }
  this.update = ()=>{
    if(this.x + this.radius > width || this.x - this.radius < 0){
      this.dx = -this.dx;
    }
    if(this.y + this.radius > height || this.y - radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    
    this.draw();
  }
  return {
    draw : this.draw,
    update : this.update
  }
}
for (var i=0;i<50;i++){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r},${g},${b})`; 
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  let speed = (Math.floor(Math.random() * 8) + 1) * plusOrMinus;
  let radius = Math.random() * 30;
  circle.push(new Circle(Math.random() * width ,Math.random() * height , speed,speed, radius,color))
}




function animate(){
  requestAnimationFrame(animate)
  ctx.clearRect(0,0,width,height);
  circle.forEach(c => {
    c.update();
});
  
  
  
  
  
  
}

  
  
  

  