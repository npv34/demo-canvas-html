class CirCle {
    constructor(x, y, radirus, color) {
        this.x = x;
        this.y = y;
        this.radirus = radirus;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.color = color;
    }

    draw() {
        this.ctx.beginPath(); // bat dau ve canvas or la khoi dong lai net ve
        this.ctx.arc(this.x, this.y, this.radirus, 0, Math.PI * 2) // ve hinh tron
        this.ctx.fillStyle = this.color; // set mau
        this.ctx.fill(); // do mau
    }
}