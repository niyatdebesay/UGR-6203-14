const cards = document.querySelector(".firststate");
const container = document.querySelector(".container");
container.addEventListener("mousemove" , (e)=>{
    console.log(e.pageX);
    let xAxis = (window.innerWidth/2 - e.pageX)/10;
    let yAxis = (window.innerHeight/2 - e.pageY)/10;
    cards.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    console.log(e.pageX, e.pageY)
});
const text = document.querySelector("h2");
const strText = text.textContent;
const splittext = strText.split("")
text.textContent = ""
console.log(splittext);
for (let i = 0 ; i < splittext.length;i++){
    text.innerHTML+="<span>"+ splittext[i] + "</span>"
}
let char = 0;
let timer = setInterval(onTick,50);
function onTick(){
    const span = text.querySelectorAll("span"[char])
    span.classList.add('fade');
    char++
}
if (char ===splittext.length){
    complete();
    return;
}
function complete(){
    clearInterval(timer);
    timer = null;
}