const canvas  = document.getElementById('canvas');
const ctx     = canvas.getContext('2d');
const width   = window.innerWidth;
const height  = window.innerHeight;
canvas.width  = width -10;
canvas.height = height -10;
var raf;
var circle = [];

function Circle (x,y,vx,vy,radius,color){
  this.x       = x;
  this.y       = y;
  this.vx      = vx;
  this.vy      = vy;
  this.radius  = radius;
  this.color   = color;
  this.state   = Math.floor(Math.random() * 2) + 1;
  this.gravity = 1 * this.radius/8; 
  
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
    this.x  += this.vx;
    this.y  += this.vy;

    if(this.x + this.radius > canvas.width  || this.x - this.radius < 0){
      this.vx = -this.vx;
    }
    if(this.y + this.radius > canvas.height || this.y - radius < 0){
      this.vy *= -0.6;
      this.vx *= 0.95;
      this.y = canvas.height - this.radius;
    }
    
    this.vy += this.gravity;
    this.draw();
  }
  return {
    draw : this.draw,
    update : this.update
  }
}
for (var i=0;i<200;i++){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r},${g},${b})`; 
  let speed = Math.floor(Math.random() * 8) + 1;
  let radius = Math.floor(Math.random() * 30) + 1;
  circle.push(new Circle(Math.floor(Math.random() * canvas.width) +10 ,30, speed,speed, radius,color))
}




function animate(){
  ref = requestAnimationFrame(animate)
  ctx.clearRect(0,0,width,height);
  circle.forEach(c => {
    c.update();
});
}
  
