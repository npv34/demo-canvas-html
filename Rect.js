class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvans = document.getElementById('myCanvas');
        this.ctx = this.canvans.getContext('2d');
    }

    draw() {
        this.ctx.beginPath(); // bat dau ve canvas or la khoi dong lai net ve
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        this.x -= 5;
        this.draw();
    }

    moveRight() {
        this.x += 5;
        this.draw();
    }
}