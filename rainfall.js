class drop{
    constructor(x, y) {
        var options = {
            isStatic : false,
            restitution:0,
            friction:0,
            density:7.8
        }
        this.body = Bodies.circle(x, y,5/2, options);
        World.add(world, this.body);
      }
      display(){
          push();
          ellipseMode(CENTER);
          fill(2,0,142);
          ellipse(this.body.position.x, this.body.position.y, 5,5);
          pop();
}

update(){

  if (this.body.position.y>=height){

    Matter.Body.setPosition(this.body,{x:random(0,370),y:random(0,370)})

  }

}

}