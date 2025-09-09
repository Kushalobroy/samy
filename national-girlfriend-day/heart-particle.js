const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth; canvas.height = innerHeight;

const hearts = [];
function Heart() {
  this.x = Math.random()*canvas.width;
  this.y = canvas.height + Math.random()*100;
  this.size = Math.random()*12+5;
  this.speed = Math.random()*1 + 0.5;
}
Heart.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,192,203,0.7)';
  ctx.moveTo(this.x, this.y);
  ctx.bezierCurveTo(this.x - this.size, this.y - this.size, this.x - this.size*2, this.y + this.size, this.x, this.y + this.size*2);
  ctx.bezierCurveTo(this.x + this.size*2, this.y + this.size, this.x + this.size, this.y - this.size, this.x, this.y);
  ctx.fill();
};
Heart.prototype.update = function() {
  this.y -= this.speed;
  if (this.y < -50) {
    this.y = canvas.height + 50;
    this.x = Math.random()*canvas.width;
  }
  this.draw();
};
function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  while (hearts.length < 100) hearts.push(new Heart());
  hearts.forEach(h => h.update());
  requestAnimationFrame(animate);
}
animate();
