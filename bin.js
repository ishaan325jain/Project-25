class Bin {
    constructor() {
      var options = {
        'isStatic' : true       
    }
      this.leftwall = Bodies.rectangle(375,325,50,100, options);
      this.lwidth = 50;
      this.lheight =100;
      World.add(world, this.leftwall);

      this.botwall = Bodies.rectangle(425,330,150,20, options);
      this.bwidth = 150;
      this.bheight = 100;
      World.add(world, this.botwall);      

      this.rightwall = Bodies.rectangle(475,325,50,100, options);
      this.rwidth =  50 ;
      this.rheight = 100;
      World.add(world, this.rightwall);

      this.image =  loadImage("dustbingreen.png");
      }

    display(){
      var lpos =this.leftwall.position;
      fill(173);
      stroke(173);
      rectMode(CENTER);
      rect(lpos.x,lpos.y,this.lwidth,this.lheight);
      
      var rpos =this.rightwall.position;
      rectMode(CENTER);
      rect(rpos.x,rpos.y,this.rwidth,this.rheight);
      
      var bpos =this.botwall.position;
      imageMode(CENTER);
      image(this.image,bpos.x,bpos.y,this.bwidth,this.bheight);
     }
  }; 
  