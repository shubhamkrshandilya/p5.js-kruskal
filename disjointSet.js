function DisjointSet(size){
    this.size = size;
    this.parent = [];
    for(var i=0; i<this.size;i++){
        this.parent[i] = i;
    }
    this.find = function(x){
        if(this.parent[x] != x){
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    this.union = function(x,y){
        this.parent[this.find(x)] = this.find(y);
    }
}