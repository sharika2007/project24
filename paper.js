class Paper{
    constructor(x,y,radius){
        var options = {
          isStatic:false,
            restitution:0.2,
            friction:0.3,
            density:1.0
        }
        this.radius = radius
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body);
   
    }
    display(){
        var pos=this.body.position
        push ()
        translate (pos.x,pos.y)
        rectMode(CENTER)
       fill("PURPLE");
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius);
        pop()
    }
 }