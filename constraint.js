class constraint{
    constructor(bodyA,bodyB,length){

        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness: 0.5 , 
            length: length,          
        }
        this.constraint = Constraint.create(options);
        World.add(world,this.constraint);

    }
    display(){
        var pA = this.constraint.bodyA.position;
        var pB = this.constraint.bodyB.position;
        strokeWeight(4);
        line(pA.x, pA.y, pB.x, pB.y);

    }
}