class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    getx(){
         return this.x;
    }
    gety(){
        return this.y;
    }
    show() {
        console.log(`X :${this.x}, Y: ${this.y}`);
    }
}

// Base class
class Shape {
    constructor(color,thickness) {
      this.color = color;
      this.thickness=thickness;
    }
  
    show() {
      console.log(` Color :${this.color}  Thickness '${this.thickness}`);
    }
  }
  
  // Derived class that extends Shape
  class Line extends Shape {
    constructor(color,thickness, startPoint, endPoint) {
      super(color,thickness); // Call the parent class constructor
      this.startPoint = startPoint;
      this.endPoint=endPoint;
    }
  
    show() {
        super.show();
        this.startPoint.show();
        this.endPoint.show();
    }

  
    getStartPoint() {
      return this.startPoint;
    }

    getEndPoint() {
        return this.endPoint;
    }
  }
  

  const DisplayManager = {
     show:()=>{
                    // Create an instance of Line
                var stPoint=new Point(45,23);
                var endPoint=new Point(77,100);
                const myLine = new Line('red', 2,stPoint, endPoint);
                myLine.show(); // Output: Rex barks.
                }
    };
  export default   DisplayManager;