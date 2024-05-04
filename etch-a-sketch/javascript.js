const container=document.querySelector(".container");
const globalHeight=400,globalWidth=400;
let gridRows=16,gridColumns=16;

let eraserState=false;

const eraser=document.querySelector(".eraser");
eraser.addEventListener("click", updateEraser);

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const form=document.querySelector("#gridSize");

form.addEventListener("submit", (e)=>{e.preventDefault();
    const gridRowsInput = document.querySelector("#gridRows");
    const gridColumnsInput = document.querySelector("#gridColumns");
    const newgridRows=parseInt(gridRowsInput.value);
    const newgridColumns=parseInt(gridColumnsInput.value);

    if (!isNaN(newgridRows) && !isNaN(newgridColumns)) 
    {
        gridRows = newgridRows;
        gridColumns = newgridColumns;
        createGrid(gridRows, gridColumns);
    }
    else
    {
        createGrid(16, 16);
    }
    });

function updateEraser()
{
    eraserState = !eraserState;
    if(eraserState)
    {
        eraser.style.backgroundColor = "#f7bc46";
    }
    else if(!eraserState)
    {
        eraser.style.backgroundColor = "#ffedca";
    }
}

function createGrid(gridRows,gridColumns)
{
    let boxHeight=globalHeight / gridRows;
    let boxWidth=globalHeight / gridColumns;

    container.innerHTML = "";

    for(let i=0;i<(gridRows*gridColumns);i++)
    {
        const box=document.createElement("div");
        box.style.width = boxWidth + "px";
        box.style.height = boxHeight + "px";
        box.style.outline = "1px solid black";
        box.addEventListener('mousedown', changeColor);
        box.addEventListener('mouseover',changeColor);
        container.appendChild(box);
    }
}

function changeColor(e)
{
    if(e.type==='mouseover' && !mouseDown) return;
    if(!eraserState)
    {
        e.target.style.backgroundColor = "#333333";
    }
    else if(eraserState)
    {
        e.target.style.backgroundColor = "";
    }
}

createGrid(gridRows,gridColumns);