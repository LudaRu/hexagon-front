var SIZE = 30;// Радиус описанной окружности правильного шестиугольника
var ROWS = 60;
var COLS = 30;


// Основные размеры хексагона, отспупы
var width = SIZE * 2,
    horizPadding = width * 3 / 4,
    height = Math.sqrt(3) / 2 * width,
    vertPadding = height / 2;


// Сам процесс
allCentralPoints = getAllCentralPoints();
var mysvg = document.getElementById("svg");

for (var i = 0; i < allCentralPoints.length; i++) {
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'use');
    newElement.setAttribute('href', "#bird");
    newElement.setAttribute('x', allCentralPoints[i][0]);
    newElement.setAttribute('y', allCentralPoints[i][1]);
    mysvg.appendChild(newElement);
}


//  РАссчет центров хексагонов
function getAllCentralPoints() {
    var figurePoints = [];
    for (var row = 1; row <= ROWS; row++) {
        for (var col = 1; col <= COLS; col++) {

            if (row & 1) {// если нечетная строка
                figurePoints.push([
                    horizPadding * 2 * (col - 1),
                    vertPadding * (row - 1)
                ]);
            }
            else {// если четка то добавим отступ
                figurePoints.push([
                    horizPadding * 2 * (col - 1) + horizPadding,
                    vertPadding * (row - 1)
                ]);
            }

        }
    }

    return figurePoints;
}











