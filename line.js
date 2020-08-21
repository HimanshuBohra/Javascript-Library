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

function Triangle(x1, y1, x2, y2, x3, y3) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    document.body.appendChild(createLineElement(x, y, c, alpha));
    var a = x2 - x3,
        b = y2 - y3,
        c = Math.sqrt(a * a + b * b);

    var sx = (x2 + x3) / 2,
        sy = (y2 + y3) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    document.body.appendChild(createLineElement(x, y, c, alpha));
    var a = x3 - x1,
        b = y3 - y1,
        c = Math.sqrt(a * a + b * b);

    var sx = (x3 + x1) / 2,
        sy = (y3 + y1) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    document.body.appendChild(createLineElement(x, y, c, alpha));
}
function Line(x1,y1,x2,y2){
        var a = x1 - x2,
            b = y1 - y2,
            c = Math.sqrt(a * a + b * b);
    
        var sx = (x1 + x2) / 2,
            sy = (y1 + y2) / 2;
    
        var x = sx - c / 2,
            y = sy;
    
        var alpha = Math.PI - Math.atan2(-b, a);
    
        return createLineElement(x, y, c, alpha);
}

//Triangle
Triangle(0 , 200 , 100 , 100, 200, 200);

// Square
document.body.appendChild(Line(100,200,100,300));
document.body.appendChild(Line(100,200,200,200));
document.body.appendChild(Line(100,300,200,300));
document.body.appendChild(Line(200,300,200,200));


document.body.appendChild(createCirlce(190));
