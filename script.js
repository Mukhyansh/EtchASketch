const sdiv=document.createElement("div");
sdiv.style.display="flex";
sdiv.id="sd2";
document.body.appendChild(sdiv);

let clr="black";

const indiv=document.createElement("div");
indiv.style.display="flex";
indiv.id="idiv2";
sdiv.appendChild(indiv);

const btn1=document.querySelector("#eraserbtn");
indiv.appendChild(btn1);
btn1.addEventListener("click",()=>{
    clr="white";
});

const btn2=document.querySelector("#aboutbtn");
indiv.appendChild(btn2);

const btn3=document.querySelector("#rainbowbutton")
indiv.appendChild(btn3);
btn3.addEventListener("click",()=>{
    clr=getRandomColor();
});


const btn4=document.querySelector("#clearbutton")
indiv.appendChild(btn4);
btn4.addEventListener("click",()=>{
    const c=document.querySelectorAll("#cp");
    c.forEach((c)=>{
        c.style.backgroundColor="white";
    });
});

const btn5=document.querySelector("#defaultbutton");
indiv.appendChild(btn5);
btn5.addEventListener("click",()=>{
    clr="black";
});

const majorflex=document.createElement("div");
majorflex.id="mflex";
document.body.appendChild(majorflex);

const grid=document.createElement("div");
grid.id="grid1"
majorflex.appendChild(grid);

for (let i = 0; i < 16*16; i++) {
    const cell = document.createElement("div");
    cell.id="cp";
    cell.style.border = "1px solid lightgray";
    cell.style.backgroundColor = "white";      
    grid.appendChild(cell);
    cell.addEventListener("mouseover",() => {
        cell.style.backgroundColor = clr;
    });
}

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

const inp=document.createElement("div");
inp.id="ip1";
inp.textContent="Copyright@2025 MukhyanshEtchASketch.github.io"
document.body.appendChild(inp);