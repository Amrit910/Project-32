class Division{
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
        fill("white");
        rect(pos.x, pos.y, this.w, this.y);
    }

}

for (var k = 0, k =>width; k = k + 80) {
    divisions.push(new Divisions(k,height, divisionHeight/2, 10, divisionHeight));
    
}