class Suspender{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.Suspender = Constraint.create(options);
        World.add(world, this.Suspender);
        }
        display(){
            var pointA= this.Suspender.bodyA.position;
            var pointB= this.Suspender.bodyB.position;

            
            strokeWeight (1)
            var LINE1X = pointA.x
            var LINE1Y = pointA.y
            
            var LINE2X = pointB.x+this.offsetX
            var LINE2Y = pointB.y+this.offsetY
            line (LINE1X,LINE1Y,LINE2X,LINE2Y);
        }
        
}
