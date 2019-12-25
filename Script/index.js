document.onkeydown = Movement;


function Movement(e) {

    e = e || window.event;
    var element = document.getElementById('characterIcon'),
        style = window.getComputedStyle(element);
    const crrLeft = style.getPropertyValue('left');
    const crrTop = style.getPropertyValue('top');

    if (e.keyCode == '38') {//up      
        var valid = validateMovement(crrLeft, crrTop, 'up')
        if (valid) {
            document.getElementById('characterIcon').style.top = parseInt(crrTop) - 30;
        }

    }
    else if (e.keyCode == '40') {//down
        var valid = validateMovement(crrLeft, crrTop, 'down')
        if (valid) {

            document.getElementById('characterIcon').style.top = parseInt(crrTop) + 30;
        }

    }
    else if (e.keyCode == '37') {//left
        var valid = validateMovement(crrLeft, crrTop, 'left')
        if (valid) {

            document.getElementById('characterIcon').style.left = parseInt(crrLeft) - 30;
        }

    }
    else if (e.keyCode == '39') {//right

        var valid = validateMovement(crrLeft, crrTop, 'right')
        if (valid) {
            document.getElementById('characterIcon').style.left = parseInt(crrLeft) + 30;
        }

    }



}

function validateMovement(left, top, action) {

    let validate = true;

    switch (action) {
        case 'up':
            if (parseInt(top) - 30 <= 0) { validate = false; }
            break;

        case 'down':
            if (parseInt(top) + 30 >= 600) { validate = false; }
            break;

        case 'left':
            if (parseInt(left) - 30 <= 0) { validate = false; }
            break;

        case 'right':
            if (parseInt(left) + 30 >= 600) { validate = false; }
            break;

    }

    return validate;
}