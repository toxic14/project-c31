class umbrella{
    constructor(x, y,r) {
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x, y,r/2, options);
        this.image=loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
        this.r=r;
        World.add(world, this.body);
      }
      display(){
          push();
          ellipseMode(CENTER);
          imageMode(CENTER);
          fill(2,0,142);
          image(this.image,this.body.position.x, this.body.position.y+70, 300,300);
          pop();
}
}