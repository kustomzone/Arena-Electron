class Obstacle {
    constructor(x1, y1, x2, y2, color) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        // Angle made with the x axis if one of the points was on the x axis
        this.angle = Math.atan((Math.abs(this.x1 - this.x2) / Math.abs(this.y1 - this.y2)));
        this.color = color;
    }

    draw(context) {
        context.strokeStyle = this.color;
        context.beginPath(this.x1, this.y1);
        context.lineTo(this.x2, this.y2);
        context.stroke();
    }

    checkBulletCollision(bullet) {
        throw TypeError("Abstract class does not handle collisions");
    }

    checkPlayerCollision(player) {
        throw TypeError("Abstract class does not handle collisions");
    }
}