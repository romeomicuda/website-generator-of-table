var getButton = document.getElementById("getButton");
var upperLayer = document.getElementById("upperLayer");

var modalContent = document.querySelector('.modal-content');
var modal = document.getElementById('upperLayer');


getButton.addEventListener("click", function() {
    var x = document.getElementById('inputX').value;
    var y = document.getElementById('inputY').value;
    controlInputX();
    controlInputY();
    if (controlInputX() && controlInputY()) {
        var modalContent = document.querySelector('.modal-content');
        var modal = document.getElementById('upperLayer');
        var btn = document.getElementById('getButton');
        var span = document.getElementsByClassName('close')[0];

        var table = document.createElement('table');
        table.setAttribute('class', 'table table-dark');
        modalContent.appendChild(table);

        for (let i = 0; i < (Number(y) + 1); i++) {
            var row = document.createElement('tr');
            row.setAttribute('id', ('row' + i));
            table.appendChild(row);

            for (let j = 0; j < (Number(x) + 1); j++) {
                var column = document.createElement('td');
                column.setAttribute('id', 'column' + j);
                row.appendChild(column);

                if (row.id != 'row0' && column.id == 'column0') {
                    column.innerHTML = 'Y = ' + i;
                } else if (row.id != 'row0' && column.id != 'column0') {
                    column.innerHTML = j * i;
                } else if (row.id == 'row0' && column.id != 'column0') {
                    column.innerHTML = ('X = ' + j);
                }
            }
        }

        var close = document.createElement('input');
        close.setAttribute('type', 'button');
        close.setAttribute('value', 'Close');
        close.setAttribute('class', 'closewin btn btn-primary');
        close.setAttribute('type', "submit");
        modalContent.appendChild(close);

        modal.style.display = 'block';
        modalContent.style.display = 'block';


        close.addEventListener("click", function() {
            modal.style.display = 'none';
            table.remove();
            close.remove();
        });
    }

    span.onclick = function() {
        modal.style.display = 'none';
        modalContent.style.display = 'none';
            table.remove();
            close.remove();
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalContent.style.display = 'none';
            table.remove();
            close.remove();
        }
    };
});



document.getElementById("helpBlockY").style.visibility = 'hidden';
document.getElementById("helpBlockY").style.visibility = 'hidden';

function controlInputX() {
    var inputX = document.getElementById('inputX').value;
    var helpBlockX = document.getElementById('helpBlockX');

    if (inputX == "") {
        helpBlockX.innerHTML = "Required input X";
        helpBlockX.style.visibility = 'visible';
        return false;
    } else if ((/[.,]/g).test(inputX)) {
        helpBlockX.innerHTML = "Enter a natural number";
        helpBlockX.style.visibility = "visible";
        return false;
    } else if (inputX < 1) {
        helpBlockX.innerHTML = "Small input";
        helpBlockX.style.visibility = "visible";
        return false;
    } else if (inputX > 9) {
        helpBlockX.innerHTML = "Big input";
        helpBlockX.style.visibility = "visible";
        return false;
    } else if ((/\d/g).test(inputX)) {
        helpBlockX.innerHTML = "";
        helpBlockX.style.visibility = "hidden";
        return true;
    }

}

function controlInputY() {
    var inputY = document.getElementById('inputY').value;
    var helpBlockY = document.getElementById('helpBlockY');

    if (inputY == "") {
        helpBlockY.innerHTML = "Required input Y";
        helpBlockY.style.visibility = 'visible';
        return false;
    } else if ((/[.,]/g).test(inputY)) {
        helpBlockY.innerHTML = "Enter a natural number";
        helpBlockY.style.visibility = "visible";
        return false;
    } else if (inputY < 1) {
        helpBlockY.innerHTML = "Small input";
        helpBlockY.style.visibility = "visible";
        return false;
    } else if (inputY > 9) {
        helpBlockY.innerHTML = "Big input";
        helpBlockY.style.visibility = "visible";
        return false;
    } else if ((/\d/g).test(inputY)) {
        helpBlockY.innerHTML = "";
        helpBlockY.style.visibility = "hidden";
        return true;
    }

}