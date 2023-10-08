// Source https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations

let angle = 0;
let triangle = new Image();
let dot = new Image();

triangle.src = './images/triangle.png';
dot.src = './images/dot.png';

function draw() {
    let ctx = document.querySelector('#canvas').getContext('2d');
    angle += 5; // Speed of rotation, using degrees for easier math

    ctx.clearRect(0, 0, 300, 300); // new frame, remove everything on screen
    ctx.save();

    ctx.drawImage(triangle, 125, 125, 50, 50);

    ctx.translate(150,150); // center the orb
    ctx.rotate(angle * (Math.PI / 180)); // set current rotation based on angle, angle converted to radian
    ctx.translate(20, 0); // Move dot away from center
    ctx.drawImage(dot, 0, 0);
    ctx.restore();

    // reset angle every full spin so the number does not go up infinitely
    if (angle >= 360) {
        angle = 0;
    }
    window.requestAnimationFrame(draw); // call next frame
}

window.requestAnimationFrame(draw);
