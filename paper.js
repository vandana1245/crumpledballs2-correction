class paper {
    constructor(x, y) {
      var options = {
        'restitution':0.3,
        'friction':0,
        'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 50;
      this.image = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      fill(125,160,28);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  };
  