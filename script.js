function hslColor(h, s, l) {
    var hue = h;
    var saturation = s + "%";
    var luminance = l + "%";
    var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";
    return color;
}

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// ------------------------------------------------------------------------------------------------------------------------------------


var content = document.querySelector('.content');
var move = [5, 10, 15, 20];
var randomMove = move[Math.floor(Math.random()*move.length)];


for (var i = 0; i < 100; i++) {
    var shapes = document.createElement('div');
    shapes.classList.add('shapeone');
    shapes.style = `transform: translateX(${randomMove}px);"`
    content.append(shapes);
}

//I want each shape to have a randomMove value but it only chooses one random value from the array and assigns it for every shape.


var circles = document.querySelectorAll('.shapeone');

circles.forEach(function(shape, i) {
    var x = randomNumber(150, 250);
    var y = randomNumber(30, 100);
    var z = randomNumber(10, 50);
    var width = [350, 360, 370, 380, 390];
    var height = [300, 400, 450, 500, 600];
    var randomWidth = width[Math.floor(Math.random()*width.length)]; //select a random width from my width array
    var randomHeight = height[Math.floor(Math.random()*height.length)]; //select a random height from my height array    

    shape.style.background = hslColor(x, y, z); 
    shape.style.width = randomWidth + 'px';
    shape.style.height = randomHeight + 'px';
});
