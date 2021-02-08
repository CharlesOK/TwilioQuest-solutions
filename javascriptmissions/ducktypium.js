class Ducktypium {
  constructor(color) {
    this.validColor = ["red", "blue", "yellow"];

    if (!this.validColor.includes(color)) {
      throw new Error("Halt! Color must be red, blue or yellow.");
    }
    this.color = color;
    this.calibrationSequence = [];
  }

  refract(colors) {
    if (!this.validColor.includes(colors)) {
      throw new Error("Halt! Color must be red, blue or yellow");
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

const dt = new Ducktypium("red");

console.log(dt.color);

console.log(dt.refract("blue"));
console.log(dt.refract("red"));

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence);
