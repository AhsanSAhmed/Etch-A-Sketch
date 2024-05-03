const container=document.querySelector(".container");
const globalHeight=400,globalWidth=400;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid()
{
    for(let i=0;i<(16 ** 2);i++)
    {
        const box=document.createElement("div");
        box.setAttribute("style", "width:25px;height:25px;outline:black solid 1px;");
        box.addEventListener('mousedown', changeColor);
        box.addEventListener('mouseover',changeColor);
        container.appendChild(box);
    }
}

function changeColor(e)
{
    if(e.type==='mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = "blue";
}

createGrid();