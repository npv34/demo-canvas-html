class CirCle {
    constructor(x, y, radirus, color) {
        this.x = x;
        this.y = y;
        this.radirus = radirus;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.color = color;
        this.dY = 5;
        this.dX = 5;
        this.flagMove = "upLeft"
    }

    draw() {
        this.ctx.beginPath(); // bat dau ve canvas or la khoi dong lai net ve
        this.ctx.arc(this.x, this.y, this.radirus, 0, Math.PI * 2) // ve hinh tron
        this.ctx.fillStyle = this.color; // set mau
        this.ctx.fill(); // do mau
    }

    move() {
        // va cham top
        if (this.y == this.radirus) {
            this.flagMove = "downLeft";
        }

        //va cham thanh ben
        if (this.x == this.radirus) {
            this.flagMove = "downRight";
        }

        // va cham duoi

        if (this.y + this.radirus == this.canvas.height) {
            this.flagMove = "upRight";
        }

        if (this.x + this.radirus == this.canvas.width) {
            this.flagMove = "upLeft";
        }

        // if (this.flagMove == 'downLeft') {
        //     console.log(this.y + this.radirus)
        //     if ((this.y + this.radirus) == 395) {
        //         console.log('oke')
        //         this.flagMove = "upLeft";
        //     }
        // }


        switch (this.flagMove) {
            case "upLeft":
                this.moveUpLeft();
                break;
            case "downLeft":
                this.moveDownLeft();
                break;
            case "downRight":
                this.moveDownRight();
                break;
            case "upRight":
                this.moveUpRight();
                break;


        }
        // console.log(this.x + '-' + this.y)
        this.draw();
    }

    moveUpLeft() {
        this.y -= this.dY;
        this.x -= this.dX;
    }

    moveDownLeft() {
        this.y += this.dY;
        this.x -= this.dX;
    }

    moveDownRight() {
        this.y += this.dY;
        this.x += this.dX;
    }

    moveUpRight() {
        this.y -= this.dY;
        this.x += this.dX;
    }


}