class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.0004,
            length: 1
        }
        this.Sling = Constraint.create(options);
        this.pointB= pointB
        World.add(world, this.Sling);
    }

    attach(body){
		this.slingShot.bodyA=body;
	}

    fly(){
        this.Sling.bodyA=null
    }

    display(){
        if(this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
    
}
}