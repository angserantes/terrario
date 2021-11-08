dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement (terrarium)  {
    //establecer 4 posicións para o posicionamento na pantalla//
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
        terrariumElement.onpointerdown = pointerDrag;


//dragElement se aplica a los elementos de terrareo cada vez que el puntero se ponga encima//


function pointerDrag(e) {
    e.preventDefatult();
    console.log(e);
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElemntDrag;
}

function elementDrag (e){
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    console.log(pos1, pos, pos3, pos4);
    terrariumElement.style.top = terrarimunElement.offsetTop= pos2 + 'px';
    terrariumElement.style.left = terrarimunElement.offsetLeft= pos1 + 'px';
}

function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
}
}