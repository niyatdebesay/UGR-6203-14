const cards = document.querySelector(".firststate");
const container = document.querySelector(".container");
container.addEventListener("mousemove" , (e)=>{
    console.log(e.pageX);
    let xAxis = (window.innerWidth/2 - e.pageX)/10;
    let yAxis = (window.innerHeight/2 - e.pageY)/10;
    cards.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    console.log(e.pageX, e.pageY)
});

