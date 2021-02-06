class Ducktypium {
  constructor(color) {
    this.validColor = ["red", "blue", "yellow"];

    if (!this.validColor.includes(color)) {
      throw "Halt! Color must be red, blue or yellow.";
    }
    this.color = color;
    this.calibrationSequence = [];
  }

  refract(colors) {
    if (!this.validColor.includes(colors)) {
      throw "Halt! Color must be red, blue or yellow";
    }
    if (colors === this.color) {
      return colors;
    } else if (
      (colors === "red" && this.color === "blue") ||
      (colors === "blue" && this.color === "red")
    ) {
      return "purple";
    } else if (
      (colors === "red" && this.color === "yellow") ||
      (colors === "yellow" && this.color === "red")
    ) {
      return "orange";
    } else if (
      (colors === "yellow" && this.color === "blue") ||
      (colors === "blue" && this.color === "yellow")
    ) {
      return "green";
    }
  }

  calibrate(sequence) {
    let sortedSequence = sequence.sort();
    let newSequence = sortedSequence.map((value) => value * 3);
    this.calibrationSequence = newSequence;
    return this.calibrationSequence;
  }
}

try {
  const badColor = new Ducktypium("black");
} catch (e) {
  console.error(e);
}

// Create a new instance of the class
const dt = new Ducktypium("red");

console.log(dt.color); // prints 'red'

console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("red")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
