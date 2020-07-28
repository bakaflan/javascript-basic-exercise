export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.
  constructor(vectorX, vectorY) {
    this.vectorX = vectorX;
    this.vectorY = vectorY;
  }

  get x() {
    return this.vectorX;
  }

  get y() {
    return this.vectorY;
  }

  static plus(VectorA, VectorB) {
    const newX = VectorA.x + VectorB.x;
    const newY = VectorA.y + VectorB.y;
    return new Vector(newX, newY);
  }

  static minus(VectorA, VectorB) {
    const newX = VectorA.x - VectorB.x;
    const newY = VectorA.y - VectorB.y;
    return new Vector(newX, newY);
  }

  distance() {
    return ((this.vectorX ** 2) + (this.vectorY ** 2)) ** 0.5;
  }
}
