class Bin {
    constructor(x, y, width, height,options) {
      var options = {
         isStatic:true,
          'restitution':0.0,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      fill("red");
      push ();
      translate (pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("red");
      rect(0, 0, this.width, this.height);
      pop ();
    }
  }