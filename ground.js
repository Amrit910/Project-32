class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.bodies = Bodies.Rectangle(x,y,width,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);


    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.w, this.y);
    }

}