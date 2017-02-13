// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.

function RightTriangle(side1, side2, base) {
     this.side1 = side1,
     this.side2 = side2,
     this.base = base
   }

   var instance1 = new RightTriangle(2, 4, 5);
   var instance2 = new RightTriangle(4, 8, 12);

   console.log(instance1);
   console.log(instance2);
