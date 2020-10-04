function Edge(a,b){
    this.a = a;
    this.b = b;
    this.dx = a.x - b.x;
    this.dy = a.y - b.y;

    this.distSq = this.dx*this.dx + this.dy*this.dy;
}