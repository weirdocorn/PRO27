class Rope{
    constructor(body1, point2, offsetX, offsetY){
        
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x: this.offsetX, y: this.offsetY}
        }

        this.rope=Constraint.create(options)
        World.add(world, this.rope)
    }

    display(){
        if(this.Rope.bodyA){
            var pointA = this.Rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(rgb(48,22,8));
            if(pointA.x < 220){
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            }
        }
    }
}