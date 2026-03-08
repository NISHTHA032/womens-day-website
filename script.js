function celebrate(){

document.getElementById("message").innerHTML =
"✨ Happy Women's Day ✨";

let container = document.getElementById("flowers");

for(let i=0;i<25;i++){

let flower = document.createElement("div");

flower.classList.add("flower");

flower.innerHTML = ["🌸","💖","🌺","🌷"][Math.floor(Math.random()*4)];

flower.style.left = Math.random()*100 + "%";

flower.style.animationDuration =
(3 + Math.random()*2) + "s";

container.appendChild(flower);

setTimeout(()=>{
flower.remove();
},4000);

}

}