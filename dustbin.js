class dustbin {

    constructor(x,y,width,height) {

    var options1 = {
      
        isStatic : true,
        density : 2

    }
    
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options1);
    World.add(world, this.body);

 }

   display() {

    var pos = this.body.position;

    fill("black")
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);

   }
}