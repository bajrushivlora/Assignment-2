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


var content = document.getElementById('content');
var bigbox = document.getElementById('hidden');
var move = [5, 10, 15, 20];
var randomMove = move[Math.floor(Math.random()*move.length)];
var body = document.getElementById('body');
var phrases = ['NO SIGNAL NO SIGNAL NO SIGNAL NO SIGNAL', 'ERROR ERROR ERROR ERROR ERROR', 'UNAVAILABLE UNAVAILABLE UNAVAILABLE UNAVAILABLE UNAVAILABLE', 'SOS SOS SOS SOS SOS SOS', 'SEND HELP SEND HELP SEND HELP SEND HELP SEND HELP', 'MALFUNCTION MALFUNCTION MALFUNCTION MALFUNCTION MALFUNCTION']

for (var i = 0; i < 400; i++) {
    var shapes = document.createElement('div');
    shapes.classList.add('shapeone');
    content.append(shapes);
}

for (var i = 0; i < 3000; i++) {
    var invisibleshapes = document.createElement('div');
    invisibleshapes.classList.add('shapetwo');
    bigbox.append(invisibleshapes);
}

for (var i = 0; i < 60; i++) {
    var words = document.createElement('p');
    words.classList.add('word');
    words.innerHTML = phrases[Math.floor(Math.random()*phrases.length)];
    body.append(words);
}

// ------------------------------------------------------------------------------------------------------------------------------------


let circles = document.querySelectorAll('.shapeone');

circles.forEach(function(shapes, i) {
    var x = randomNumber(150, 250);
    var y = randomNumber(30, 100);
    var z = randomNumber(10, 50);
    var randomWidth = randomNumber(100, 500);
    var randomHeight = randomNumber(100, 200);

    shapes.style.background = hslColor(x, y, z); 
    shapes.style.width = randomWidth + 'vw';
    shapes.style.height = randomHeight + 'vh';
});


// ------------------------------------------------------------------------------------------------------------------------------------


circles.forEach(function(shapes, i) {
    function decreaseWidth() {   
        var currentWidth = parseFloat(shapes.style.width);
        shapes.style.width = (currentWidth - 3) + "vw";
        }

    function changeHeight() {   
        var currentHeight = parseFloat(shapes.style.width);
        shapes.style.height = (currentHeight - 3) + "vh";
        }
    
    setInterval(decreaseWidth, 50);
    setInterval(changeHeight, 50);
});


// ------------------------------------------------------------------------------------------------------------------------------------


let squares = document.querySelectorAll('.shapetwo');

squares.forEach(function(invisibleShapes) {

    invisibleShapes.addEventListener('mouseover', function() {
        var color = ['#fc03d7', 'ffffff', '#f2ff00', '#77ff00', '#00f7ff', '#ff0000', '#002fff'];
        var margins = randomNumber(-300, 80);
        // var xaxis = randomNumber(-100, 100);
        // var yaxis = randomNumber(-100, 0);
        invisibleShapes.style.opacity = .5;
        invisibleShapes.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
        invisibleShapes.style.margin = `${margins}px`;
    })
});


// ------------------------------------------------------------------------------------------------------------------------------------


var clickonword = function() {

let nosignal = document.querySelectorAll('.word');
nosignal.forEach(function(word) {

    word.addEventListener('click', function(yy) {
        var size = randomNumber(4, 18);
        var xaxis = randomNumber(-5, 20);
        word.style.opacity = 1;
        word.style.fontSize = `${size}vw`;
    });
})
}

body.addEventListener('click', clickonword);
