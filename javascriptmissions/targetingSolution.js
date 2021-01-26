class TargetingSolution {
  constructor(coordinates) {
    this.x = coordinates.x;
    this.y = coordinates.y;
    this.z = coordinates.z;
  }

  target() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}
const m = new TargetingSolution({
  x: 10,
  y: 15,
  z: 900,
});

console.log(m.target());
