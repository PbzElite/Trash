class Trash
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
            'restitution' : .3,
            'friction' : 0.5,
            'density' : 1.2	
			}
        
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("this.paper.png");
		this.body=Bodies.circle(this.x, this.y,radius, options);
 		World.add(world, this.body);

	}
	display()
	{   
        ellipseMode(RADIUS);
        circle(this.body.position.x,this.body.position.y,this.radius)
        imageMode (CENTER);
        image (this.image,this.body.position.x,this.body.position.y,33,33);

	}

}
