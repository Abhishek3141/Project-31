class ball
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.4
			
			}

		this.r=r
		
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        this.color = color(random(0,255),random(0,255),random(0,255))
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			var angle = this.body.angle;
			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle)
			//strokeWeight(4);
			fill(this.color)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipseMOde(RADIUS)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}