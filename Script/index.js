document.onkeydown = Movement;


function Movement(e){

    e = e || window.event;
    var element = document.getElementById('characterIcon'),
    style = window.getComputedStyle(element);    
    const crrLeft = style.getPropertyValue('left');
    const crrTop = style.getPropertyValue('top');
    if (e.keyCode == '38') {//up      
        document.getElementById('characterIcon').style.top = parseInt(crrTop) - 30;
    }
    else if (e.keyCode == '40') {//down
        document.getElementById('characterIcon').style.top = parseInt(crrTop) + 30;
    }
    else if (e.keyCode == '37') {//left
        document.getElementById('characterIcon').style.left = parseInt(crrLeft) - 30;
    }
    else if (e.keyCode == '39') {//right
        document.getElementById('characterIcon').style.left = parseInt(crrLeft) + 30;
    }
}