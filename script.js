// Navbar Active
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Light & Dark Mode
const lightBtn = document.getElementById("lightModeBtn");
const darkBtn = document.getElementById("darkModeBtn");
lightBtn.addEventListener("click", () => document.body.classList.add("light-mode"));
darkBtn.addEventListener("click", () => document.body.classList.remove("light-mode"));

// Circle values (0%)
document.querySelectorAll('.circle').forEach(circle => {
  let percent = circle.getAttribute('data-percent');
  circle.style.setProperty('--angle', `${percent * 3.6}deg`);
  circle.querySelector('.number').innerText = `${percent}%`;
});

// Star Background
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

const stars = [];
for(let i=0;i<200;i++){
  stars.push({x: Math.random()*w,y: Math.random()*h,radius: Math.random()*1.5,alpha: Math.random(),delta: Math.random()*0.02});
}

function animate(){
  ctx.clearRect(0,0,w,h);
  stars.forEach(s=>{
    s.alpha += s.delta;
    if(s.alpha<=0||s.alpha>=1) s.delta*=-1;
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.radius,0,Math.PI*2);
    ctx.fillStyle=`rgba(255,255,255,${s.alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
