class Paper {
    constructor(x, y, diameter) {
      var options = {
          'restitution':0,
          'friction':0.1,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, diameter/2, options);
      this.radius = diameter/2;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      fill("white");
      push ();
      translate (pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(5);
      stroke("grey");
      ellipse(0, 0, this.radius,this.radius);
      pop ();
    }
  }