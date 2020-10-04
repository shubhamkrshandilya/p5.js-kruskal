function Point(x,y,count){
    this.x = x;
    this.y = y;
    this.ax = 0;
    this.ay = 0;
    this.vx = 0;
    this.vy = 0;
    this.id = count;
    this.radius = 5;
    this.edges = [];
    this.show = function(){
        for(var i=0; i<this.edges.length;i++){
            if(this.id < this.edges[i].id){
                stroke(0);
                strokeWeight(2);
                line(this.x,this.y,this.edges[i].x,this.edges[i].y);
            }
        }
        ellipse(this.x, this.y, 2*this.radius, 2*this.radius);
    }

    this.addEdge = function(p){
        this.edges.push(p);
        p.edges.push(this); 
    }

    this.wander = function(){
        this.ax = .8 * this.ax + .1 - random(.2);
        this.ay = .8 * this.ay + .1 - random(.2);
        this.vx = .9 * this.vx + this.ax;
        this.vy = .9 * this.vy + this.ay;
        this.x = min(width, max(0, round(this.x + this.vx)));
        this.y = min(height, max(0, round(this.y + this.vy)));
    }
}