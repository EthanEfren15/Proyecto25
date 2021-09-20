class paper{
    constructor(x, y, width, height) {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
         }
         this.image = loadImage("paper.png");
         if (keyCode === UP_ARROW){
            Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
            //Matter.Body.translate(paperObject, {x:130,y:-145});
            //paperObject.x=paperObject.x+130;
            //paperObject.y=paperObject.y-145;
        }
    }
    display(){
        
        push();
        imageMode(CENTER);
        image(this.image, 200, 625, 100, 100);
        pop();
     }
    
        
    
    
}
