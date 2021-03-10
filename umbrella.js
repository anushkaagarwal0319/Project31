class UmbrellaMan {
    constructor(x, y) {

        var options = {
            isStatic: true,
        }

        this.man = Bodies.circle(x,y,100, options);
        World.add(world, this.man);
  
        this.image = loadImage("images/Walking Frame/walking_1.png");
    
    
    }
    display(){
        var pos =this.man.position;
        var angle = this.man.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
  };
  