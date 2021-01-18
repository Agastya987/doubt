class Paper{
    constructor(x,y,radius){
        var option ={
            isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Bodies.rectangle(x,y,radius,options);
        this.radius = radius;
        
        world.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        Fill(yellow);
        rect(this.body.position.x,this.radius)
    }
}