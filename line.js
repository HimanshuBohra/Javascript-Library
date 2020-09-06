function createLineElement(x, y, length, angle) {
    var line = document.createElement("div");
    var styles = 'border: 1px solid black; '
               + 'width: ' + length + 'px; '
               + 'height: 0px; '
               + '-moz-transform: rotate(' + angle + 'rad); '
               + '-webkit-transform: rotate(' + angle + 'rad); '
               + '-o-transform: rotate(' + angle + 'rad); '  
               + '-ms-transform: rotate(' + angle + 'rad); '  
               + 'position: absolute; '
               + 'top: ' + y + 'px; '
               + 'left: ' + x + 'px; ';
    line.setAttribute('style', styles); 
    return line;
}

function createCirlce(radius){
    var cir = document.createElement("div");
    var styles = 'border: 3px solid green;'+
                    'border-radius: '+ radius+'%;'+
                    'width: 500px;'+
                    'height: 500px;'+
                    'box-sizing: border-box;'+
                    '-moz-box-sizing: border-box;';
    cir.setAttribute('style', styles);  
    return cir;                
}
    
function Line(x,y){
        var a = x[0] - y[0],
            b = x[1] - y[1],
            c = Math.sqrt(a * a + b * b);
    
        var sx = (x[0] + y[0]) / 2,
            sy = (x[1] + y[1]) / 2;
    
        var x = sx - c / 2,
            y = sy;
    
        var alpha = Math.PI - Math.atan2(-b, a);
    
        return createLineElement(x, y, c, alpha);
}

//Triangle
function Triangle(coordinates) {
    document.body.appendChild(Line(coordinates[0],coordinates[1]));
    document.body.appendChild(Line(coordinates[0],coordinates[2]));
    document.body.appendChild(Line(coordinates[1],coordinates[2]));
}
var triangle = [[0,200],[100,100],[200,200]];
//Triangle(triangle);

// Square
function Square(square){
    document.body.appendChild(Line(square[0],square[1]));
    document.body.appendChild(Line(square[0],square[2]));
    document.body.appendChild(Line(square[1],square[3]));
    document.body.appendChild(Line(square[2],square[3]));
}
var square = [[500,200],[500,300],[700,200],[700,300]];
//Square(square);

//Circle

//document.body.appendChild(createCirlce(190));





